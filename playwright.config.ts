import type { PlaywrightTestConfig } from "@playwright/test";
const TIMEOUT = 30 * 60 * 1000;
const config: PlaywrightTestConfig = {
    timeout: 30 * 60 * 1000,
    workers: 1,
    projects: [
        {
            name: "unit",
            testDir: "./tests",
        },
        {
            name: "integration",
            testDir: "./integration-test",
            timeout: TIMEOUT,
        },
    ],
};

export default config;
