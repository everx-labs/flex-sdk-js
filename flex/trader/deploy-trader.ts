import { FlexClientAccount } from "../../contracts";
import { AccountEx, AccountOptionsEx } from "../../contracts/account-ex";
import { Flex } from "../flex";

export type DeployTraderOptions = {
    client: AccountOptionsEx,
    id: string,
    name: string,
    pubkey: string,
    eversAll?: string | number | bigint;
    eversAuth?: string | number | bigint;
    refillWallet?: string | number | bigint;
    minRefill?: string | number | bigint;
}

export async function deployTrader(flex: Flex, options: DeployTraderOptions): Promise<void> {
    const clientAccount = await flex.getAccount(FlexClientAccount, options.client);
    const address = (await clientAccount.getUserIdIndex({
        user_id: options.id,
    })).output.value0;
    if (!(await AccountEx.isActive(address, flex.web3))) {
        const defaults = flex.config.trader.deploy;
        await clientAccount.runDeployIndex({
            user_id: options.id,
            lend_pubkey: options.pubkey,
            name: options.name,
            evers_all: options.eversAll ?? defaults.eversAll,
            evers_to_auth_idx: options.eversAuth ?? defaults.eversAuth,
            refill_wallet: options.refillWallet ?? defaults.refillWallet,
            min_refill: options.minRefill ?? defaults.minRefill,
        });
    }
}
