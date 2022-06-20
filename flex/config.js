"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = exports.MakeOrderMode = void 0;
const core_1 = require("@eversdk/core");
var MakeOrderMode;
(function (MakeOrderMode) {
    /**
     * Immediate-or-post
     *
     * Simple order that will immediately execute (partially or fully)
     * and place the left amount into the orderbook
     */
    MakeOrderMode["IOP"] = "IOP";
    /**
     * Immediate-or-cancel
     *
     * Order that will immediately execute (partially or fully)
     * and return the left amount back to the Trader wallet
     */
    MakeOrderMode["IOC"] = "IOC";
    /**
     * Post order
     *
     * Order that will be created only if there is no liquidity with this
     * price on the opposite side on the Market
     */
    MakeOrderMode["POST"] = "POST";
})(MakeOrderMode = exports.MakeOrderMode || (exports.MakeOrderMode = {}));
/** @internal */
function defaultConfig() {
    return {
        evr: {
            sdk: core_1.TonClient.defaultConfig,
        },
        trader: {
            deploy: {
                eversAll: 40e9,
                eversAuth: 1e9,
                refillWallet: 10e9,
                minRefill: 0.1e9,
            },
            order: {
                evers: 3e9,
                mode: MakeOrderMode.IOP,
            },
        },
        superRoot: "",
    };
}
exports.defaultConfig = defaultConfig;
//# sourceMappingURL=config.js.map