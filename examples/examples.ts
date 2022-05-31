import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";
import { DEFAULT_CONFIG } from "./configs";

TonClient.useBinaryLibrary(libNode);
export const CONFIG = DEFAULT_CONFIG;

export function initExample() {
    Flex.config = {
        web3: {
            network: {
                endpoints: CONFIG.endpoints,
            },
        },
        superRoot: CONFIG.superRoot,
    };
}

export function log(title: string, value: any) {
    console.log(`${title}:`, JSON.stringify(value, undefined, "   "));
}
