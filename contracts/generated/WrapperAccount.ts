
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";

export class WrapperAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"external_wallet","type":"address"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[{"name":"err_code","type":"uint32"},{"name":"flex_wallet","type":"address"}],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"components":[{"name":"addr_","type":"address"}],"name":"wallet_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "33268dfea0e5a62dad48744c807f43f27d03ec3dbb67a0ab6881d8af489e26ea",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: {
        _answer_id: number /* uint32 */,
        external_wallet: string /* address */,
        reserve_wallet_evers: string | number | bigint /* uint128 */,
        internal_wallet_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runHelper(this, "init", input);
    }

    async runLocalInit(input: {
        _answer_id: number /* uint32 */,
        external_wallet: string /* address */,
        reserve_wallet_evers: string | number | bigint /* uint128 */,
        internal_wallet_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: {
        _answer_id: number /* uint32 */,
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async runLocalDeployEmptyWallet(input: {
        _answer_id: number /* uint32 */,
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnTip3Transfer(input: {
        _answer_id: number /* uint32 */,
        balance: string | number | bigint /* uint128 */,
        new_tokens: string | number | bigint /* uint128 */,
        evers_balance: string | number | bigint /* uint128 */,
        tip3cfg: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string | number | bigint /* uint256 */,
            root_address: string /* address */,
        } /* tuple */,
        sender?: {
            pubkey: string | number | bigint /* uint256 */,
            owner?: string /* optional(address) */,
        } /* optional(tuple) */,
        receiver: {
            pubkey: string | number | bigint /* uint256 */,
            owner?: string /* optional(address) */,
        } /* tuple */,
        payload: string /* cell */,
        answer_addr: string /* address */,
    }): Promise<{
        transaction: Transaction,
        output: {
            err_code: number /* uint32 */,
            flex_wallet: string /* address */,
        }
    }> {
        return await runHelper(this, "onTip3Transfer", input);
    }

    async runLocalOnTip3Transfer(input: {
        _answer_id: number /* uint32 */,
        balance: string | number | bigint /* uint128 */,
        new_tokens: string | number | bigint /* uint128 */,
        evers_balance: string | number | bigint /* uint128 */,
        tip3cfg: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string | number | bigint /* uint256 */,
            root_address: string /* address */,
        } /* tuple */,
        sender?: {
            pubkey: string | number | bigint /* uint256 */,
            owner?: string /* optional(address) */,
        } /* optional(tuple) */,
        receiver: {
            pubkey: string | number | bigint /* uint256 */,
            owner?: string /* optional(address) */,
        } /* tuple */,
        payload: string /* cell */,
        answer_addr: string /* address */,
    }): Promise<{
        transaction: Transaction,
        output: {
            err_code: number /* uint32 */,
            flex_wallet: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runBurn(input: {
        tokens: string | number | bigint /* uint128 */,
        answer_addr: string /* address */,
        sender_pubkey: string | number | bigint /* uint256 */,
        sender_owner?: string /* optional(address) */,
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "burn", input);
    }

    async runLocalBurn(input: {
        tokens: string | number | bigint /* uint128 */,
        answer_addr: string /* address */,
        sender_pubkey: string | number | bigint /* uint256 */,
        sender_owner?: string /* optional(address) */,
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: {
        answer_addr?: string /* optional(address) */,
        to: string /* address */,
        tokens: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async runLocalTransferFromReserveWallet(input: {
        answer_addr?: string /* optional(address) */,
        to: string /* address */,
        tokens: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async runLocalRequestTotalGranted(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string /* uint256 */,
            total_granted: string /* uint128 */,
            wallet_code: string /* cell */,
            external_wallet?: string /* optional(address) */,
            reserve_wallet: string /* address */,
            super_root: string /* address */,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string /* uint256 */,
            total_granted: string /* uint128 */,
            wallet_code: string /* cell */,
            external_wallet?: string /* optional(address) */,
            reserve_wallet: string /* address */,
            super_root: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        output: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string /* uint256 */,
            root_address: string /* address */,
        }
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async runLocalGetTip3Config(): Promise<{
        transaction: Transaction,
        output: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string /* uint256 */,
            root_address: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async runLocalHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async runLocalGetWalletAddress(input: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async runLocalGetReserveWallet(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

}

