
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class TONTokenWalletAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"destroy","inputs":[{"name":"dest","type":"address"}],"outputs":[],"id":"0xd"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x15"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "440512eb50005744723426451c1bbc7ffa0a25e50bb081167c1cd9c6d741185a",
    };
    
    constructor(options: AccountOptions) {
        super(TONTokenWalletAccount.package, options);
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runTransfer(input: {
        _answer_id: number// uint32,
        answer_addr?: string// optional(address),
        to: string// address,
        tokens: string | number | bigint// uint128,
        evers: string | number | bigint// uint128,
        return_ownership: string | number | bigint// uint128,
        notify_payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async runLocalTransfer(input: {
        _answer_id: number// uint32,
        answer_addr?: string// optional(address),
        to: string// address,
        tokens: string | number | bigint// uint128,
        evers: string | number | bigint// uint128,
        return_ownership: string | number | bigint// uint128,
        notify_payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: {
        _answer_id: number// uint32,
        answer_addr?: string// optional(address),
        to: {
            pubkey: string | number | bigint// uint256
            owner?: string// optional(address)
        }// tuple,
        tokens: string | number | bigint// uint128,
        evers: string | number | bigint// uint128,
        keep_evers: string | number | bigint// uint128,
        deploy: boolean// bool,
        return_ownership: string | number | bigint// uint128,
        notify_payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferToRecipient", input);
    }

    async runLocalTransferToRecipient(input: {
        _answer_id: number// uint32,
        answer_addr?: string// optional(address),
        to: {
            pubkey: string | number | bigint// uint256
            owner?: string// optional(address)
        }// tuple,
        tokens: string | number | bigint// uint128,
        evers: string | number | bigint// uint128,
        keep_evers: string | number | bigint// uint128,
        deploy: boolean// bool,
        return_ownership: string | number | bigint// uint128,
        notify_payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runHelper(this, "balance", input);
    }

    async runLocalBalance(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: {
        _value: string | number | bigint// uint128,
        answer_addr: string// address,
        keep_evers: string | number | bigint// uint128,
        notify_payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "acceptMint", input);
    }

    async runLocalAcceptMint(input: {
        _value: string | number | bigint// uint128,
        answer_addr: string// address,
        keep_evers: string | number | bigint// uint128,
        notify_payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: {
        _value: string | number | bigint// uint128,
        answer_addr: string// address,
        keep_evers: string | number | bigint// uint128,
        sender_pubkey: string | number | bigint// uint256,
        sender_owner?: string// optional(address),
        payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "acceptTransfer", input);
    }

    async runLocalAcceptTransfer(input: {
        _value: string | number | bigint// uint128,
        answer_addr: string// address,
        keep_evers: string | number | bigint// uint128,
        sender_pubkey: string | number | bigint// uint256,
        sender_owner?: string// optional(address),
        payload?: string// optional(cell),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runDestroy(input: {
        dest: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "destroy", input);
    }

    async runLocalDestroy(input: {
        dest: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroy", input);
    }

    async runDetails(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            balance: string// uint128,
            root_pubkey: string// uint256,
            root_address: string// address,
            wallet_pubkey: string// uint256,
            owner_address?: string// optional(address),
            lend_pubkey?: string// optional(uint256),
            lend_owners: {
                lend_key: {
                    dest: {
                        workchain_id: number// int8
                        address: string// uint256
                    }// tuple
                }// tuple
                lend_balance: string// uint128
                lend_finish_time: number// uint32
            }// tuple[],
            lend_balance: string// uint128,
            binding?: {
                flex: string// address
                unsalted_price_code_hash: string// uint256
            }// optional(tuple),
            code_hash: string// uint256,
            code_depth: number// uint16,
            workchain_id: number// int8,
        }
    }> {
        return await runHelper(this, "details", input);
    }

    async runLocalDetails(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            balance: string// uint128,
            root_pubkey: string// uint256,
            root_address: string// address,
            wallet_pubkey: string// uint256,
            owner_address?: string// optional(address),
            lend_pubkey?: string// optional(uint256),
            lend_owners: {
                lend_key: {
                    dest: {
                        workchain_id: number// int8
                        address: string// uint256
                    }// tuple
                }// tuple
                lend_balance: string// uint128
                lend_finish_time: number// uint32
            }// tuple[],
            lend_balance: string// uint128,
            binding?: {
                flex: string// address
                unsalted_price_code_hash: string// uint256
            }// optional(tuple),
            code_hash: string// uint256,
            code_depth: number// uint16,
            workchain_id: number// int8,
        }
    }> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            balance: string// uint128,
            root_pubkey: string// uint256,
            root_address: string// address,
            wallet_pubkey: string// uint256,
            owner_address?: string// optional(address),
            lend_pubkey?: string// optional(uint256),
            lend_owners: {
                lend_key: {
                    dest: {
                        workchain_id: number// int8
                        address: string// uint256
                    }// tuple
                }// tuple
                lend_balance: string// uint128
                lend_finish_time: number// uint32
            }// tuple[],
            lend_balance: string// uint128,
            binding?: {
                flex: string// address
                unsalted_price_code_hash: string// uint256
            }// optional(tuple),
            code_hash: string// uint256,
            code_depth: number// uint16,
            workchain_id: number// int8,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            balance: string// uint128,
            root_pubkey: string// uint256,
            root_address: string// address,
            wallet_pubkey: string// uint256,
            owner_address?: string// optional(address),
            lend_pubkey?: string// optional(uint256),
            lend_owners: {
                lend_key: {
                    dest: {
                        workchain_id: number// int8
                        address: string// uint256
                    }// tuple
                }// tuple
                lend_balance: string// uint128
                lend_finish_time: number// uint32
            }// tuple[],
            lend_balance: string// uint128,
            binding?: {
                flex: string// address
                unsalted_price_code_hash: string// uint256
            }// optional(tuple),
            code_hash: string// uint256,
            code_depth: number// uint16,
            workchain_id: number// int8,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runHelper(this, "getBalance", {});
    }

    async runLocalGetBalance(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

