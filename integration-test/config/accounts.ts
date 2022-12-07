import { EverWallet, Flex, Client, uint256 } from "../../flex";
import {
    FlexClientAccount,
    FlexWalletAccount,
    MultisigWalletAccount,
    Tip31WalletAccount,
    WrapperAccount,
    WrapperEverAccount,
} from "../../contracts";
import { TestConfig } from "./config";

export type TestAccounts = {
    traderId: string;
    everWallet: EverWallet;
    everWalletAddress: string;
    flexClient: FlexClientAccount;
    flexClientAddress: string;
    EVER: {
        external: MultisigWalletAccount;
        externalAddress: string;
        internal: FlexWalletAccount;
        internalAddress: string;
    };
    TSDT: {
        external: Tip31WalletAccount;
        externalAddress: string;
        internal: FlexWalletAccount;
        internalAddress: string;
    };
};

export async function createAccounts(flex: Flex, config: TestConfig): Promise<TestAccounts> {
    const traderId = await flex.evr.signers.resolvePublicKey(config.trader.signer);
    const everWallet = new EverWallet(flex.evr, config.everWallet);
    if (config.client.address == "") {
        config.client.address = await Client.deploy(flex, {
            everWallet: config.everWallet,
            signer: config.client.signer
        });
        console.log("Client:", config.client.address);
    }
    const flexClient = await flex.evr.accounts.get(FlexClientAccount, config.client);
    const everTokenWallet = await flex.evr.accounts.get(MultisigWalletAccount, config.EVER.wallet);
    const pubkey = uint256(traderId);
    const everWrapper = await flex.evr.accounts.get(WrapperEverAccount, config.EVER.wrapper);
    const everInternalAddress = (
        await everWrapper.getWalletAddress({
            owner: await flexClient.getAddress(),
            pubkey,
        })
    ).output.value0;

    const tsdtTokenWallet = await flex.evr.accounts.get(Tip31WalletAccount, config.TSDT.wallet);
    const wrapper = await flex.evr.accounts.get(WrapperAccount, config.TSDT.wrapper);
    const tsdtInternalAddress = (
        await wrapper.getWalletAddress({
            pubkey,
            owner: await flexClient.getAddress(),
        })
    ).output.value0;
    return {
        traderId,
        everWallet,
        everWalletAddress: await everWallet.getAddress(),
        flexClient,
        flexClientAddress: await flexClient.getAddress(),
        EVER: {
            external: everTokenWallet,
            externalAddress: await everTokenWallet.getAddress(),
            internal: await flex.evr.accounts.get(FlexWalletAccount, everInternalAddress),
            internalAddress: everInternalAddress,
        },
        TSDT: {
            external: tsdtTokenWallet,
            externalAddress: await tsdtTokenWallet.getAddress(),
            internal: await flex.evr.accounts.get(FlexWalletAccount, tsdtInternalAddress),
            internalAddress: tsdtInternalAddress,
        },
    };
}
