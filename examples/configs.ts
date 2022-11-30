type TraderConfig = {
    client: string,
    id: string,
}

type EverWalletConfig = {
    address: string,
    signer: string,
}

type Tip3Config = {
    TBTC: {
        tokenWalletAddress: string,
        tokenWrapperAddress: string,
        tokenWrapperWalletAddress: string
    },
    EVER: {
        wrapperAddress: string
    }
}

type ExamplesConfig = {
    endpoints: string[],
    superRoot: string,
    trader: TraderConfig,
    everWallet: EverWalletConfig,
    tip3: Tip3Config,
    market: string
}

export const DEFAULT_CONFIG: ExamplesConfig = {
    endpoints: ["https://test.flex.everos.dev"],
    superRoot: "0:7a6d3ab04ab26333d6e0523410b60d9f4bc55913e4c0291010c8314e9e47d169",
    trader: {
        client: "0:69899f1d1f4e0b548a398e1e79001395de9414aa4badfb06956cc4d8da025e4f",
        id: "ec8788a2af7b5b359bf781953c99a07be55cdfc8e10806a80cb9a77523e5e185",
    },
    everWallet: {
        address: "0:c2578fa6292d3d56b17051d289f428ccafd09282e43ad27119d6107e5c492070",
        signer: "everWallet"
    },
    tip3: {
        TBTC: {
            tokenWalletAddress: "0:1309c37ce30b1884a95359009299d89636f43a56f997b11486ae04ca0b8b1ced", // everWallet(Owner) tip3 
            tokenWrapperAddress: "0:b10af0f3b17440d3a152e78b7dd971be7d47bc3299aa465bf7ceddb79660b948", // major.address
            tokenWrapperWalletAddress: "0:69d1ab51377f2fa29fc121b956b96f01f9234b9a3579552d0ec526c1d6e66613" // major.externalAddress(Vault)
        },
        EVER: {
            wrapperAddress: "0:1cc3596e2db5cc92d0e02f55526f8aec949924ef320d72b763a5f4aafcca3e30" // minor.address
        }
    },
    market: "0:10a7d6fedfc295ffe65316c3639934b3240a0cde715836d87eb2f59bc71a94bc" // "TBTC/EVER"
};

