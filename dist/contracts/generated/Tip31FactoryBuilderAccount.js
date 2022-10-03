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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tip31FactoryBuilderAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class Tip31FactoryBuilderAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(Tip31FactoryBuilderAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "constructor", {});
        });
    }
    runSetRootCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setRootCode", input, options);
        });
    }
    setRootCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setRootCode", input);
        });
    }
    runSetWalletCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setWalletCode", input, options);
        });
    }
    setWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setWalletCode", input);
        });
    }
    runDeployTokenFactory(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployTokenFactory", input, options);
        });
    }
    deployTokenFactory(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployTokenFactory", input);
        });
    }
    run_rootCode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "_rootCode", {}, options);
        });
    }
    _rootCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "_rootCode", {});
        });
    }
    run_walletCode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "_walletCode", {}, options);
        });
    }
    _walletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "_walletCode", {});
        });
    }
}
exports.Tip31FactoryBuilderAccount = Tip31FactoryBuilderAccount;
Tip31FactoryBuilderAccount.package = {
    abi: { "ABI version": 2, "version": "2.2", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [], "outputs": [] }, { "name": "setRootCode", "inputs": [{ "name": "rootCode", "type": "cell" }], "outputs": [] }, { "name": "setWalletCode", "inputs": [{ "name": "walletCode", "type": "cell" }], "outputs": [] }, { "name": "deployTokenFactory", "inputs": [{ "name": "factoryCode", "type": "cell" }, { "name": "nonce", "type": "uint256" }, { "name": "owner", "type": "address" }, { "name": "factoryDeployValue", "type": "uint128" }, { "name": "rootDeployValue", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "_rootCode", "inputs": [], "outputs": [{ "name": "_rootCode", "type": "cell" }] }, { "name": "_walletCode", "inputs": [], "outputs": [{ "name": "_walletCode", "type": "cell" }] }], "data": [], "events": [], "fields": [{ "name": "_pubkey", "type": "uint256" }, { "name": "_timestamp", "type": "uint64" }, { "name": "_constructorFlag", "type": "bool" }, { "name": "_rootCode", "type": "cell" }, { "name": "_walletCode", "type": "cell" }] },
    tvc: "te6ccgECHAEAA2sAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsZBQQbArztRNDXScMB+GYh2zzTAAGOHIMI1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8CwYDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwYGAYCKCCCEGe4X+y74wIgghBx7eOMu+MCDQcCKCCCEGi1Xz+64wIgghBx7eOMuuMCCggDKDD4RvLgTPhCbuMA1NHbPDDbPPIAFwkWASz4RSBukjBw3vhCuvLgZPgA2zz4D/hrFgIiMPhCbuMA+Ebyc9H4ANs88gALFgIW7UTQ10nCAY6A4w0MFwE0cO1E0PQFiCD4a/hqgED0DvK91wv/+GJw+GMbBE4gggoBRcK64wIgghAUVV6DuuMCIIIQXsYEnrrjAiCCEGe4X+y64wISEQ8OAU4w0ds8+EohjhuNBHAAAAAAAAAAAAAAAAA57hf7IMjOzMlw+wDe8gAXAygw+Eby4Ez4Qm7jANTR2zww2zzyABcQFgEs+EUgbpIwcN74Qrry4GT4ANs8+A/4ahYBTjDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACUVV6DgyM7MyXD7AN7yABcDmDD4RvLgTPhCbuMAIZTU1NHQkdTi0//6QNN/1NHQ03/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IIBRcKzs3JcPsAkTDiMNs88gAXExYE/vhFIG6SMHDe+EK68uBk+ADbPPgPcMjL/3BtgED0Q1UDyMv/cViAQPRDyPQAyVUDyM+EgPQA9ADPgcmIUwBY+Ev4SlUFVQdVBiD5AMjPigBAy//J0FVwVQgpyM+FCM4B+gJzzwtqIds8zM+DVWDIz5DYUl0mzst/zMzMWcjMzM0WGxUUAArNyXH7AAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAKPhL+Er4Q/hCyMv/yz/Pg8zMye1UACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRsaABRzb2wgMC42MS4wAAA=",
    code: "te6ccgECGQEAAz4ABCSK7VMg4wMgwP/jAiDA/uMC8gsWAgEYArztRNDXScMB+GYh2zzTAAGOHIMI1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8CAMDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwVFQMCKCCCEGe4X+y74wIgghBx7eOMu+MCCgQCKCCCEGi1Xz+64wIgghBx7eOMuuMCBwUDKDD4RvLgTPhCbuMA1NHbPDDbPPIAFAYTASz4RSBukjBw3vhCuvLgZPgA2zz4D/hrEwIiMPhCbuMA+Ebyc9H4ANs88gAIEwIW7UTQ10nCAY6A4w0JFAE0cO1E0PQFiCD4a/hqgED0DvK91wv/+GJw+GMYBE4gggoBRcK64wIgghAUVV6DuuMCIIIQXsYEnrrjAiCCEGe4X+y64wIPDgwLAU4w0ds8+EohjhuNBHAAAAAAAAAAAAAAAAA57hf7IMjOzMlw+wDe8gAUAygw+Eby4Ez4Qm7jANTR2zww2zzyABQNEwEs+EUgbpIwcN74Qrry4GT4ANs8+A/4ahMBTjDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACUVV6DgyM7MyXD7AN7yABQDmDD4RvLgTPhCbuMAIZTU1NHQkdTi0//6QNN/1NHQ03/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IIBRcKzs3JcPsAkTDiMNs88gAUEBME/vhFIG6SMHDe+EK68uBk+ADbPPgPcMjL/3BtgED0Q1UDyMv/cViAQPRDyPQAyVUDyM+EgPQA9ADPgcmIUwBY+Ev4SlUFVQdVBiD5AMjPigBAy//J0FVwVQgpyM+FCM4B+gJzzwtqIds8zM+DVWDIz5DYUl0mzst/zMzMWcjMzM0TGBIRAArNyXH7AAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAKPhL+Er4Q/hCyMv/yz/Pg8zMye1UACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRgXABRzb2wgMC42MS4wAAA=",
    codeHash: "3837540ade5739afc4c9bb54e8bbeae918e8b4b2388f08ca6114cf601f2837bf",
};
//# sourceMappingURL=Tip31FactoryBuilderAccount.js.map