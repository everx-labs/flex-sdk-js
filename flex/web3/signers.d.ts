import { CryptoModule, Signer } from "@eversdk/core";
export declare type SignerOption = Signer | string;
export declare class Web3EvrSigners {
    crypto: CryptoModule;
    registry: Map<string, Signer>;
    constructor(crypto: CryptoModule);
    resolve(signer?: SignerOption): Promise<Signer>;
    resolvePublicKey(signer?: SignerOption): Promise<string>;
    publicKey(signer: Signer): Promise<string>;
    private fromSecret;
    private fromName;
}
//# sourceMappingURL=signers.d.ts.map