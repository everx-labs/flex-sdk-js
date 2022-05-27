import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";

TonClient.useBinaryLibrary(libNode);

export const CONFIG = {
    endpoints: ["https://sdk3.dev.tonlabs.io"],
    superRoot: "0:9d71a3e9c428fe866726ef9ced86849612b2d1f15d5ff0b0e09b4b1eb2d537fd",
    trader1: {
        client: "0:fb5a27b2e921984fa5677582a8bee280100c3fb0ab716177fe8bcac18862aaaa",
        id: "69d5a4b878919d3883c2663ab7c0c8cd5eeb65ccb1a519ff51fafdc8cc01f36d",
        signer: "eec6f5bcae7e0c05c2874e6966e3748f5bdb132edaffc97ccab6a1caf584dd59",
        wallet: "0:3e69bcd1707f8b6df47ee9183bc1eea4bff61182c0b001faea1f5858a1ea3b34",
    },
    market1: "0:8f039f5ea30fd6322c930f486a82f61c086b71b2adcb72a6c0a452c4538fb9dd",
    token1: "0:accca28d6f0ab3d873f28c7b1f29f99b0b07244f622f5a99f15e27eb613c8fb6",
};

export const CONFIG_DEVNET= {
    endpoints: ["https://sdk3.dev.tonlabs.io/"],
    superRoot: "0:ed1741f19f7c2f870e96bca16c45283721f023235dc6896c765407e9127bb073",
    trader1: {
        client: "0:8fc7626f86a402c5017af99aaa5847e1a5625f11ed74a544cf4f7f40f058c528",
        id: "581ca7aba0e8db800bfbee0eac59b0a93125e3f80a66b5288ecf487e26771b3a",
        signer: "ce0afcb8c62d85b681a30b5a8dc3e8dc9ea2624d6e079d125aa0b03c7354a2fa",
        wallet: "0:a6fcf7ad27fd363f435da3563d11bf75cba4c888a0774ddaaf5efc99ccb1da93",
    },
    trader2: {
        client: "0:08bc2b9f2d9c9e407cd81bfdb6e474a08ba37189518533a879c5c3cfe4a129d8",
        id: "80b878022ea2393623073864e3fee84317d555c7a286d8f9d1d3afd092f45005",
        signer: "f85e8639a9eba941643a1e729b1168cd228009733a728d18a04335a2eaffda55",
        wallet: "0:2fadcd4588fd2f51ef89eca96426cdc09fdef3cfc622df81bdc5b451158aee0e",
    },
    market1: "0:5571d6cab32560ded545c80f8b29ea4c598856fd39bb80c6d195c15164eedc44",
    token1: "0:18d32d5faee5da3b34c0dcb92ab1d5354c83c03c5455fdf84e4584c4d5360997",
};

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
