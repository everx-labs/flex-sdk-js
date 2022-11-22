import { Flex } from "../flex";
import { integrationTestConfig } from "./config";
import { run } from "./run";

(async () => {
    try {
        const config = integrationTestConfig();
        const flex = new Flex(config.flex);
        try {
            await run(flex, config);
        } finally {
            await flex.close();
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
