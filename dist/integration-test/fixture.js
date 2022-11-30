"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = exports.integrationTestConfig = void 0;
const flex_1 = require("../flex");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const test_1 = require("@playwright/test");
function getPackageFolder() {
    let folder = path.resolve(__dirname);
    while (folder !== "/" && !fs.existsSync(path.resolve(folder, "package.json"))) {
        folder = path.resolve(folder, "..");
    }
    return folder;
}
function integrationTestConfig() {
    const configFilePath = path.resolve(getPackageFolder(), ".secret", "integration-test-config.json");
    if (fs.existsSync(configFilePath)) {
        return JSON.parse(fs.readFileSync(configFilePath, "utf8"));
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
            id: "",
            wallet: "",
            signer: "everWallet",
            EVER: {
                external: { signer: "everWallet" },
                internal: "",
            },
            TSDT: {
                external: { signer: "everWallet" },
                internal: "",
            },
        },
        market: {
            address: "",
            EVER: {
                wrapper: "",
            },
            TSDT: {
                wrapper: "",
                wrapperWallet: "",
            },
        },
    };
}
exports.integrationTestConfig = integrationTestConfig;
exports.test = test_1.test.extend({
    flex({ config }, use) {
        return __awaiter(this, void 0, void 0, function* () {
            core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
            const flex = new flex_1.Flex(config.flex);
            try {
                yield use(flex);
            }
            finally {
                yield flex.close();
            }
        });
    },
    config({}, use) {
        return __awaiter(this, void 0, void 0, function* () {
            yield use(integrationTestConfig());
        });
    },
});
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
//# sourceMappingURL=fixture.js.map