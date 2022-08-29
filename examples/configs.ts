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
    superRoot: "0:9120575adeae852d36b1ded9971281fa9907ac348fece95dea8a4e4328f77351",
    trader: {
        client: "0:ace889d877d998b4ad09fb3f563e82c13a825205c5c7ddd7ff76c0f3b5c15479",
        id: "a51a2ccb21eddfda9069aabc76faba5840f361b7a0c6eb51c925af44156a2802",
        signer: "162c6c708018da073729dd4a60118425dd917e44653383f1faed4d16b94af30b",
        wallet: "0:b43f29b9e097cb0e21571ae63dcb1bfeda0568211da9eee4091ba42288c2a4c9"
    },
    market: "0:f1d8bbd96595df2f4e41d2d0c37044ae740782650c86db9c32d863080f802a4a", // "TBTC/EVER"
    token: "0:eb8a12f371520ffbd0f255a3a0d79b418099aa3dc2c4b678a051f9646aec6b3b",
};

