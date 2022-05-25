"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const codegen_1 = require("./codegen");
core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
function update(client, relPaths) {
    return __awaiter(this, void 0, void 0, function* () {
        let index = "";
        for (const relPath of relPaths) {
            const sourcePath = path_1.default.resolve(__dirname, "../../ton-contracts/cpp/freetrade", path_1.default.dirname(relPath));
            const sourceName = path_1.default.basename(relPath);
            let abiPath = path_1.default.resolve(sourcePath, `${sourceName}.abi`);
            if (!fs_1.default.existsSync(abiPath)) {
                abiPath = path_1.default.resolve(sourcePath, `${sourceName}.abi.json`);
            }
            const tvcPath = path_1.default.resolve(sourcePath, `${sourceName}.tvc`);
            const abi = JSON.parse(fs_1.default.readFileSync(abiPath, "utf8"));
            const tvc = fs_1.default.readFileSync(tvcPath, "base64");
            const gen = yield (0, codegen_1.genContractCode)(client, {
                name: sourceName,
                abi,
                tvc,
            });
            const contracts = (0, codegen_1.contractCodeHeader)({ hasDeploy: gen.hasDeploy }) +
                gen.code;
            index += `export { ${sourceName}Account } from "./${sourceName}Account";\n`;
            fs_1.default.writeFileSync(path_1.default.resolve(__dirname, "generated", `${sourceName}Account.ts`), contracts, "utf8");
        }
        fs_1.default.writeFileSync(path_1.default.resolve(__dirname, "generated", `index.ts`), index, "utf8");
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new core_1.TonClient();
        yield update(client, [
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
            "../../solidity/multisig/MultisigWallet",
            "immutable/SuperRoot",
            "immutable/GlobalConfig",
            "immutable/WrappersConfig",
            "ui/UserDataConfig",
            "immutable/WIC",
        ]);
        yield client.close();
    }
    catch (e) {
        console.log(e);
    }
    process.exit(1);
}))();
//# sourceMappingURL=update.js.map