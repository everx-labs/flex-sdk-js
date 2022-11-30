"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TIMEOUT = 30 * 60 * 1000;
const config = {
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
exports.default = config;
//# sourceMappingURL=playwright.config.js.map