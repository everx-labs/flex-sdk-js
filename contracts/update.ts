import path from "path";
import fs from "fs";
import { AbiContract, TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import {
    contractCodeHeader,
    genContractCode,
} from "./codegen";

TonClient.useBinaryLibrary(libNode);

async function update(
    client: TonClient,
    sources: (string | { relPath: string, name: string })[],
) {
    let index = "";
    const packagePath = path.resolve(__dirname, "..", "..");
    const generatedPath = path.resolve(packagePath, "contracts", "generated");
    for (const source of sources) {
        const relPath = typeof source === "string" ? source : source.relPath;
        const sourcePath = path.resolve(packagePath, "../ton-contracts/cpp/freetrade",
            path.dirname(relPath),
        );
        const fileName = path.basename(relPath);
        let abiPath = path.resolve(sourcePath, `${fileName}.abi`);
        if (!fs.existsSync(abiPath)) {
            abiPath = path.resolve(sourcePath, `${fileName}.abi.json`);
        }
        const tvcPath = path.resolve(sourcePath, `${fileName}.tvc`);
        const abi: AbiContract = JSON.parse(fs.readFileSync(abiPath, "utf8"));
        const tvc = fs.readFileSync(tvcPath, "base64");
        const name = typeof source === "string" ? fileName : source.name;
        const gen = await genContractCode(client, {
            name,
            abi,
            tvc,
        });
        const contracts = contractCodeHeader({ hasDeploy: gen.hasDeploy }) +
            gen.code;
        index += `export { ${name}Account } from "./${name}Account";\n`;
        fs.writeFileSync(
            path.resolve(generatedPath, `${name}Account.ts`),
            contracts,
            "utf8",
        );
    }
    fs.writeFileSync(path.resolve(generatedPath, `index.ts`), index, "utf8");
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
                {
                    relPath: "../tokens/fungible/broxus/contracts/TokenRoot",
                    name: "Tip31Root",
                },
                {
                    relPath: "../tokens/fungible/broxus/contracts/TokenWallet",
                    name: "Tip31Wallet",
                },
                {
                    relPath: "../tokens/fungible/WrapperDeployerBroxus",
                    name: "Tip31WrapperDeployer",
                },
                {
                    relPath: "../tokens/fungible/WrapperBroxus",
                    name: "Tip31Wrapper",
                },
                {
                    relPath: "../tokens/fungible/broxus/contracts/additional/TokenFactory",
                    name: "Tip31Factory",
                },
                {
                    relPath: "../tokens/fungible/broxus/contracts/TokenFactoryBuilder",
                    name: "Tip31FactoryBuilder",
                },

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
            process.exit(1);
        }
    }
)();



