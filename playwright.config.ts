import type { PlaywrightTestConfig } from "@playwright/test";
const TIMEOUT = 30 * 60 * 1000;
const config: PlaywrightTestConfig = {
    timeout: 30 * 60 * 1000,
    workers: 1,
    maxFailures: 100,
    reporter: [
        ["list"],
        ["junit", { outputFile: "./integration-test/test-results/junit.xml" }],
        ['allure-playwright', { outputFolder: './integration-test/test-results', suiteTitle: false }]
    ],
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
