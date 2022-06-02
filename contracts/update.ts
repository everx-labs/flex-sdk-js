import path from "path";
import fs from "fs";
import { AbiContract, TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import {
    contractCodeHeader,
    genContractCode,
} from "./codegen";

TonClient.useBinaryLibrary(libNode);

async function update(client: TonClient, relPaths: string[]) {
    let index = "";
    for (const relPath of relPaths) {
        const sourcePath = path.resolve(
            __dirname,
            "../../ton-contracts/cpp/freetrade",
            path.dirname(relPath),
        );
        const sourceName = path.basename(relPath);
        let abiPath = path.resolve(sourcePath, `${sourceName}.abi`);
        if (!fs.existsSync(abiPath)) {
            abiPath = path.resolve(sourcePath, `${sourceName}.abi.json`);
        }
        const tvcPath = path.resolve(sourcePath, `${sourceName}.tvc`);
        const abi: AbiContract = JSON.parse(fs.readFileSync(abiPath, "utf8"));
        const tvc = fs.readFileSync(tvcPath, "base64");
        const gen = await genContractCode(client, {
            name: sourceName,
            abi,
            tvc,
        });
        const contracts = contractCodeHeader({ hasDeploy: gen.hasDeploy }) +
            gen.code;
        index += `export { ${sourceName}Account } from "./${sourceName}Account";\n`;
        fs.writeFileSync(
            path.resolve(__dirname, "generated", `${sourceName}Account.ts`),
            contracts,
            "utf8",
        );
    }
    fs.writeFileSync(path.resolve(__dirname, "generated", `index.ts`), index, "utf8");
}


(async () => {
        try {
            const client = new TonClient();
            await update(client, [
                "ui/FlexClient",
                "ui/FlexClientTestUpdate",
                "immutable/FlexClientStub",
                "ui/AuthIndex",
                "ui/UserIdIndex",
                "exchange/Flex",
                "SuperRootOwner",
                "exchange/XchgPair",
                "exchange/PriceXchg",
                "stTONs/DePoolMock",
                "stTONs/stTONs",
                "stTONs/stTONsClientMock",
                "../tokens/fungible/RootTokenContract",
                "../tokens/fungible/FlexTokenRoot",
                "../tokens/fungible/TONTokenWallet",
                "../tokens/fungible/FlexWallet",
                "../tokens/fungible/Wrapper",
                "../tokens/fungible/WrapperEver",
                "../tokens/fungible/WrapperDeployerTip3",
                "../tokens/fungible/WrapperDeployerEver",
                "../tokens/fungible/WrapperBroxus",
                "../tokens/fungible/WrapperDeployerBroxus",
                "../../solidity/multisig/MultisigWallet",
                "immutable/SuperRoot",
                "immutable/GlobalConfig",
                "immutable/WrappersConfig",
                "ui/UserDataConfig",
                "immutable/WIC",
            ]);
            await client.close();
        } catch (e) {
            console.log(e);
        }
        process.exit(1);
    }
)();



