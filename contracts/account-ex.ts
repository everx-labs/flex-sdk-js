import { SignerOption } from "../flex/web3/signers";

export type AccountOptionsEx = {
    address: string,
    signer?: SignerOption,
} | {
    signer: SignerOption,
}
