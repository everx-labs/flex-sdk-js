import { Signer, TonClient } from "@eversdk/core";
export declare class AccountEx {
    static isActive(address: string, useClient?: TonClient): Promise<boolean>;
}
export declare class SignerRegistry {
    client: TonClient;
    signers: Map<string, Signer>;
    constructor(client: TonClient);
    resolve(signer: Signer | string | undefined): Promise<Signer>;
    resolvePublicKey(signer: Signer | string | undefined): Promise<string>;
    publicKey(signer: Signer): Promise<string>;
    private fromSecret;
    private fromName;
}
//# sourceMappingURL=account-ex.d.ts.map