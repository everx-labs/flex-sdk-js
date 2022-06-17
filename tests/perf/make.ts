import { TonClient } from "@eversdk/core"
import { libNode } from "@eversdk/lib-node"
import {
    Evr,
    Flex,
    FlexConfig,
    Token,
    Market,
    Exchange,
    Trader,
    WalletInfo,
    LogLevel
//    EverWallet,
} from "../../flex"

import { Option, program } from "commander"
import { writeFile } from "fs/promises"
import { concurrent } from "fasy"

import { topUp } from "./giver"

type KeyConfig = {
    addr: string
    keys: {
        public: string
        secret: string
    }
}

type MarketConfig = {
    broxusTokenWallet: string
    ever_wrapper: string
    flx_wrapper: string
    flx_wrapper_wallet: string
    market: string
    client1: KeyConfig
}

type TraderConfig = {
    id: string
    signer: string
}

TonClient.useBinaryLibrary(libNode)

const FLEX_CONFIG_FILENAME = "./flex.config.json"
const TRADERS_CONFIG_FILENAME = "./traders.config.json"
const MSIG_CONFIG_FILENAME = "./msig.config.json"
//const PRICE_COUNTER = {} limit 150

const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

/*
function* priceLoop() {
    for (let i = 0; ; ) {
        yield PRICE_RANGE[i]
        i = i == PRICE_RANGE.length - 1 ? 0 : i + 1 // cycle loop index
    }
}
*/

const config = async (options: any): Promise<void> => {
    const FLEX_CONFIG_TEMPLATE: Partial<FlexConfig> = {
        evr: {
            sdk: {
                network: {
                    endpoints: options.endpoints ?? "http://127.0.0.1",
                },
            },
        },
        superRoot: options.superRoot,
    }
    await writeFile(
        FLEX_CONFIG_FILENAME,
        JSON.stringify(FLEX_CONFIG_TEMPLATE, null, 4),
        { encoding: "utf-8" },
    )
}

const info = async (options: any): Promise<void> => {
    const FLEX_CONFIG: Partial<
        FlexConfig & MarketConfig
    > = require(FLEX_CONFIG_FILENAME)
    const TRADERS_CONFIG: TraderConfig[] = require(TRADERS_CONFIG_FILENAME)
    const flex = new Flex(FLEX_CONFIG)

    if (FLEX_CONFIG && FLEX_CONFIG.market) {
	    /*
        console.dir(
            {
                "Market Order Book": await Market.queryOrderBook(
                    flex,
                    FLEX_CONFIG.market,
                ),
            },
            { depth: null },
        )
       */
        console.dir(
            {
                "Market Price": await Market.queryPrice(
                    flex,
                    FLEX_CONFIG.market,
                ),
            },
            { depth: null },
        )
    }

    if (options.index >= 0 && TRADERS_CONFIG && TRADERS_CONFIG[options.index]) {
        if (options.orders) {
            console.dir(
                {
                    Orders: await Trader.queryOrders(
                        flex,
                        TRADERS_CONFIG[options.index].id,
                    ),
                },
                { depth: null },
            )
        }
        if (options.trades) {
            console.dir(
                {
                    Trades: await Trader.queryTrades(
                        flex,
                        TRADERS_CONFIG[options.index].id,
                    ),
                },
                { depth: null },
            )
        }
        if (FLEX_CONFIG && FLEX_CONFIG.client1 && FLEX_CONFIG.client1.addr) {
            if (options.wallet || !(options.orders || options.trades)) {
                console.dir(
                    {
                        Wallets: await Trader.queryWallets(flex, {
                            client: FLEX_CONFIG.client1.addr ?? 0,
                            trader: TRADERS_CONFIG[options.index].id,
                        }),
                    },
                    { depth: null },
                )
            }
        }
    } else {
        console.dir({ Tokens: await Token.queryTokens(flex) }, { depth: null })
        console.dir(
            { Markets: await Market.queryMarkets(flex) },
            { depth: null },
        )
    }
}

const deploy = async (options: any): Promise<void> => {
    const FLEX_CONFIG: Partial<
        FlexConfig & MarketConfig
    > = require(FLEX_CONFIG_FILENAME)

    const evr = new Evr(FLEX_CONFIG.evr)

    evr.log.level = LogLevel.NONE

    const signer = options.exchange

    const result = await Exchange.deploy(evr, {
        signer,
        everWallet: { signer: options.msig },
        tokenTypes: {
            tip3: {
                wrapperSigner: signer,
                wrapperDeployerSigner: signer,
            },
            ever: {
                wrapperSigner: signer,
                wrapperDeployerSigner: signer,
            },
        },
    })

    console.dir({ Exchange: result }, { depth: null })
}

