import path from "path";
import fs from "fs";
import { defaultConfig, FlexConfig, SignerOption } from "../../flex";

type AccountConfig = {
    address?: string;
    signer: SignerOption;
};

export type TestConfig = {
    flex: FlexConfig;
    everWallet: AccountConfig;
    client: AccountConfig;
    trader: {
        signer: string;
    };
    market: string;
    EVER: {
        wrapper: string;
        wallet: AccountConfig;
    };
    TSDT: {
        wrapper: string;
        wrapperWallet: string;
        wallet: AccountConfig;
    };
};

function getPackageFolder(): string {
    let folder = path.resolve(__dirname);
    while (folder !== "/" && !fs.existsSync(path.resolve(folder, "package.json"))) {
        folder = path.resolve(folder, "..");
    }
    return folder;
}

export function createConfig(): TestConfig {
    const configFilePath = path.resolve(
        getPackageFolder(),
        ".secret",
        "integration-test-config.json",
    );
    if (fs.existsSync(configFilePath)) {
        return JSON.parse(fs.readFileSync(configFilePath, "utf8"));
    }
    return {
        flex: defaultConfig(),
        everWallet: {
            signer: "everWallet",
        },
        client: {
            signer: "everWallet",
        },
        trader: {
            signer: "everWallet",
        },
        market: "",
        EVER: {
            wrapper: "",
            wallet: { signer: "everWallet" },
        },
        TSDT: {
            wrapper: "",
            wrapperWallet: "",
            wallet: { signer: "everWallet" },
        },
    };
}
