import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";

TonClient.useBinaryLibrary(libNode);

export const CONFIG = {
    superRoot: "0:96c2dbb3e69de0c7cf801698ba87edb99d1a3e6d8a34ccea0d34939acc6de7b4",
    trader1: {
        client: "0:8fc7626f86a402c5017af99aaa5847e1a5625f11ed74a544cf4f7f40f058c528",
        id: "581ca7aba0e8db800bfbee0eac59b0a93125e3f80a66b5288ecf487e26771b3a",
        signer: "flex-trader-1",
        wallet: "0:a6fcf7ad27fd363f435da3563d11bf75cba4c888a0774ddaaf5efc99ccb1da93",
    },
    trader2: {
        client: "0:08bc2b9f2d9c9e407cd81bfdb6e474a08ba37189518533a879c5c3cfe4a129d8",
        id: "80b878022ea2393623073864e3fee84317d555c7a286d8f9d1d3afd092f45005",
        signer: "flex-trader-2",
        wallet: "0:2fadcd4588fd2f51ef89eca96426cdc09fdef3cfc622df81bdc5b451158aee0e",
    },
    market1: "0:5571d6cab32560ded545c80f8b29ea4c598856fd39bb80c6d195c15164eedc44",
    token1: "0:18d32d5faee5da3b34c0dcb92ab1d5354c83c03c5455fdf84e4584c4d5360997",
};


export function initExample() {
    Flex.config = {
        client: {
            network: {
                endpoints: ["https://flex2.dev.tonlabs.io"],
            },
        },
        superRoot: CONFIG.superRoot,
    };
}

export function log(title: string, value: any) {
    console.log(`${title}:`, JSON.stringify(value, undefined, "   "));
}
