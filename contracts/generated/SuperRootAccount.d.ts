import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class SuperRootAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        global_config_code: string;
        flex_client_stub: string;
        prev_super_root?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        global_config_code: string;
        flex_client_stub: string;
        prev_super_root?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUpdate(input: {
        cfg_deploy_evers: string | number | bigint;
        cfg_keep_evers: string | number | bigint;
        version: {
            wallet: number;
            exchange: number;
            user: number;
        };
        wrappers_cfg: string;
        flex: string;
        user_cfg: string;
        description: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUpdate(input: {
        cfg_deploy_evers: string | number | bigint;
        cfg_keep_evers: string | number | bigint;
        version: {
            wallet: number;
            exchange: number;
            user: number;
        };
        wrappers_cfg: string;
        flex: string;
        user_cfg: string;
        description: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUpdateConfirmed(input: {
        version: {
            wallet: number;
            exchange: number;
            user: number;
        };
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUpdateConfirmed(input: {
        version: {
            wallet: number;
            exchange: number;
            user: number;
        };
    }): Promise<{
        transaction: Transaction;
    }>;
    runRelease(): Promise<{
        transaction: Transaction;
    }>;
    runLocalRelease(): Promise<{
        transaction: Transaction;
    }>;
    runProxy(input: {
        msg: string;
        cant_work_during_update: boolean;
        starting_update: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalProxy(input: {
        msg: string;
        cant_work_during_update: boolean;
        starting_update: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeployWrappersConfig(input: {
        _answer_id: number;
        deploy_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        token_version: number;
        wrappers_cfg_code: string;
        wic_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployWrappersConfig(input: {
        _answer_id: number;
        deploy_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        token_version: number;
        wrappers_cfg_code: string;
        wic_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runDeployFlex(input: {
        _answer_id: number;
        deploy_evers: string | number | bigint;
        keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        old_flex?: string;
        exchange_version: number;
        flex_code: string;
        xchg_pair_code: string;
        xchg_price_code: string;
        ev_cfg: {
            transfer_tip3: string | number | bigint;
            return_ownership: string | number | bigint;
            order_answer: string | number | bigint;
            process_queue: string | number | bigint;
            send_notify: string | number | bigint;
            dest_wallet_keep_evers: string | number | bigint;
        };
        deals_limit: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployFlex(input: {
        _answer_id: number;
        deploy_evers: string | number | bigint;
        keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        old_flex?: string;
        exchange_version: number;
        flex_code: string;
        xchg_pair_code: string;
        xchg_price_code: string;
        ev_cfg: {
            transfer_tip3: string | number | bigint;
            return_ownership: string | number | bigint;
            order_answer: string | number | bigint;
            process_queue: string | number | bigint;
            send_notify: string | number | bigint;
            dest_wallet_keep_evers: string | number | bigint;
        };
        deals_limit: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runDeployUserDataConfig(input: {
        _answer_id: number;
        deploy_evers: string | number | bigint;
        triplet: {
            wallet: number;
            exchange: number;
            user: number;
        };
        binding: {
            flex: string;
            unsalted_price_code_hash: string | number | bigint;
        };
        user_data_cfg_code: string;
        flex_client_code: string;
        auth_index_code: string;
        user_id_index_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployUserDataConfig(input: {
        _answer_id: number;
        deploy_evers: string | number | bigint;
        triplet: {
            wallet: number;
            exchange: number;
            user: number;
        };
        binding: {
            flex: string;
            unsalted_price_code_hash: string | number | bigint;
        };
        user_data_cfg_code: string;
        flex_client_code: string;
        auth_index_code: string;
        user_id_index_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runCloneWrappersConfig(input: {
        _answer_id: number;
        wrappers_cfg: string;
        wrapper_cfg_keep_evers: string | number | bigint;
        clone_deploy_evers: string | number | bigint;
        wic_evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        new_token_version: number;
        wrapper_deployers: string[];
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalCloneWrappersConfig(input: {
        _answer_id: number;
        wrappers_cfg: string;
        wrapper_cfg_keep_evers: string | number | bigint;
        clone_deploy_evers: string | number | bigint;
        wic_evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        new_token_version: number;
        wrapper_deployers: string[];
    }): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: {
        to: string;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransfer(input: {
        to: string;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runTransferReserveTokens(input: {
        wrapper: string;
        tokens: string | number | bigint;
        to: string;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransferReserveTokens(input: {
        wrapper: string;
        tokens: string | number | bigint;
        to: string;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetFlags(input: {
        stop_trade?: boolean;
        abandon_ship?: boolean;
        update_started?: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetFlags(input: {
        stop_trade?: boolean;
        abandon_ship?: boolean;
        update_started?: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetOwner(input: {
        owner: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetOwner(input: {
        owner: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetUpdateTeam(input: {
        team?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetUpdateTeam(input: {
        team?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetNextSuperRoot(input: {
        next_super_root: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetNextSuperRoot(input: {
        next_super_root: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            pubkey: string;
            stop_trade_: boolean;
            abandon_ship_: boolean;
            update_started_: boolean;
            owner: string;
            update_team?: string;
            global_config_code: string;
            global_config_hash: string;
            workchain_id: number;
            version?: {
                wallet: number;
                exchange: number;
                user: number;
            };
            beta_version?: {
                wallet: number;
                exchange: number;
                user: number;
            };
            deploying_cfg?: string;
            cur_cfg?: string;
            beta_cfg?: string;
            prev_super_root?: string;
            next_super_root?: string;
            revision: number;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            pubkey: string;
            stop_trade_: boolean;
            abandon_ship_: boolean;
            update_started_: boolean;
            owner: string;
            update_team?: string;
            global_config_code: string;
            global_config_hash: string;
            workchain_id: number;
            version?: {
                wallet: number;
                exchange: number;
                user: number;
            };
            beta_version?: {
                wallet: number;
                exchange: number;
                user: number;
            };
            deploying_cfg?: string;
            cur_cfg?: string;
            beta_cfg?: string;
            prev_super_root?: string;
            next_super_root?: string;
            revision: number;
        };
    }>;
    runGetGlobalConfig(input: {
        version: {
            wallet: number;
            exchange: number;
            user: number;
        };
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetGlobalConfig(input: {
        version: {
            wallet: number;
            exchange: number;
            user: number;
        };
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetCurrentGlobalConfig(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetCurrentGlobalConfig(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=SuperRootAccount.d.ts.map