import { Flex, FlexBoundLazy } from "./flex";
import { WrapperAccount } from "../contracts";
import { Signer } from "@eversdk/core";

export type TokenOptions = {
    address: string,
    signer?: Signer | string
}

type TokenState = {
    wrapper: WrapperAccount,
}

export type TokenInfo = {
    /// Flex Tip3 root address (wrapper address)
    address: string

    /// Token ticker, i.e. 'EVER'
    ticker: string

    /// Full name
    name: string

    /// Number of decimal places
    decimals: number

    /// Total allocated and granted tokens (in tokens).
    totalAllocated: number

    /// Flex wallet code hash
    walletCodeHash: string

    /// Type of the wrapper account
    wrapperType: number

    /// Wrapper account that locks and stores all external tokens
    externalAddress: string

    /// Wallet that receives maker fees
    reserveWallet: string
}

export class Token extends FlexBoundLazy<TokenOptions, TokenState> {
    protected async createState(options: TokenOptions): Promise<TokenState> {
        return {
            wrapper: new WrapperAccount({
                client: this.flex.web3,
                address: options.address,
            }),
        };
    }

    static async queryTokens(flex?: Flex): Promise<TokenInfo[]> {
        return (await (flex ?? Flex.default).query(`tokens { ${Token.queryFields()} }`)).tokens;
    }

    static queryFields() {
        return `
            address
            ticker
            name
            decimals
            totalAllocated
            walletCodeHash
            wrapperType
            externalAddress
            reserveWallet
        `;
    }
}
