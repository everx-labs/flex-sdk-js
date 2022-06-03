import {
    FlexWalletAccount,
    WrapperAccount,
    XchgPairAccount,
} from "../../contracts";
import { Web3Evr, SignerOption } from "../web3";

/** @internal */
export async function getWallet(
    evr: Web3Evr,
    options: {
        market: string,
        client: string,
        trader: {
            id: string,
            signer: SignerOption,
        }
        sell: boolean
    },
): Promise<FlexWalletAccount> {
    const pair = await evr.accounts.get(XchgPairAccount, options.market);
    const pairDetails = (await pair.getDetails()).output;
    const token = await evr.accounts.get(WrapperAccount, options.sell
        ? pairDetails.major_tip3cfg.root_address
        : pairDetails.minor_tip3cfg.root_address);
    const signer = await evr.signers.resolve(options.trader.signer);
    const address = (await token.getWalletAddress({
        pubkey: `0x${options.trader}`,
        owner: options.client,
    })).output.value0;
    return evr.accounts.get(FlexWalletAccount, {
        address,
        signer,
    });
}
