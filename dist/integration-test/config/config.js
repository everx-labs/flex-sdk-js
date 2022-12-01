"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const flex_1 = require("../../flex");
function getPackageFolder() {
    let folder = path_1.default.resolve(__dirname);
    while (folder !== "/" && !fs_1.default.existsSync(path_1.default.resolve(folder, "package.json"))) {
        folder = path_1.default.resolve(folder, "..");
    }
    return folder;
}
function createConfig() {
    const configFilePath = path_1.default.resolve(getPackageFolder(), ".secret", "integration-test-config.json");
    if (fs_1.default.existsSync(configFilePath)) {
        return JSON.parse(fs_1.default.readFileSync(configFilePath, "utf8"));
    }
    return {
        flex: (0, flex_1.defaultConfig)(),
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
exports.createConfig = createConfig;
//# sourceMappingURL=config.js.map