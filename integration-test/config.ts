import { defaultConfig, FlexConfig } from "../flex";
import * as path from "path";
import * as fs from "fs";

export type IntegrationTestConfig = {
    flex: FlexConfig;
};

export function integrationTestConfig(): IntegrationTestConfig {
    const configFilePath = path.resolve(__dirname, "..", ".secret", "integration-test-config.json");
    if (fs.existsSync(configFilePath)) {
        return JSON.parse(fs.readFileSync(configFilePath, "utf8"));
    }
    return {
        flex: defaultConfig(),
    };
}
