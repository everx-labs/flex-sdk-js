import { SignerOption } from "../flex";

export type AccountOptionsEx = {
    address: string,
    signer?: SignerOption,
} | {
    signer: SignerOption,
}
