
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

export class FlexClientTestUpdateAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"deployPriceXchg","inputs":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"lend_amount","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"evers","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"price_salt","type":"cell"},{"name":"my_tip3_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xa"},{"name":"cancelXchgOrder","inputs":[{"name":"sell","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"value","type":"uint128"},{"name":"salted_price_code","type":"cell"},{"name":"user_id","type":"optional(uint256)"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0xb"},{"name":"transfer","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[],"id":"0xc"},{"name":"transferTokens","inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"deployEmptyFlexWallet","inputs":[{"name":"pubkey","type":"uint256"},{"name":"evers_to_wallet","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"trader","type":"optional(uint256)"},{"name":"flex_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xe"},{"name":"deployIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"lend_pubkey","type":"uint256"},{"name":"name","type":"string"},{"name":"evers_all","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"},{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"reLendIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"new_lend_pubkey","type":"uint256"},{"name":"wallets","type":"address[]"},{"name":"evers_relend_call","type":"uint128"},{"name":"evers_each_wallet_call","type":"uint128"},{"name":"evers_to_remove","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"}],"outputs":[],"id":"0x10"},{"name":"destroyIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x11"},{"name":"burnWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"}],"outputs":[],"id":"0x12"},{"name":"unwrapWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0x13"},{"name":"bindWallet","inputs":[{"name":"evers","type":"uint128"},{"name":"my_tip3_addr","type":"address"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x14"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"upgrade","inputs":[{"name":"request_evers","type":"uint128"},{"name":"user_data_cfg","type":"address"}],"outputs":[],"id":"0x15"},{"name":"getPayloadForDeployInternalWallet","inputs":[{"name":"owner_pubkey","type":"uint256"},{"name":"owner_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x16"},{"name":"getPriceXchgAddress","inputs":[{"name":"price_num","type":"uint128"},{"name":"salted_price_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x17"},{"name":"getUserIdIndex","inputs":[{"name":"user_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x18"},{"name":"getDetails","inputs":[],"outputs":[{"name":"owner","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet","type":"optional(tuple)"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"id":"0x19"},{"name":"getTestValue","inputs":[],"outputs":[{"name":"value0","type":"uint32"}],"id":"0x1a"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"owner_","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet_","type":"tuple"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "64051f22d0837f1b5a93a87d6971f15013b6ceffa2b463e6b8ecc87accf674e2",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexClientTestUpdateAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runDeployPriceXchg(input: {
        sell: boolean /* bool */,
        immediate_client: boolean /* bool */,
        post_order: boolean /* bool */,
        price_num: string | number | bigint /* uint128 */,
        amount: string | number | bigint /* uint128 */,
        lend_amount: string | number | bigint /* uint128 */,
        lend_finish_time: number /* uint32 */,
        evers: string | number | bigint /* uint128 */,
        unsalted_price_code: string /* cell */,
        price_salt: string /* cell */,
        my_tip3_addr: string /* address */,
        user_id: string | number | bigint /* uint256 */,
        order_id: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "deployPriceXchg", input);
    }

    async runLocalDeployPriceXchg(input: {
        sell: boolean /* bool */,
        immediate_client: boolean /* bool */,
        post_order: boolean /* bool */,
        price_num: string | number | bigint /* uint128 */,
        amount: string | number | bigint /* uint128 */,
        lend_amount: string | number | bigint /* uint128 */,
        lend_finish_time: number /* uint32 */,
        evers: string | number | bigint /* uint128 */,
        unsalted_price_code: string /* cell */,
        price_salt: string /* cell */,
        my_tip3_addr: string /* address */,
        user_id: string | number | bigint /* uint256 */,
        order_id: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "deployPriceXchg", input);
    }

    async runCancelXchgOrder(input: {
        sell: boolean /* bool */,
        price_num: string | number | bigint /* uint128 */,
        value: string | number | bigint /* uint128 */,
        salted_price_code: string /* cell */,
        user_id?: string | number | bigint /* optional(uint256) */,
        order_id?: string | number | bigint /* optional(uint256) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "cancelXchgOrder", input);
    }

    async runLocalCancelXchgOrder(input: {
        sell: boolean /* bool */,
        price_num: string | number | bigint /* uint128 */,
        value: string | number | bigint /* uint128 */,
        salted_price_code: string /* cell */,
        user_id?: string | number | bigint /* optional(uint256) */,
        order_id?: string | number | bigint /* optional(uint256) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelXchgOrder", input);
    }

    async runTransfer(input: {
        dest: string /* address */,
        value: string | number | bigint /* uint128 */,
        bounce: boolean /* bool */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async runLocalTransfer(input: {
        dest: string /* address */,
        value: string | number | bigint /* uint128 */,
        bounce: boolean /* bool */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferTokens(input: {
        src: string /* address */,
        dst: string /* address */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferTokens", input);
    }

    async runLocalTransferTokens(input: {
        src: string /* address */,
        dst: string /* address */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferTokens", input);
    }

    async runDeployEmptyFlexWallet(input: {
        pubkey: string | number | bigint /* uint256 */,
        evers_to_wallet: string | number | bigint /* uint128 */,
        tip3cfg: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string | number | bigint /* uint256 */,
            root_address: string /* address */,
        } /* tuple */,
        binding?: {
            flex: string /* address */,
            unsalted_price_code_hash: string | number | bigint /* uint256 */,
        } /* optional(tuple) */,
        trader?: string | number | bigint /* optional(uint256) */,
        flex_wallet_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "deployEmptyFlexWallet", input);
    }

    async runLocalDeployEmptyFlexWallet(input: {
        pubkey: string | number | bigint /* uint256 */,
        evers_to_wallet: string | number | bigint /* uint128 */,
        tip3cfg: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string | number | bigint /* uint256 */,
            root_address: string /* address */,
        } /* tuple */,
        binding?: {
            flex: string /* address */,
            unsalted_price_code_hash: string | number | bigint /* uint256 */,
        } /* optional(tuple) */,
        trader?: string | number | bigint /* optional(uint256) */,
        flex_wallet_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "deployEmptyFlexWallet", input);
    }

    async runDeployIndex(input: {
        user_id: string | number | bigint /* uint256 */,
        lend_pubkey: string | number | bigint /* uint256 */,
        name: string /* string */,
        evers_all: string | number | bigint /* uint128 */,
        evers_to_auth_idx: string | number | bigint /* uint128 */,
        refill_wallet: string | number | bigint /* uint128 */,
        min_refill: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "deployIndex", input);
    }

    async runLocalDeployIndex(input: {
        user_id: string | number | bigint /* uint256 */,
        lend_pubkey: string | number | bigint /* uint256 */,
        name: string /* string */,
        evers_all: string | number | bigint /* uint128 */,
        evers_to_auth_idx: string | number | bigint /* uint128 */,
        refill_wallet: string | number | bigint /* uint128 */,
        min_refill: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "deployIndex", input);
    }

    async runReLendIndex(input: {
        user_id: string | number | bigint /* uint256 */,
        new_lend_pubkey: string | number | bigint /* uint256 */,
        wallets: string[] /* address[] */,
        evers_relend_call: string | number | bigint /* uint128 */,
        evers_each_wallet_call: string | number | bigint /* uint128 */,
        evers_to_remove: string | number | bigint /* uint128 */,
        evers_to_auth_idx: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "reLendIndex", input);
    }

    async runLocalReLendIndex(input: {
        user_id: string | number | bigint /* uint256 */,
        new_lend_pubkey: string | number | bigint /* uint256 */,
        wallets: string[] /* address[] */,
        evers_relend_call: string | number | bigint /* uint128 */,
        evers_each_wallet_call: string | number | bigint /* uint128 */,
        evers_to_remove: string | number | bigint /* uint128 */,
        evers_to_auth_idx: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "reLendIndex", input);
    }

    async runDestroyIndex(input: {
        user_id: string | number | bigint /* uint256 */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "destroyIndex", input);
    }

    async runLocalDestroyIndex(input: {
        user_id: string | number | bigint /* uint256 */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroyIndex", input);
    }

    async runBurnWallet(input: {
        evers_value: string | number | bigint /* uint128 */,
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
        my_tip3_addr: string /* address */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "burnWallet", input);
    }

    async runLocalBurnWallet(input: {
        evers_value: string | number | bigint /* uint128 */,
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
        my_tip3_addr: string /* address */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burnWallet", input);
    }

    async runUnwrapWallet(input: {
        evers_value: string | number | bigint /* uint128 */,
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
        my_tip3_addr: string /* address */,
        tokens: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unwrapWallet", input);
    }

    async runLocalUnwrapWallet(input: {
        evers_value: string | number | bigint /* uint128 */,
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
        my_tip3_addr: string /* address */,
        tokens: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unwrapWallet", input);
    }

    async runBindWallet(input: {
        evers: string | number | bigint /* uint128 */,
        my_tip3_addr: string /* address */,
        set_binding: boolean /* bool */,
        binding?: {
            flex: string /* address */,
            unsalted_price_code_hash: string | number | bigint /* uint256 */,
        } /* optional(tuple) */,
        set_trader: boolean /* bool */,
        trader?: string | number | bigint /* optional(uint256) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "bindWallet", input);
    }

    async runLocalBindWallet(input: {
        evers: string | number | bigint /* uint128 */,
        my_tip3_addr: string /* address */,
        set_binding: boolean /* bool */,
        binding?: {
            flex: string /* address */,
            unsalted_price_code_hash: string | number | bigint /* uint256 */,
        } /* optional(tuple) */,
        set_trader: boolean /* bool */,
        trader?: string | number | bigint /* optional(uint256) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "bindWallet", input);
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
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runUpgrade(input: {
        request_evers: string | number | bigint /* uint128 */,
        user_data_cfg: string /* address */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "upgrade", input);
    }

    async runLocalUpgrade(input: {
        request_evers: string | number | bigint /* uint128 */,
        user_data_cfg: string /* address */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "upgrade", input);
    }

    async runGetPayloadForDeployInternalWallet(input: {
        owner_pubkey: string | number | bigint /* uint256 */,
        owner_addr?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
        keep_evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* cell */,
        }
    }> {
        return await runHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async runLocalGetPayloadForDeployInternalWallet(input: {
        owner_pubkey: string | number | bigint /* uint256 */,
        owner_addr?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
        keep_evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* cell */,
        }
    }> {
        return await runLocalHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async runGetPriceXchgAddress(input: {
        price_num: string | number | bigint /* uint128 */,
        salted_price_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "getPriceXchgAddress", input);
    }

    async runLocalGetPriceXchgAddress(input: {
        price_num: string | number | bigint /* uint128 */,
        salted_price_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "getPriceXchgAddress", input);
    }

    async runGetUserIdIndex(input: {
        user_id: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "getUserIdIndex", input);
    }

    async runLocalGetUserIdIndex(input: {
        user_id: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "getUserIdIndex", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            owner: string /* uint256 */,
            triplet: {
                wallet: number /* uint32 */,
                exchange: number /* uint32 */,
                user: number /* uint32 */,
            } /* tuple */,
            ex_triplet?: {
                wallet: number /* uint32 */,
                exchange: number /* uint32 */,
                user: number /* uint32 */,
            } /* optional(tuple) */,
            auth_index_code: string /* cell */,
            user_id_index_code: string /* cell */,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            owner: string /* uint256 */,
            triplet: {
                wallet: number /* uint32 */,
                exchange: number /* uint32 */,
                user: number /* uint32 */,
            } /* tuple */,
            ex_triplet?: {
                wallet: number /* uint32 */,
                exchange: number /* uint32 */,
                user: number /* uint32 */,
            } /* optional(tuple) */,
            auth_index_code: string /* cell */,
            user_id_index_code: string /* cell */,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTestValue(): Promise<{
        transaction: Transaction,
        output: {
            value0: number /* uint32 */,
        }
    }> {
        return await runHelper(this, "getTestValue", {});
    }

    async runLocalGetTestValue(): Promise<{
        transaction: Transaction,
        output: {
            value0: number /* uint32 */,
        }
    }> {
        return await runLocalHelper(this, "getTestValue", {});
    }

}

