"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = exports.MakeOrderMode = void 0;
const core_1 = require("@eversdk/core");
var MakeOrderMode;
(function (MakeOrderMode) {
    MakeOrderMode["IOP"] = "IOP";
    MakeOrderMode["IOC"] = "IOC";
    MakeOrderMode["POST"] = "POST";
})(MakeOrderMode = exports.MakeOrderMode || (exports.MakeOrderMode = {}));
function defaultConfig() {
    return {
        web3: core_1.TonClient.defaultConfig,
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