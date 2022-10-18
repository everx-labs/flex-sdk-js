
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    deployHelper,
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type UserDataConfigOnDeployInput = {
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigDeployFlexClientInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    deploy_evers: string | number | bigint /* uint128 */,
    signature: string /* bytes */,
};

export type UserDataConfigDeployFlexClientOutput = {
    value0: string /* address */,
};

export type UserDataConfigRequestDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type UserDataConfigRequestDetailsOutput = {
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigGetFlexClientAddrInput = {
    pubkey: string | number | bigint /* uint256 */,
};

export type UserDataConfigGetFlexClientAddrOutput = {
    value0: string /* address */,
};

export type UserDataConfigGetDetailsOutput = {
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigGetConfigOutput = {
    super_root: string /* address */,
};


export class UserDataConfigAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"outputs":[]},{"name":"deployFlexClient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"deploy_evers","type":"uint128"},{"name":"signature","type":"bytes"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"requestDetails","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}]},{"name":"getFlexClientAddr","inputs":[{"name":"pubkey","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"getDetails","inputs":[],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"flex_client_code_","type":"optional(cell)"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECGAEABzkAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAwEAmD/0wAC0CDbPI6SMAPTAI6AIiHhAdP/ATAhVQHZIyHhgQIAFdcYATAkAVUhVQRVBNkLBQP+be1AA9M/0x/TH5UB7VDbMIIQToyfoyMBuY6A4YIQRzOJloIQRzOJlhS68qkLo/J52zxw+GT4KtAg10rAA/LgRYATYdMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOcc8LYYIQxzOJlhLPCx8C1NTV+kAwUAXOyVADzAcWBgAgyXD7AFU+coAUY4AUZVUB2QT+ghBnudqhIwG5j1qCEGe52qETuvKpCqPyeds8cPhkgBNh1dP/0Qby4GUwI27y0GUCbvLQZW7y0GVu8tBl+CjTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdnhghBOjJ+jghBOjJ+jFLryqQuj8nnbPHD4ZBYJFggA4gTy4GUibvLQZSFu8tBlIG7y0GUjbvLQZYARYdMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc6CEM6Mn6MSzwsfG8sfAfpAMFAKzlCJyx8Wyx8UznEXzwthUCbL/xLMEswSzMzJAczJcPsAVTFVFl8HVQHZAfzIcCEBzwsAgBNh0wEBwALysHMjAc8LAXAkAc8LAcnQAc5wIwHPC18C+kAwAc5xIwHPCwFWElUC9AAZy/9wzwu/VhEB9ACAEWEB9ABQeMx0IwHPCwIF0gdxGc8LYYIQ57naoRXPCx8GygdxEs8LAALJUAjMyQHMcM8LAMn5ABYKAEDPC//J0FACzslQBMzJcPsAghBnudqhVXBVKVUdXw0B2QA40wEBwALtQAHysO1Q+kD6QPoA0wAwwwBxsANfAwKC3wHQINMAAfJwINYBlu1A7VDbMAHTAI8cMCTHAQTbPI6AJSHhJscCIeEwo/J5cFUxXwQB2QEwIQHhcAFVMl8FAdkXDQP+MCXXDR9vo5lwVSBVNF8HAdnhMCbXSfKwmqPyeXBVMV8EAdnhbQbTH5xfA6PyeXBVMV8EAdmCEFWyrFEjAbmOgOGCECdkp8QTuiJwVQhVFwFVAlUmVQlVJ+EDo/J52zxw+GQM0x8wJgXy4GUjbvLQZSJu8tBlIW7y0GUsbvLQZRAWDgL8yHYhAc8LA3AiAc8LAcnQAc6AEWHTANMA0wD6QDBQBM5QVMsfLQHLHywByx9wFPoCUrTLH1Dj9ABw+gJw+gJxzwthUJLOJwHL/yUBzCQBzCMBzC4BzMkBzMmAQPsAcVUJVQlVCVUHVQhVBFUIVQhVCFUM2zyCECdkp8RVMFUlFQ8ACF8HAdkD/IIQXCl+0CMBuY9yghBcKX7QE7oicFUg4fpA0//U1NT4KtAg10rbPHD4ZF8EBsADCNQwCPLgRVsE1NTV+kAwgBNh0wDTANMA+kAwUATHBfLgZF8GAvLQZghxVQhVAlUDVQNVCFUEVQhVCFUIVQjbPIIQXCl+0FUgVSRfBgHZ4RYVEQLYghBVsqxRE7oicFUIVRcBVQJVJlUJVSfhA6PyeQLTH9P/03/bPHD4ZArUMCTy4GUjbvLQZSJu8tBlIW7y0GUqbvLQZfgo0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZFhIB/shwIQHPCwDtR3EiAc8LAQFvEIAZYdMA0wBwJgHPC18B0wAFbxd0Gc8LAlL3zAgF+kD6QAzSBzBWHVUE9AAM+gAwB28QcRvPCwAIygdxgBJhAbBWE1C4oXL7AoAYYVULy/9wzwu/VhoB9ABWGgH0AAnJUAnMychwIQHPCwB2IQETAfzPCwJwIwHPCwHJ0AHOUjvMcM8LAMn5ABvPC//J0FIKznEbzwsBVQmAGGH6AlYRVQHMVhpVAfQAcRLPCwBwEvoCUDPMcBP6AnATzwsAcxPPC2ECyXoSzwsfVhUByx9WFAHLH1YTAcsfgBJhAc5WEQHL/y8BzALMUtLMcRLPCwAUAdRWFFUBzBzMyVALzMlw+wDIgBNhIcsfF852JwHPCwNwGM8LAcnQAckHzs5w+gKAE2EB9ABw+gJw+gJxzwthFczJgQCA+wBbVQtVC1ULVQJVC1UFVQtVC1ULVQzbPIIQVbKsUVVAVSZfCAHZFQCq7UDIcM8LABvLHxnLH3EVsJ8U9AAS9AD0APQAye1U7VABo1CFyx+OEXDPCwBVI18DVSBVBFUDVQTZJQHhcc8LAAZQBs4Uy/9VATBVIF4QVQRVA1UE2QCo7UDtRNDTAAHyf9Mf0x/TH44T9AT0BPQEB+1QBvQEMFVAVQVVBQHTAI4TcHBwVQMwVSRVB1UUAVUFVRYB2SIB4fpA0/9xVQMwVSRVB1UVVRUBVQfZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
        codeHash: "17bc95b29a60ea52fa42c14656ce11deb283eab40589944c07225e6b24d87d57",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(UserDataConfigAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: UserDataConfigOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: UserDataConfigOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runDeployFlexClient(input: UserDataConfigDeployFlexClientInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigDeployFlexClientOutput>> {
        return await runHelper(this, "deployFlexClient", input, options);
    }

    async deployFlexClient(input: UserDataConfigDeployFlexClientInput): Promise<RunLocalHelperResult<UserDataConfigDeployFlexClientOutput>> {
        return await runLocalHelper(this, "deployFlexClient", input);
    }

    async runRequestDetails(input: UserDataConfigRequestDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigRequestDetailsOutput>> {
        return await runHelper(this, "requestDetails", input, options);
    }

    async requestDetails(input: UserDataConfigRequestDetailsInput): Promise<RunLocalHelperResult<UserDataConfigRequestDetailsOutput>> {
        return await runLocalHelper(this, "requestDetails", input);
    }

    async runGetFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetFlexClientAddrOutput>> {
        return await runHelper(this, "getFlexClientAddr", input, options);
    }

    async getFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput): Promise<RunLocalHelperResult<UserDataConfigGetFlexClientAddrOutput>> {
        return await runLocalHelper(this, "getFlexClientAddr", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<UserDataConfigGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetConfigOutput>> {
        return await runHelper(this, "getConfig", {}, options);
    }

    async getConfig(): Promise<RunLocalHelperResult<UserDataConfigGetConfigOutput>> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

