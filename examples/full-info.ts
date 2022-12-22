import path from "path"
import fs from "fs"
import { TonClient } from "@eversdk/core"
import { libNode } from "@eversdk/lib-node"

type AccountConfig = {
    address?: string
    signer: SignerOption
}

export type TestConfig = {
    flex: FlexConfig
    everWallet: AccountConfig
    client: AccountConfig
    trader: {
        signer: string
    }
    market: string
    EVER: {
        wrapper: string
        wallet: AccountConfig
    }
    TSDT: {
        wrapper: string
        wrapperWallet: string
        wallet: AccountConfig
    }
}

function getPackageFolder(): string {
    let folder = path.resolve(__dirname)
    while (folder !== "/" && !fs.existsSync(path.resolve(folder, "package.json"))) {
        folder = path.resolve(folder, "..")
    }
    return folder
}

export function createConfig(): TestConfig {
    const configFilePath = path.resolve(
        getPackageFolder(),
        ".secret",
        "integration-test-config.json",
    )
    return JSON.parse(fs.readFileSync(configFilePath, "utf8"))
}

import { Flex, FlexConfig, SignerOption, Token, Market, Client, Trader } from "../flex"

(async () => {
    TonClient.useBinaryLibrary(libNode)
    const config = createConfig()
    const flex = new Flex(config.flex)
    const { market, everWallet, client, trader } = config

    const clientAddress = await Client.deploy(flex, {
        everWallet: everWallet,
        signer: client.signer
    });

    const traderId = await flex.evr.signers.resolvePublicKey(trader.signer)

    try {
        flex.evr.log.info("Tokens", await Token.queryTokens(flex))
        flex.evr.log.info("Markets", await Market.queryMarkets(flex))
        flex.evr.log.info("Market Order Book", await Market.queryOrderBook(flex, market))
        flex.evr.log.info("Market Price", await Market.queryPrice(flex, market))

        console.log({clientAddress})
        console.log({traderId})

        flex.evr.log.info("Client info", await Client.getClientInfo(flex, clientAddress))
        flex.evr.log.info("Trader index info", await Trader.getIndexInfo(flex, clientAddress, traderId))
        flex.evr.log.info("Trader Orders", await Trader.queryOrders(flex, traderId))
        flex.evr.log.info("Trader Trades", await Trader.queryTrades(flex, traderId))

        flex.evr.log.info("Trader Wallets", await Trader.queryWallets(flex, {clientAddress, traderId}))

    } catch (err) {
        flex.evr.log.error(err)
        setTimeout(() => process.exit(1), 0)
    } finally {
        await flex.close()
    }
})()
