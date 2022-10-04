
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
export type Tip31FactoryBuilderSetRootCodeInput = {
    rootCode: string /* cell */,
};

export type Tip31FactoryBuilderSetWalletCodeInput = {
    walletCode: string /* cell */,
};

export type Tip31FactoryBuilderDeployTokenFactoryInput = {
    factoryCode: string /* cell */,
    nonce: string | number | bigint /* uint256 */,
    owner: string /* address */,
    factoryDeployValue: string | number | bigint /* uint128 */,
    rootDeployValue: string | number | bigint /* uint128 */,
};

export type Tip31FactoryBuilderDeployTokenFactoryOutput = {
    value0: string /* address */,
};

export type Tip31FactoryBuilder_rootCodeOutput = {
    _rootCode: string /* cell */,
};

export type Tip31FactoryBuilder_walletCodeOutput = {
    _walletCode: string /* cell */,
};


export class Tip31FactoryBuilderAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"setRootCode","inputs":[{"name":"rootCode","type":"cell"}],"outputs":[]},{"name":"setWalletCode","inputs":[{"name":"walletCode","type":"cell"}],"outputs":[]},{"name":"deployTokenFactory","inputs":[{"name":"factoryCode","type":"cell"},{"name":"nonce","type":"uint256"},{"name":"owner","type":"address"},{"name":"factoryDeployValue","type":"uint128"},{"name":"rootDeployValue","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"_rootCode","inputs":[],"outputs":[{"name":"_rootCode","type":"cell"}]},{"name":"_walletCode","inputs":[],"outputs":[{"name":"_walletCode","type":"cell"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_rootCode","type":"cell"},{"name":"_walletCode","type":"cell"}]} as unknown as AbiContract,
        tvc: "te6ccgECHAEAA2sAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsZBQQbArztRNDXScMB+GYh2zzTAAGOHIMI1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8CwYDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwYGAYCKCCCEGe4X+y74wIgghBx7eOMu+MCDQcCKCCCEGi1Xz+64wIgghBx7eOMuuMCCggDKDD4RvLgTPhCbuMA1NHbPDDbPPIAFwkWASz4RSBukjBw3vhCuvLgZPgA2zz4D/hrFgIiMPhCbuMA+Ebyc9H4ANs88gALFgIW7UTQ10nCAY6A4w0MFwE0cO1E0PQFiCD4a/hqgED0DvK91wv/+GJw+GMbBE4gggoBRcK64wIgghAUVV6DuuMCIIIQXsYEnrrjAiCCEGe4X+y64wISEQ8OAU4w0ds8+EohjhuNBHAAAAAAAAAAAAAAAAA57hf7IMjOzMlw+wDe8gAXAygw+Eby4Ez4Qm7jANTR2zww2zzyABcQFgEs+EUgbpIwcN74Qrry4GT4ANs8+A/4ahYBTjDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACUVV6DgyM7MyXD7AN7yABcDmDD4RvLgTPhCbuMAIZTU1NHQkdTi0//6QNN/1NHQ03/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IIBRcKzs3JcPsAkTDiMNs88gAXExYE/vhFIG6SMHDe+EK68uBk+ADbPPgPcMjL/3BtgED0Q1UDyMv/cViAQPRDyPQAyVUDyM+EgPQA9ADPgcmIUwBY+Ev4SlUFVQdVBiD5AMjPigBAy//J0FVwVQgpyM+FCM4B+gJzzwtqIds8zM+DVWDIz5DYUl0mzst/zMzMWcjMzM0WGxUUAArNyXH7AAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAKPhL+Er4Q/hCyMv/yz/Pg8zMye1UACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRsaABRzb2wgMC42MS4wAAA=",
        code: "te6ccgECGQEAAz4ABCSK7VMg4wMgwP/jAiDA/uMC8gsWAgEYArztRNDXScMB+GYh2zzTAAGOHIMI1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8CAMDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwVFQMCKCCCEGe4X+y74wIgghBx7eOMu+MCCgQCKCCCEGi1Xz+64wIgghBx7eOMuuMCBwUDKDD4RvLgTPhCbuMA1NHbPDDbPPIAFAYTASz4RSBukjBw3vhCuvLgZPgA2zz4D/hrEwIiMPhCbuMA+Ebyc9H4ANs88gAIEwIW7UTQ10nCAY6A4w0JFAE0cO1E0PQFiCD4a/hqgED0DvK91wv/+GJw+GMYBE4gggoBRcK64wIgghAUVV6DuuMCIIIQXsYEnrrjAiCCEGe4X+y64wIPDgwLAU4w0ds8+EohjhuNBHAAAAAAAAAAAAAAAAA57hf7IMjOzMlw+wDe8gAUAygw+Eby4Ez4Qm7jANTR2zww2zzyABQNEwEs+EUgbpIwcN74Qrry4GT4ANs8+A/4ahMBTjDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACUVV6DgyM7MyXD7AN7yABQDmDD4RvLgTPhCbuMAIZTU1NHQkdTi0//6QNN/1NHQ03/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IIBRcKzs3JcPsAkTDiMNs88gAUEBME/vhFIG6SMHDe+EK68uBk+ADbPPgPcMjL/3BtgED0Q1UDyMv/cViAQPRDyPQAyVUDyM+EgPQA9ADPgcmIUwBY+Ev4SlUFVQdVBiD5AMjPigBAy//J0FVwVQgpyM+FCM4B+gJzzwtqIds8zM+DVWDIz5DYUl0mzst/zMzMWcjMzM0TGBIRAArNyXH7AAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAKPhL+Er4Q/hCyMv/yz/Pg8zMye1UACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRgXABRzb2wgMC42MS4wAAA=",
        codeHash: "3837540ade5739afc4c9bb54e8bbeae918e8b4b2388f08ca6114cf601f2837bf",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(Tip31FactoryBuilderAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", {});
    }

    async runSetRootCode(input: Tip31FactoryBuilderSetRootCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setRootCode", input, options);
    }

    async setRootCode(input: Tip31FactoryBuilderSetRootCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setRootCode", input);
    }

    async runSetWalletCode(input: Tip31FactoryBuilderSetWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setWalletCode", input, options);
    }

    async setWalletCode(input: Tip31FactoryBuilderSetWalletCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setWalletCode", input);
    }

    async runDeployTokenFactory(input: Tip31FactoryBuilderDeployTokenFactoryInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryBuilderDeployTokenFactoryOutput>> {
        return await runHelper(this, "deployTokenFactory", input, options);
    }

    async deployTokenFactory(input: Tip31FactoryBuilderDeployTokenFactoryInput): Promise<RunLocalHelperResult<Tip31FactoryBuilderDeployTokenFactoryOutput>> {
        return await runLocalHelper(this, "deployTokenFactory", input);
    }

    async run_rootCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryBuilder_rootCodeOutput>> {
        return await runHelper(this, "_rootCode", {}, options);
    }

    async _rootCode(): Promise<RunLocalHelperResult<Tip31FactoryBuilder_rootCodeOutput>> {
        return await runLocalHelper(this, "_rootCode", {});
    }

    async run_walletCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryBuilder_walletCodeOutput>> {
        return await runHelper(this, "_walletCode", {}, options);
    }

    async _walletCode(): Promise<RunLocalHelperResult<Tip31FactoryBuilder_walletCodeOutput>> {
        return await runLocalHelper(this, "_walletCode", {});
    }

}

