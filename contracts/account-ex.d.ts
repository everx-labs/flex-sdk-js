import { Signer, TonClient } from "@eversdk/core";
export declare type AccountOptionsEx = {
    address?: string;
    signer?: Signer | string;
};
export declare class AccountEx {
    static isActive(address: string, useWeb3?: TonClient): Promise<boolean>;
}
export declare class SignerRegistry {
    web3: TonClient;
    signers: Map<string, Signer>;
    constructor(web3: TonClient);
    resolve(signer: Signer | string | undefined): Promise<Signer>;
    resolvePublicKey(signer: Signer | string | undefined): Promise<string>;
    publicKey(signer: Signer): Promise<string>;
    private fromSecret;
    private fromName;
}
//# sourceMappingURL=account-ex.d.ts.map