import { FlexClientAccount } from "../../contracts";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Flex } from "../flex";
import { Evr, uint256 } from "../web3";

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
    flex.evr.log.info(`Deploy trader address: ${address}`);
    if (!(await flex.evr.accounts.isActive(address))) {
        const defaults = flex.config.trader.deploy;
        const eversAll = options.eversAll ?? defaults.eversAll;
        const eversAuth = options.eversAuth ?? defaults.eversAuth;
        const clientBalance = Number(await clientAccount.getBalance());
        const requiredBalance = Number(eversAll) + Evr.unitsFromTokens(1);
        if (clientBalance < requiredBalance) {
            throw Error(`Flex client ${address} balance ${clientBalance} is not enough to deploy trader. Required balance is ${requiredBalance}.`);
        }
        await clientAccount.runDeployIndex({
            user_id: userId,
            lend_pubkey: uint256(options.pubkey),
            name: options.name,
            evers_all: eversAll,
            evers_to_auth_idx: eversAuth,
            refill_wallet: options.refillWallet ?? defaults.refillWallet,
            min_refill: options.minRefill ?? defaults.minRefill,
        });
    }
}