const clients = async (options: any): Promise<void> => {
    const FLEX_CONFIG: Partial<
        FlexConfig & MarketConfig
    > = require(FLEX_CONFIG_FILENAME)
    const MSIG_CONFIG: KeyConfig = require(MSIG_CONFIG_FILENAME)
    const flex = new Flex(FLEX_CONFIG)

    const doJob = async () => {
        const id = (await flex.evr.sdk.crypto.generate_random_sign_keys())
            .public
        const traderSigner =
            await flex.evr.sdk.crypto.generate_random_sign_keys()

        if (
            !(
                FLEX_CONFIG.client1?.addr &&
                FLEX_CONFIG.broxusTokenWallet &&
                FLEX_CONFIG.flx_wrapper &&
                FLEX_CONFIG.flx_wrapper_wallet &&
                FLEX_CONFIG.ever_wrapper
            )
        ) {
            return null
        }

        await Trader.deploy(flex, {
            client: {
                address: FLEX_CONFIG.client1?.addr,
                signer: traderSigner.secret,
            },
            id,
            name: `Trader xxx`,
            pubkey: traderSigner.public,
        })

        await Trader.deployTip31Wallet(flex, {
            client: FLEX_CONFIG.client1?.addr,
            trader: id,
            tokenWrapper: FLEX_CONFIG.flx_wrapper,
            tokenWrapperWallet: FLEX_CONFIG.flx_wrapper_wallet,
            tokenWallet: FLEX_CONFIG.broxusTokenWallet,
            tokenUnits: "100000",
            everWallet: { signer: MSIG_CONFIG.keys.secret },
        })

        await Trader.deployEverWallet(flex, {
            client: FLEX_CONFIG.client1?.addr,
            trader: id,
            tokens: 100000,
            wrapper: FLEX_CONFIG.ever_wrapper,
            everWallet: { signer: MSIG_CONFIG.keys.secret },
        })

        return {
            id,
            pubkey: traderSigner.public,
            signer: traderSigner.secret,
        }
    }

    const result = await concurrent(options.maxConcurrency).map(
        doJob,
        new Array(options.traders),
    )
    console.dir(result, { depth: null })

    await flex.close()
}

const test = async (options: any): Promise<void> => {
    const FLEX_CONFIG: Partial<
        FlexConfig & MarketConfig
    > = require(FLEX_CONFIG_FILENAME)
    const TRADERS_CONFIG: TraderConfig[] = require(TRADERS_CONFIG_FILENAME)
    const stepTrader = 1800
    const PRICE_RANGE = require("./range3600.json").slice(0, stepTrader) // (d3js.org) d3.range(0, 3600).map(x => Number((Math.sin((x/10)*(Math.PI/180))+2).toFixed(9)))

    if (
        !(
            FLEX_CONFIG &&
            FLEX_CONFIG.market &&
            FLEX_CONFIG.client1 &&
            FLEX_CONFIG.client1.addr &&
            TRADERS_CONFIG
        )
    ) {
        console.error(`market / trader not found`)
        return
    }

    const slicedGroups: [[number, number]?] = []
    for (
        let step, start = 0, end = (step = PRICE_RANGE.length / options.sliced);
        start < PRICE_RANGE.length;
        start += step, end += step
    ) {
        slicedGroups.push([start, end])
    }
    const [start, end] = slicedGroups[options.group] ?? [0, PRICE_RANGE.length]

    let idx = 0
    function* entries() {
        let sell = true // first trader sell token
        for (let i = start; ; ) {
            yield [
                idx++,
                { i: i, trader: TRADERS_CONFIG[i], sell, price: PRICE_RANGE[i], investor: TRADERS_CONFIG[i + stepTrader] },
            ] // each trader has specific price
            if (i == end - 1) {
                // cycle current sliced group
                i = start
                sell = !sell // next cycle switch from sell to buy and vice versa, so same trader should place order to sell and buy
            } else {
                i += 1
            }
        }
    }

    const flex = new Flex(FLEX_CONFIG)

    const client = FLEX_CONFIG.client1.addr
    const market = FLEX_CONFIG.market

    flex.evr.log.level = LogLevel.INFO

    let timestamps: number[] = []

    /*
    setInterval(() => {
        console.log(`TPS: ${timestamps.filter(Boolean).length}`)
    }, 1000)
    */

    /*
    const clearOldTimestamps = (ts: number) => {
        timestamps = timestamps.filter(x => x > ts)
    }
    */

    async function trade(job: any) {
        /*
        clearOldTimestamps(Date.now() - 1000)

        while (timestamps.length >= options.maxReqPerSecond) {
            await sleep(10)
            clearOldTimestamps(Date.now() - 1000)
        }
        timestamps.push(Date.now())
        */
        const { i, trader, sell, price, investor } = job
        /*
        try {
            await Trader.makeOrder(flex, {
                client,
                trader,
                sell,
                market,
                price,
                amount: 1,
            })
        } catch (error) {
            console.dir(
                {
                    i,
                    trader,
                    sell,
                    price,
                    error,
                },
                { depth: null },
            )
        }
        */
        // if flag is fired wait until timeout removes it
        while(timestamps[i] !== undefined && (Date.now() - timestamps[i]) < options.maxReqPerSecond * 1_000) {
            await sleep(100)
        }

        // topup gas
        /*
        const traderWallets = await Trader.queryWallets(flex, {
            client: FLEX_CONFIG.client1?.addr ?? "",
            trader: trader.id,
        })
        await traderWalletsTopUp(flex, traderWallets)
        */

        // fire flag that this trader index in process
        timestamps[i] = Date.now()

        // execute without waiting for result
        Trader.makeOrder(flex, {
            client,
            trader,
            sell,
            market,
            price,
            amount: 1,
        }).then().catch(error => {
            console.dir(
                {
                    i,
                    trader,
                    sell,
                    price,
                    error,
                },
                { depth: null },
            )
        })

        Trader.makeOrder(flex, {
            client,
            trader: investor,
            sell: !sell,
            market,
            price,
            amount: 1,
        }).then().catch(error => {
            console.dir(
                {
                    i,
                    trader: investor,
                    sell: !sell,
                    price,
                    error,
                },
                { depth: null },
            )
        })

        // after n seconds drop flag
        //setTimeout(()=>{delete timestamps[i]}, options.maxReqPerSecond * 1_000)
    }

    await concurrent(options.maxConcurrency).map(trade, { entries })

    await flex.close()
}

