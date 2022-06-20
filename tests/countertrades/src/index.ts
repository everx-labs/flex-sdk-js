import { Option, program, InvalidArgumentError } from "commander"
import { trades } from "./trades"
import { airdrop } from "./airdrop"

program
    .command("trades")
    .summary("Make orders by using predeployed traders")
    .addOption(
        new Option(
            "-n, --num-traders <number>",
            "Number of traders. Must be even",
        )
            .default(1)
            .argParser(asInt),
    )
    .addOption(
        new Option(
            "-m, --ms-between-orders <number>",
            "Trader sends new order every m milliseconds",
        )
            .default(5000)
            .argParser(asInt),
    )
    .addOption(
        new Option(
            "-c, --num-cycles <number>",
            "Number of trade cycles to be performed",
        )
            .default(1)
            .argParser(asInt),
    )
    .action(trades)

program
    .command("airdrop")
    .summary("TopUp all wallets of all traders")
    .addOption(
        new Option("-j, --max-concurrency <number>")
            .default(1)
            .argParser(asInt),
    )
    .addOption(
        new Option("-c, --max-req-per-second <number>")
            .default(1)
            .argParser(asInt),
    )
    .addOption(
        new Option("-v, --value <number>", "Value in nanotokens")
            .default(1e9)
            .argParser(asInt),
    )
    .action(airdrop)

program
    .parseAsync(process.argv)
    .then(() => process.exit(0))
    .catch((error: any) => {
        if (error.code === 504) {
            console.log("Network is inaccessible.")
        } else {
            console.log(error)
        }
        process.exit(error.code || 1)
    })

function asInt(value: string) {
    const parsedValue = parseInt(value, 10)
    if (isNaN(parsedValue)) {
        throw new InvalidArgumentError("Not a number.")
    }
    return parsedValue
}
