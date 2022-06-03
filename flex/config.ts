import { TonClient } from "@eversdk/core";
import { Web3EvrConfig } from "./web3/index";

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
    superRoot: string,
    globalConfig?: string,
    evr?: Web3EvrConfig,
    trader: {
        deploy: {
            /**
             * Full payment for Trader creation.
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 40e9.
             */
            eversAll: number,
            /**
             * Payment for Auth Contract deploy. Included into eversAll.
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 1e9.
             */
            eversAuth: number,
            /**
             * When trader receives tokens the sum (refillWallet-wallet.eversBalance)
             * is additionally sent to this wallet from `userIdIndex` contract.
             * Included into eversAll.
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 10e9.
             */
            refillWallet: number,
            /**
             * Minimal amount of EVERs the wallet receives from `userIdIndex`
             * contract when a trade happens (when the wallet receives tokens)
             * if the wallet's balance > refillWallet.
             * Included into eversAll
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 0.1e9.
             */
            minRefill: number,
        },
        order: {
            evers: number,
            mode: MakeOrderMode,
        }
    }
}

/** @internal */
export function defaultConfig(): FlexConfig {
    return {
        evr: {
            sdk: TonClient.defaultConfig,
        },
        trader: {
            deploy: {
                eversAll: 40e9,
                eversAuth: 1e9,
                refillWallet: 10e9,
                minRefill: 0.1e9,
            },
            order: {
                evers: 3e9,
                mode: MakeOrderMode.IOP,
            },
        },
        superRoot: "",
    };
}
