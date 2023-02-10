import { AccountOptionsEx, FlexClientAccount, PRICE_XCHG_ERROR } from "../../contracts";
import { Flex } from "../flex";
import { Evr, TokenValue, toUnitsString, uint256 } from "../web3";
import { FlexError } from "../error";
import { toUnits } from "../web3/utils";

export type DeployTraderOptions = {
    /**
     *
     */
    client: AccountOptionsEx;
    /**
     * Trader's ID. uint256 hex string, can be generated randomly or by some
     * algorithms by the DEX integrator.
     */
    id: string;
    /**
     * Trader's name. Can be any.
     */
    name: string;
    /**
     * Trader's pubkey from signing key pair which Trader generates on his own.
     */
    pubkey: string;

    eversAll?: TokenValue;
    eversAuth?: TokenValue;
    refillWallet?: TokenValue;
    minRefill?: TokenValue;
};

export async function deployTrader(flex: Flex, options: DeployTraderOptions): Promise<void> {
    const clientAccount = await flex.evr.accounts.get(FlexClientAccount, options.client);
    const userId = uint256(options.id);
    const address = (
        await clientAccount.getUserIdIndex({
            user_id: userId,
        })
    ).output.value0;
    flex.evr.log.info(`Deploy trader address: ${address}`);
    if (!(await flex.evr.accounts.isActive(address))) {
        const defaults = flex.config.trader.deploy;
        const eversAll = options.eversAll ?? defaults.eversAll;
        const eversAuth = options.eversAuth ?? defaults.eversAuth;
        const clientBalance = BigInt(await clientAccount.getBalance());
        const requiredBalance = toUnits(eversAll, Evr) + toUnits(1, Evr);
        if (clientBalance < requiredBalance) {
            throw new FlexError(
                PRICE_XCHG_ERROR.not_enough_native_currency_to_process.exitCode,
                `Flex client ${address} balance ${clientBalance} is not enough to deploy trader. Required balance is ${requiredBalance}. You have to topup flex client balance.`,
            );
        }
        await clientAccount.runDeployIndex({
            user_id: userId,
            lend_pubkey: uint256(options.pubkey),
            name: options.name,
            evers_all: toUnitsString(eversAll, Evr),
            evers_to_auth_idx: toUnitsString(eversAuth, Evr),
            refill_wallet: toUnitsString(options.refillWallet ?? defaults.refillWallet, Evr),
            min_refill: toUnitsString(options.minRefill ?? defaults.minRefill, Evr),
        });
    }
}