const traderWalletsTopUp = async (flex: Flex, traderWallets: WalletInfo[]) => {
    await Promise.all(
        traderWallets.map(
            wallet =>
                wallet.nativeCurrencyBalance < 1_000 ?
                    topUp(flex, wallet.address, 1_000_000)
                    :
                    Promise.resolve()
        )
    )
}

const airdrop = async (options: any): Promise<void> => {
    const FLEX_CONFIG: Partial<
        FlexConfig & MarketConfig
    > = require(FLEX_CONFIG_FILENAME)
    const TRADERS_CONFIG: TraderConfig[] = require(TRADERS_CONFIG_FILENAME)
    const flex = new Flex(FLEX_CONFIG)

    let i = 0
    const doJob = async (trader: TraderConfig) => {
        const traderWallets = await Trader.queryWallets(flex, {
            client: FLEX_CONFIG.client1?.addr ?? "",
            trader: trader.id,
        })
        try {
            await traderWalletsTopUp(flex, traderWallets)
        } catch (error) {
            console.dir({error}, {depth: null})
        }
        setTimeout(()=>console.log(`${i++}`), 1)
        return traderWallets.length < 2 ? null : trader
    }

    const result = await concurrent(options.maxConcurrency).map(
        doJob,
        TRADERS_CONFIG,
    )
    await flex.close()

    await writeFile(
        "clean.traders.config.json",
        JSON.stringify(result.filter(Boolean), null, 4),
        { encoding: "utf-8" },
    )
}

const pm2 = async (): Promise<void> => {
    const template = `
module.exports = {
  apps : [
    {
      name   : "app0",
      script : "./make.js",
      args   : "test -j 20 -c 5 -s 48 -g 47"
    },
  ]
}
`
    await writeFile(
        "ecosystem.config.json",
        template,
        { encoding: "utf-8" },
    )
}

program
    .command("config")
    .summary(
        "Generate main flex.config.json with endpoints and superRoot address",
    )
    .option("-e, --endpoints [endpoints...]")
    .requiredOption("-r, --super-root <address>")
    .action(config)

program
    .command("info")
    .summary("Show information about markets")
    .option(
        "-i, --index <number>",
        "Index number of client in configuration file",
        (val, _) => parseInt(val),
    )
    .option("-w, --wallet")
    .option("-o, --orders")
    .option("-t, --trades")
    .action(info)

program
    .command("deploy")
    .summary("Deploy exchange")
    .option("-e, --exchange <signer>")
    .option("-s, --msig <signer>")
    .action(deploy)

program
    .command("clients")
    .summary("Generate configuration with clients and traders")
    .addOption(
        new Option(
            "-t, --traders <num>",
            "Number of traders per client",
        ).default(1),
    )
    .action(clients)

program
    .command("pm2")
    .summary("Generate configuration file for pm2")
    .addOption(
        new Option(
            "-j, --max-concurrency <number>",
            "Number of process",
        ).default(1),
    )
    .action(pm2)

program
    .command("test")
    .summary(
        "Make orders by using specific trader from generated configuration",
    )
    .addOption(new Option("-c, --max-req-per-second <number>").default(1))
    .addOption(new Option("-j, --max-concurrency <number>").default(1))
    .addOption(new Option("-g, --group <number>").default(0))
    .addOption(new Option("-s, --sliced <number>").default(1))
    .action(test)

program
    .command("airdrop")
    .summary(
        "TopUp all wallets of all traders",
    )
    .addOption(new Option("-j, --max-concurrency <number>").default(1))
    .action(airdrop)

program
    .parseAsync(process.argv)
    .then(() => process.exit(0))
    .catch((error: any) => {
        if (error.code === 504) {
            console.error("Network is inaccessible.")
        } else {
            console.dir(error, { depth: null })
        }
        process.exit(error.code || 1)
    })
