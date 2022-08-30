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
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const flex_1 = require("../flex");
core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const FLEX_CONFIG = {
            evr: {
                sdk: {
                    network: {
                        endpoints: ["https://test.flex.everos.dev/graphql"],
                    },
                },
            },
            superRoot: "Super Root address",
        };
        const flex = new flex_1.Flex(FLEX_CONFIG);
        yield flex.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=initialize-flex.js.map