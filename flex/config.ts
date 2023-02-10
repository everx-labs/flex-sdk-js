import { TonClient } from "@eversdk/core";
import { EvrConfig, TokenValue } from "./web3";

export enum MakeOrderMode {
    /**
     * Immediate-or-post
     *
     * Simple order that will immediately execute (partially or fully)
     * and place the left amount into the orderbook
     */
    IOP = "IOP",
    /**
     * Immediate-or-cancel
     *
     * Order that will immediately execute (partially or fully)
     * and return the left amount back to the Trader wallet
     */
    IOC = "IOC",
    /**
     * Post order
     *
     * Order that will be created only if there is no liquidity with this
     * price on the opposite side on the Market
     */
    POST = "POST",
}

export type FlexConfig = {
    superRoot: string;
    globalConfig?: string;
    evr?: EvrConfig;
    trader: {
        deploy: {
            /**
             * Full payment for Trader creation.
             *
             * @remarks
             * Default value is 40 native tokens.
             */
            eversAll: TokenValue;
            /**
             * Payment for Auth Contract deploy. Included into eversAll.
             *
             * @remarks
             * Default value is 1 native token.
             */
            eversAuth: TokenValue;
            /**
             * When trader receives tokens the sum (refillWallet-wallet.eversBalance)
             * is additionally sent to this wallet from `userIdIndex` contract.
             * Included into eversAll.
             *
             * @remarks
             * Default value is 10 native tokens.
             */
            refillWallet: TokenValue;
            /**
             * Minimal amount of EVERs the wallet receives from `userIdIndex`
             * contract when a trade happens (when the wallet receives tokens)
             * if the wallet's balance > refillWallet.
             * Included into eversAll
             *
             * @remarks
             * Default value is 0.1 native tokens.
             */
            minRefill: TokenValue;
        };
        order: {
            evers: TokenValue;
            mode: MakeOrderMode;
        };
    };
};

/** @internal */
export function defaultConfig(): FlexConfig {
    return {
        evr: {
            sdk: TonClient.defaultConfig,
        },
        trader: {
            deploy: {
                eversAll: { tokens: 40 },
                eversAuth: { tokens: 1 },
                refillWallet: { tokens: 10 },
                minRefill: { tokens: 0.1 },
            },
            order: {
                evers: { tokens: 3 },
                mode: MakeOrderMode.IOP,
            },
        },
        superRoot: "",
    };
}
