type KeyConfig = {
    addr: string
    keys: {
        public: string
        secret: string
    }
}

export type MarketConfig = {
    broxusTokenWallet: string
    ever_wrapper: string
    flx_wrapper: string
    flx_wrapper_wallet: string
    market: string
    client1: KeyConfig
}

export type TraderConfig = {
    id: string
    signer: string
}
