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
const flex_1 = require("../flex");
const examples_1 = require("./examples");
const helpers_1 = require("../contracts/helpers");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const evr = new flex_1.Evr({
            sdk: {
                network: { endpoints: ["http://localhost"] },
            },
        });
        evr.log.level = helpers_1.LogLevel.DEBUG;
        const signer = "flex-exchange";
        const info = yield flex_1.Exchange.deploy(evr, {
            signer,
            everWallet: { signer: "msig" },
            tokenTypes: {
                tip3: {
                    wrapperSigner: signer,
                    wrapperDeployerSigner: signer,
                },
                ever: {
                    wrapperSigner: signer,
                    wrapperDeployerSigner: signer,
                },
            },
        });
        (0, examples_1.examplesLog)("Exchange", info);
        yield evr.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=create-exchange.js.map