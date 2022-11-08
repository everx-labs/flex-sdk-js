import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { DEFAULT_CONFIG } from "./configs";
import { FlexConfig } from "../flex";

TonClient.useBinaryLibrary(libNode);
export const CONFIG = DEFAULT_CONFIG;

export const EXAMPLES_FLEX_CONFIG: Partial<FlexConfig> = {
    evr: {
        sdk: {
            network: {
                endpoints: CONFIG.endpoints,
            },
        },
    },
    superRoot: CONFIG.superRoot,
}   ;

