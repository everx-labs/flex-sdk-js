enum NetworkQueriesProtocol {
    HTTP = "HTTP",
    WS = "WS",
}
export default {
    evr: {
        sdk: {
            network: {
                endpoints: ["https://flex.os.everos.dev"],
                queries_protocol: NetworkQueriesProtocol.WS,
            },
        },
    },
    broxusFactory:
        "0:5384560a0f6f62478c923c9fad451f98c63d6011d1bf52a2ab112df63430dcff",
    broxusTokenRoot:
        "0:ded3a2084836d07621800d5f020c1ef7dca7d41497393012ee0fbec655bbf98a",
    broxusTokenWallet:
        "0:63b60a23af6000362150fafdf52e4929bec08798d8ce5db8143da1e63a4f3100",
    superRootOwner: {
        addr: "0:591667c47cca105a34b65a4d9e95ad6b61139f76704a581560da9dabd6239b0a",
        keys: {
            public: "d688a7e363acdd80f9a7feba612c2bd45703e8073661e87d3731ad6528733eda",
            secret: "3c9a1ac9038c60907a81ba2f8e2b47a430b416ed6a53a00f75dc5acc0e53f44f",
        },
    },
    superRoot:
        "0:a1ef0cc4d365bbf7cc6456ddcdd48f80ab689efe436e1d6442f567ca628db227",
    globalConfig:
        "0:3997f9cea2cb7024eb485aeeca2e17250c64c375631f3501a0da0535b193d556",
    flx_wrapper:
        "0:9ea0dab301bf87cb9545035d8f1644fc50d93a9057e6bfea34cdaccf7545a26a",
    flx_wrapper_wallet:
        "0:1b973ed88363f37caaba3a995282c353b77f6bf9e270b36dd8b6aa16f290f316",
    ever_wrapper:
        "0:e0ed737a5299370aac283fc0c6f782d66fa44f2444d1b7bce17e98021cb986ef",
    user_data_cfg:
        "0:186a9fbd43ae8cc363a95313eb7c468cc22a06a17ce20cba4fef4f64da8affe3",
    wrappers_cfg:
        "0:3417bafcffff7716ba97651de76366f0247c0a426435b570367f8de19ddf1897",
    flex: "0:25e39eeeda69f35e97324bf224a2cac0d4338fcdfe0add3e1ab4ba8c4e2dc6f2",
    market: "0:f656dd6971622cacc3d18fac68e4fcd8c0e8fc798a962589cd621f9f7f745463",
    client1: {
        addr: "0:315501e327d806e7239e568c7d5588a60a16ee5ff3d9fd48e9d91110fbbda92a",
        keys: {
            public: "2765237f85cb81f9f52fdf761efc6d6f7db0fef05b5e63cc5a2b374e23e67c2f",
            secret: "ae0fe89b6e17354b853d3bddd6810fa971f1c4111ffed5fc306532e88dfb57c5",
        },
    },
    statsd: {
        host: "statsd",
        port: 9125,
        cacheDns: true,
    },
    metrics: {
        trades: "trades",
        errors: "errors",
        orderSent: "sent",
        orderAccepted: "accepted",
    },
}
