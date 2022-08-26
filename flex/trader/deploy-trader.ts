import { FlexClientAccount } from "../../contracts";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Flex } from "../flex";
import { uint256 } from "../web3";

export type DeployTraderOptions = {
    /**
     * 
     */
    client: AccountOptionsEx,
    /**
     * Trader's ID. uint256 hex string, can be generated randomly or by some
     * algorithms by the DEX integrator.
     */
    id: string,
    /**
     * Trader's name. Can be any.
     */
    name: string,
    /**
     * Trader's pubkey from signing key pair which Trader generates on his own. 
     */
    pubkey: string,
    
    eversAll?: string | number | bigint;
    eversAuth?: string | number | bigint;
    refillWallet?: string | number | bigint;
    minRefill?: string | number | bigint;
}

export async function deployTrader(flex: Flex, options: DeployTraderOptions): Promise<void> {
    const clientAccount = await flex.evr.accounts.get(FlexClientAccount, options.client);
    const userId = uint256(options.id);
    const address = (await clientAccount.getUserIdIndex({
        user_id: userId,
    })).output.value0;
    console.log(address);
    if (!(await flex.evr.accounts.isActive(address))) {
        const defaults = flex.config.trader.deploy;
        await clientAccount.runDeployIndex({
            user_id: userId,
            lend_pubkey: uint256(options.pubkey),
            name: options.name,
            evers_all: options.eversAll ?? defaults.eversAll,
            evers_to_auth_idx: options.eversAuth ?? defaults.eversAuth,
            refill_wallet: options.refillWallet ?? defaults.refillWallet,
            min_refill: options.minRefill ?? defaults.minRefill,
        });
    }
}
