import { Flex } from "./flex";

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

export class Token {
    static async queryTokens(flex: Flex): Promise<TokenInfo[]> {
        return (await flex.query(`tokens { ${Token.queryFields()} }`)).tokens;
    }

    /** @internal */
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
