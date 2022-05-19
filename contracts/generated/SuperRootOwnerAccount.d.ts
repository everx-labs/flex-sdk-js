import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class SuperRootOwnerAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetCode(input: {
        type: number;
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetCode(input: {
        type: number;
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeploySuperRoot(input: {
        evers: string | number | bigint;
        prev_super_root?: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeploySuperRoot(input: {
        evers: string | number | bigint;
        prev_super_root?: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runUpdate(input: {
        main_evers: string | number | bigint;
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
        main_evers: string | number | bigint;
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
    runRelease(input: {
        main_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalRelease(input: {
        main_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapperType(input: {
        main_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        wrappers_cfg: string;
        type: number;
        wrapper_deployer: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAddWrapperType(input: {
        main_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        wrappers_cfg: string;
        type: number;
        wrapper_deployer: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapper(input: {
        main_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        wrappers_cfg: string;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        symbol: string;
        type: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAddWrapper(input: {
        main_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        wrappers_cfg: string;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        symbol: string;
        type: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAddXchgPair(input: {
        main_evers: string | number | bigint;
        flex: string;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        major_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        minor_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        min_amount: string | number | bigint;
        minmove: string | number | bigint;
        price_denum: string | number | bigint;
        notify_addr: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAddXchgPair(input: {
        main_evers: string | number | bigint;
        flex: string;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        major_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        minor_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        min_amount: string | number | bigint;
        minmove: string | number | bigint;
        price_denum: string | number | bigint;
        notify_addr: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnlistWrapper(input: {
        main_evers: string | number | bigint;
        wrappers_cfg: string;
        wic: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnlistWrapper(input: {
        main_evers: string | number | bigint;
        wrappers_cfg: string;
        wic: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnlistXchgPair(input: {
        main_evers: string | number | bigint;
        flex: string;
        pair: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnlistXchgPair(input: {
        main_evers: string | number | bigint;
        flex: string;
        pair: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeployWrappersConfig(input: {
        main_evers: string | number | bigint;
        deploy_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        token_version: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployWrappersConfig(input: {
        main_evers: string | number | bigint;
        deploy_evers: string | number | bigint;
        wrappers_cfg_keep_evers: string | number | bigint;
        token_version: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runDeployFlex(input: {
        main_evers: string | number | bigint;
        deploy_evers: string | number | bigint;
        keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        old_flex?: string;
        exchange_version: number;
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
        main_evers: string | number | bigint;
        deploy_evers: string | number | bigint;
        keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        old_flex?: string;
        exchange_version: number;
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
        main_evers: string | number | bigint;
        deploy_evers: string | number | bigint;
        triplet: {
            wallet: number;
            exchange: number;
            user: number;
        };
        flex: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployUserDataConfig(input: {
        main_evers: string | number | bigint;
        deploy_evers: string | number | bigint;
        triplet: {
            wallet: number;
            exchange: number;
            user: number;
        };
        flex: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runCloneWrappersConfig(input: {
        main_evers: string | number | bigint;
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
        output: {
            value0: string;
        };
    }>;
    runLocalCloneWrappersConfig(input: {
        main_evers: string | number | bigint;
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
        output: {
            value0: string;
        };
    }>;
    runSetFlags(input: {
        main_evers: string | number | bigint;
        stop_trade?: boolean;
        abandon_ship?: boolean;
        update_started?: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetFlags(input: {
        main_evers: string | number | bigint;
        stop_trade?: boolean;
        abandon_ship?: boolean;
        update_started?: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetOwner(input: {
        main_evers: string | number | bigint;
        owner: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetOwner(input: {
        main_evers: string | number | bigint;
        owner: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetUpdateTeam(input: {
        main_evers: string | number | bigint;
        team?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetUpdateTeam(input: {
        main_evers: string | number | bigint;
        team?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetNextSuperRoot(input: {
        main_evers: string | number | bigint;
        next_super_root: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetNextSuperRoot(input: {
        main_evers: string | number | bigint;
        next_super_root: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            initialized: boolean;
            pubkey: string;
            super_root?: string;
            super_root_code?: string;
            global_cfg_code?: string;
            flex_client_stub?: string;
            wrappers_cfg_code?: string;
            wic_code?: string;
            flex_code?: string;
            pair_code?: string;
            price_code?: string;
            user_data_cfg_code?: string;
            flex_client_code?: string;
            auth_index_code?: string;
            user_id_index_code?: string;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            initialized: boolean;
            pubkey: string;
            super_root?: string;
            super_root_code?: string;
            global_cfg_code?: string;
            flex_client_stub?: string;
            wrappers_cfg_code?: string;
            wic_code?: string;
            flex_code?: string;
            pair_code?: string;
            price_code?: string;
            user_data_cfg_code?: string;
            flex_client_code?: string;
            auth_index_code?: string;
            user_id_index_code?: string;
        };
    }>;
}
//# sourceMappingURL=SuperRootOwnerAccount.d.ts.map