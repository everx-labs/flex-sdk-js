type TraderConfig = {
    client: string,
    id: string,
    signer: string,
    wallet: string,
}

type ExamplesConfig = {
    endpoints: string[],
    superRoot: string,
    trader: TraderConfig,
    trader2?: TraderConfig,
    market: string,
    token: string,
}

export const DEFAULT_CONFIG: ExamplesConfig = {
    endpoints: ["https://test.flex.everos.dev"],
    superRoot: "0:7a6d3ab04ab26333d6e0523410b60d9f4bc55913e4c0291010c8314e9e47d169",
    trader: {
        client: "0:ace889d877d998b4ad09fb3f563e82c13a825205c5c7ddd7ff76c0f3b5c15479",
        id: "a51a2ccb21eddfda9069aabc76faba5840f361b7a0c6eb51c925af44156a2802",
        signer: "162c6c708018da073729dd4a60118425dd917e44653383f1faed4d16b94af30b",
        wallet: "0:b43f29b9e097cb0e21571ae63dcb1bfeda0568211da9eee4091ba42288c2a4c9"
    },
    market: "0:10a7d6fedfc295ffe65316c3639934b3240a0cde715836d87eb2f59bc71a94bc", // "TBTC/EVER"
    token: "0:b10af0f3b17440d3a152e78b7dd971be7d47bc3299aa465bf7ceddb79660b948",
};

