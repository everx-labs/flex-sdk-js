"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.initExample = exports.CONFIG = void 0;
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const flex_1 = require("../flex");
const configs_1 = require("./configs");
core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
exports.CONFIG = configs_1.DEFAULT_CONFIG;
function initExample() {
    flex_1.Flex.config = {
        web3: {
            network: {
                endpoints: exports.CONFIG.endpoints,
            },
        },
        superRoot: exports.CONFIG.superRoot,
    };
}
exports.initExample = initExample;
function log(title, value) {
    console.log(`${title}:`, JSON.stringify(value, undefined, "   "));
}
exports.log = log;
//# sourceMappingURL=examples.js.map