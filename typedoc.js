module.exports = {
    entryPoints: [
        "./flex/web3/index.ts",
        "./flex/trader/index.ts",
        "./flex/client/index.ts",
        "./flex/exchange/index.ts",
        "./flex/flex.ts",
        "./flex/market.ts",
        "./flex/token.ts",
    ],
    out: "docs",
    excludePrivate: true,
    excludeProtected: true,
    excludeInternal: true,
};
