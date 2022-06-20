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
exports.deployClient = void 0;
const contracts_1 = require("../../contracts");
const web3_1 = require("../web3");
const DEFAULTS = {
    transferEvers: 55,
    deployEvers: 50,
};
/** @internal */
function deployClient(flex, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const everWallet = new web3_1.EverWallet(flex.evr, options.everWallet);
        const signer = yield flex.evr.signers.resolve(options.signer);
        const publicKey = yield flex.evr.signers.publicKey(signer);
        const userConfig = yield flex.getUserConfigAccount();
        const pubkey = `0x${publicKey}`;
        const address = (yield userConfig.getFlexClientAddr({
            pubkey,
        })).output.value0;
        const isActive = yield flex.evr.accounts.isActive(address);
        if (!isActive) {
            const transferEvers = (_a = options.transferEvers) !== null && _a !== void 0 ? _a : DEFAULTS.transferEvers;
            const deployEvers = (_b = options.deployEvers) !== null && _b !== void 0 ? _b : DEFAULTS.deployEvers;
            yield everWallet.transfer({
                dest: yield userConfig.getAddress(),
                value: (0, web3_1.toUnits)(transferEvers + deployEvers),
                payload: {
                    abi: contracts_1.UserDataConfigAccount.package.abi,
                    fn: "deployFlexClient",
                    params: {
                        pubkey,
                        deploy_evers: (0, web3_1.toUnits)(deployEvers),
                    },
                },
            });
        }
        return address;
    });
}
exports.deployClient = deployClient;
//# sourceMappingURL=deploy-client.js.map