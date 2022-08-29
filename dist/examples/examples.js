"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examplesLog = exports.EXAMPLES_FLEX_CONFIG = exports.CONFIG = void 0;
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const configs_1 = require("./configs");
core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
exports.CONFIG = configs_1.DEFAULT_CONFIG;
exports.EXAMPLES_FLEX_CONFIG = {
    evr: {
        sdk: {
            network: {
                endpoints: exports.CONFIG.endpoints,
            },
        },
    },
    superRoot: exports.CONFIG.superRoot,
};
function examplesLog(title, value) {
    console.log(`${title}:`, JSON.stringify(value, undefined, "   "));
}
exports.examplesLog = examplesLog;
//# sourceMappingURL=examples.js.map