
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
export type Tip31FactoryDeployRootInput = {
    answerId: number /* uint32 */,
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    owner: string /* address */,
    initialSupplyTo: string /* address */,
    initialSupply: string | number | bigint /* uint128 */,
    deployWalletValue: string | number | bigint /* uint128 */,
    mintDisabled: boolean /* bool */,
    burnByRootDisabled: boolean /* bool */,
    burnPaused: boolean /* bool */,
    remainingGasTo: string /* address */,
    upgradeable: boolean /* bool */,
};

export type Tip31FactoryDeployRootOutput = {
    value0: string /* address */,
};

export type Tip31FactoryChangeDeployValueInput = {
    deployValue: string | number | bigint /* uint128 */,
};

export type Tip31FactoryChangeRootCodeInput = {
    rootCode: string /* cell */,
};

export type Tip31FactoryChangeWalletCodeInput = {
    walletCode: string /* cell */,
};

export type Tip31FactoryChangeRootUpgradeableCodeInput = {
    rootUpgradeableCode: string /* cell */,
};

export type Tip31FactoryChangeWalletUpgradeableCodeInput = {
    walletUpgradeableCode: string /* cell */,
};

export type Tip31FactoryChangePlatformCodeInput = {
    platformCode: string /* cell */,
};

export type Tip31FactoryTransferOwnerInput = {
    owner: string /* address */,
};

export type Tip31FactoryUpgradeInput = {
    code: string /* cell */,
};

export type Tip31Factory_ownerOutput = {
    _owner: string /* address */,
};

export type Tip31Factory_pendingOwnerOutput = {
    _pendingOwner: string /* address */,
};

export type Tip31Factory_tokenNonceOutput = {
    _tokenNonce: string /* uint256 */,
};

export type Tip31Factory_deployValueOutput = {
    _deployValue: string /* uint128 */,
};

export type Tip31Factory_rootCodeOutput = {
    _rootCode: string /* cell */,
};

export type Tip31Factory_walletCodeOutput = {
    _walletCode: string /* cell */,
};

export type Tip31Factory_rootUpgradeableCodeOutput = {
    _rootUpgradeableCode: string /* cell */,
};

export type Tip31Factory_walletUpgradeableCodeOutput = {
    _walletUpgradeableCode: string /* cell */,
};

export type Tip31Factory_platformCodeOutput = {
    _platformCode: string /* cell */,
};


export class Tip31FactoryAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"deployValue","type":"uint128"},{"name":"rootCode","type":"cell"},{"name":"walletCode","type":"cell"},{"name":"rootUpgradeableCode","type":"cell"},{"name":"walletUpgradeableCode","type":"cell"},{"name":"platformCode","type":"cell"}],"outputs":[]},{"name":"deployRoot","inputs":[{"name":"answerId","type":"uint32"},{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"owner","type":"address"},{"name":"initialSupplyTo","type":"address"},{"name":"initialSupply","type":"uint128"},{"name":"deployWalletValue","type":"uint128"},{"name":"mintDisabled","type":"bool"},{"name":"burnByRootDisabled","type":"bool"},{"name":"burnPaused","type":"bool"},{"name":"remainingGasTo","type":"address"},{"name":"upgradeable","type":"bool"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"changeDeployValue","inputs":[{"name":"deployValue","type":"uint128"}],"outputs":[]},{"name":"changeRootCode","inputs":[{"name":"rootCode","type":"cell"}],"outputs":[]},{"name":"changeWalletCode","inputs":[{"name":"walletCode","type":"cell"}],"outputs":[]},{"name":"changeRootUpgradeableCode","inputs":[{"name":"rootUpgradeableCode","type":"cell"}],"outputs":[]},{"name":"changeWalletUpgradeableCode","inputs":[{"name":"walletUpgradeableCode","type":"cell"}],"outputs":[]},{"name":"changePlatformCode","inputs":[{"name":"platformCode","type":"cell"}],"outputs":[]},{"name":"transferOwner","inputs":[{"name":"owner","type":"address"}],"outputs":[]},{"name":"acceptOwner","inputs":[],"outputs":[]},{"name":"upgrade","inputs":[{"name":"code","type":"cell"}],"outputs":[]},{"name":"_owner","inputs":[],"outputs":[{"name":"_owner","type":"address"}]},{"name":"_pendingOwner","inputs":[],"outputs":[{"name":"_pendingOwner","type":"address"}]},{"name":"_tokenNonce","inputs":[],"outputs":[{"name":"_tokenNonce","type":"uint256"}]},{"name":"_deployValue","inputs":[],"outputs":[{"name":"_deployValue","type":"uint128"}]},{"name":"_rootCode","inputs":[],"outputs":[{"name":"_rootCode","type":"cell"}]},{"name":"_walletCode","inputs":[],"outputs":[{"name":"_walletCode","type":"cell"}]},{"name":"_rootUpgradeableCode","inputs":[],"outputs":[{"name":"_rootUpgradeableCode","type":"cell"}]},{"name":"_walletUpgradeableCode","inputs":[],"outputs":[{"name":"_walletUpgradeableCode","type":"cell"}]},{"name":"_platformCode","inputs":[],"outputs":[{"name":"_platformCode","type":"cell"}]}],"data":[{"key":1,"name":"_randomNonce","type":"uint256"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_randomNonce","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_pendingOwner","type":"address"},{"name":"_tokenNonce","type":"uint256"},{"name":"_deployValue","type":"uint128"},{"name":"_rootCode","type":"cell"},{"name":"_walletCode","type":"cell"},{"name":"_rootUpgradeableCode","type":"cell"},{"name":"_walletUpgradeableCode","type":"cell"},{"name":"_platformCode","type":"cell"}]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECOwEACcsABCSK7VMg4wMgwP/jAiDA/uMC8gsvAgE5A7ztRNDXScMB+GaJ+Gkh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8OhwDA3rtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPI8Li4DAiggghBsNT7ou+MCIIIQfF9U9LvjAg0EBFAgghBwt+wguuMCIIIQcPugHrrjAiCCEHqp4Om64wIgghB8X1T0uuMCCQgHBQMoMPhG8uBM+EJu4wDU0ds8MNs88gAtBjgAVPhJ+EvHBSCcMPhL+kJvE9cL/8MA3vLj6Phz+EnIz4UIzoBvz0DJgED7AAFOMNHbPPhMIY4bjQRwAAAAAAAAAAAAAAAAPqp4OmDIzs7JcPsA3vIALQFOMNHbPPhSIY4bjQRwAAAAAAAAAAAAAAAAPD7oB6DIzszJcPsA3vIALQO8MPhG8uBM+EJu4wDTH/hEWG91+GQhl9TU0wfU0dCU1NTTB+L6QNTR0PpA03/Tf9IA0gDSANTR0PpA0gDR2zwhjh0j0NMB+kAwMcjPhyDOcc8LYQHIz5PC37CCzs3JcC0LCgF2jjH4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U4vsAMNs88gA4AfD4J28QaKb+YKG1f3D7AoAcgBvjBPhNIKT4bVU4VQQghB+68tBB7UPYXlEg+QDIz4oAQMv/ydBVcPhOKcjPhQjOAfoCc88LaiHbPMzPg1VgyM+QKI+acs7Lf8t/ygDKAMoAAcjOzc3JcfsA+ERwb3KDBm90cG9x+GQMADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwRQIIIQFFVeg7vjAiCCEDFTmkK74wIgghBVLBdPu+MCIIIQbDU+6LvjAiceFQ4EUCCCEF+9//264wIgghBnuF/suuMCIIIQa9VgMbrjAiCCEGw1Pui64wIUExEPAygw+Eby4Ez4Qm7jANTR2zww2zzyAC0QOABU+En4S8cFIJww+Ev6Qm8T1wv/wwDe8uPo+HD4ScjPhQjOgG/PQMmAQPsAAyYw+Eby4Ez4Qm7jANHbPDDbPPIALRI4AV74SfhMxwUgnDD4TPpCbxPXC//DAN7y4+j4TPhrifhs+EnIz4UIzoBvz0DJgED7ADoBTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADnuF/sgyM7MyXD7AN7yAC0BUDDR2zz4TSGOHI0EcAAAAAAAAAAAAAAAADfvf/9gyM7L/8lw+wDe8gAtBFAgghA2FJdJuuMCIIIQQnb087rjAiCCEEwStIi64wIgghBVLBdPuuMCGxoYFgMoMPhG8uBM+EJu4wDU0ds8MNs88gAtFzgAVPhJ+EvHBSCcMPhL+kJvE9cL/8MA3vLj6Phx+EnIz4UIzoBvz0DJgED7AAMoMPhG8uBM+EJu4wDU0ds8MNs88gAtGTgAVPhJ+EvHBSCcMPhL+kJvE9cL/8MA3vLj6Phy+EnIz4UIzoBvz0DJgED7AAFOMNHbPPhRIY4bjQRwAAAAAAAAAAAAAAAAMJ29PODIzszJcPsA3vIALQJ2MPhCbuMA+EbycyGT1NHQ3vpA03/U1NTU0dDU1NH4AFUF+GtVBPhuVQP4b1UC+HBY+HEB+HL4c9s88gAcOAIW7UTQ10nCAY6A4w0dLQJ4cO1E0PQFcSGAQPQOk9cL/5Fw4okgcCCIX0D4c/hy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjOjkEUCCCEBSwn2e64wIgghAXIww6uuMCIIIQGwzZLLrjAiCCEDFTmkK64wImIyEfAzYw+Eby4Ez4Qm7jACGT1NHQ3tN/0ds8MNs88gAtIDgAVPhJ+EvHBSCcMPhL+kJvE9cL/8MA3vLj6Phu+EnIz4UIzoBvz0DJgED7AAM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIALSI4AFT4SfhLxwUgnDD4S/pCbxPXC//DAN7y4+j4bPhJyM+FCM6Ab89AyYBA+wADKDD4RvLgTPhCbuMA1NHbPDDbPPIALSQ4Abz4SfhLxwUgnDD4S/pCbxPXC//DAN7y4+j4T8jM+FABzPhRyMz4UgHM+FMBzPhLyM74TM8W+E3PC//4Ts8Lf1jNzxEh+wQB0CCLOK2zWMcFk9dN0N7XTNDtHu1Tyds8JQAE8AIBTjDR2zz4UyGOG40EcAAAAAAAAAAAAAAAACUsJ9ngyM7MyXD7AN7yAC0EUCCCEA2adky64wIgghAP2GCsuuMCIIIQEAK0e7rjAiCCEBRVXoO64wIrKikoAU4w0ds8+FAhjhuNBHAAAAAAAAAAAAAAAAAlFVeg4MjOzMlw+wDe8gAtAVAw0ds8+E4hjhyNBHAAAAAAAAAAAAAAAAAkAK0e4MjOy3/JcPsA3vIALQFOMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3vIALQMoMPhG8uBM+EJu4wDU0ds8MNs88gAtLDgAVPhJ+EvHBSCcMPhL+kJvE9cL/8MA3vLj6Phv+EnIz4UIzoBvz0DJgED7AAB27UTQ0//TP9MAMdP/1NHQ+kDU0dD6QNP/03/U1NTU0dDU1NH4c/hy+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oTEwABRzb2wgMC42MS4wAgPNwDUyAgFYNDMAv9OGRl/7g2wCB6IaqCZGX/uyxAIHoh/BQ7rEAgegsqgbisQCB6C6qBOSxAIHoLrGRlg7msQCB6IYC6LEAgegt8KTqsQCB6C/wpvCxAIHoL5HoAZPwo5GfCQHoAegBnwOTACv84ZGX/uDbAIHohqoJkZf+7LEAgeiH8FDusQCB6CyqBuKxAIHoLqoE5LEAgegusZGWDuaxAIHohgLosQCB6C3woOqxAIHoL5HoAZPwn5GfCQHoAegBnwOTAQnoTh8NUT8NcT8Njh8Nrh8N0R8N8A6Ojk2BBKI+HCI+HGI+HI5OTk3AnCI+HPQIPpA+kDT/9N/NV4g+Gv4bPht+G7VINQy+G/UMPhw1TEg1DL4cSDUMvhy1DD4c9s8+A/yADk4AHT4U/hS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy/9VgMjOVXDIzsv/y3/MzMxZyMzMzc3Nye1UAAAAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA=",
        codeHash: "b9d6d57d9ee8823954e565cc0ce1e14ff4a040464123456ffdf073ca9b07e0e7",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(Tip31FactoryAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        owner: string /* address */,
        deployValue: string | number | bigint /* uint128 */,
        rootCode: string /* cell */,
        walletCode: string /* cell */,
        rootUpgradeableCode: string /* cell */,
        walletUpgradeableCode: string /* cell */,
        platformCode: string /* cell */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runDeployRoot(input: Tip31FactoryDeployRootInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryDeployRootOutput>> {
        return await runHelper(this, "deployRoot", input, options);
    }

    async deployRoot(input: Tip31FactoryDeployRootInput): Promise<RunLocalHelperResult<Tip31FactoryDeployRootOutput>> {
        return await runLocalHelper(this, "deployRoot", input);
    }

    async runChangeDeployValue(input: Tip31FactoryChangeDeployValueInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "changeDeployValue", input, options);
    }

    async changeDeployValue(input: Tip31FactoryChangeDeployValueInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "changeDeployValue", input);
    }

    async runChangeRootCode(input: Tip31FactoryChangeRootCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "changeRootCode", input, options);
    }

    async changeRootCode(input: Tip31FactoryChangeRootCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "changeRootCode", input);
    }

    async runChangeWalletCode(input: Tip31FactoryChangeWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "changeWalletCode", input, options);
    }

    async changeWalletCode(input: Tip31FactoryChangeWalletCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "changeWalletCode", input);
    }

    async runChangeRootUpgradeableCode(input: Tip31FactoryChangeRootUpgradeableCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "changeRootUpgradeableCode", input, options);
    }

    async changeRootUpgradeableCode(input: Tip31FactoryChangeRootUpgradeableCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "changeRootUpgradeableCode", input);
    }

    async runChangeWalletUpgradeableCode(input: Tip31FactoryChangeWalletUpgradeableCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "changeWalletUpgradeableCode", input, options);
    }

    async changeWalletUpgradeableCode(input: Tip31FactoryChangeWalletUpgradeableCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "changeWalletUpgradeableCode", input);
    }

    async runChangePlatformCode(input: Tip31FactoryChangePlatformCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "changePlatformCode", input, options);
    }

    async changePlatformCode(input: Tip31FactoryChangePlatformCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "changePlatformCode", input);
    }

    async runTransferOwner(input: Tip31FactoryTransferOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transferOwner", input, options);
    }

    async transferOwner(input: Tip31FactoryTransferOwnerInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transferOwner", input);
    }

    async runAcceptOwner(options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "acceptOwner", {}, options);
    }

    async acceptOwner(): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "acceptOwner", {});
    }

    async runUpgrade(input: Tip31FactoryUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "upgrade", input, options);
    }

    async upgrade(input: Tip31FactoryUpgradeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "upgrade", input);
    }

    async run_owner(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_ownerOutput>> {
        return await runHelper(this, "_owner", {}, options);
    }

    async _owner(): Promise<RunLocalHelperResult<Tip31Factory_ownerOutput>> {
        return await runLocalHelper(this, "_owner", {});
    }

    async run_pendingOwner(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_pendingOwnerOutput>> {
        return await runHelper(this, "_pendingOwner", {}, options);
    }

    async _pendingOwner(): Promise<RunLocalHelperResult<Tip31Factory_pendingOwnerOutput>> {
        return await runLocalHelper(this, "_pendingOwner", {});
    }

    async run_tokenNonce(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_tokenNonceOutput>> {
        return await runHelper(this, "_tokenNonce", {}, options);
    }

    async _tokenNonce(): Promise<RunLocalHelperResult<Tip31Factory_tokenNonceOutput>> {
        return await runLocalHelper(this, "_tokenNonce", {});
    }

    async run_deployValue(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_deployValueOutput>> {
        return await runHelper(this, "_deployValue", {}, options);
    }

    async _deployValue(): Promise<RunLocalHelperResult<Tip31Factory_deployValueOutput>> {
        return await runLocalHelper(this, "_deployValue", {});
    }

    async run_rootCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_rootCodeOutput>> {
        return await runHelper(this, "_rootCode", {}, options);
    }

    async _rootCode(): Promise<RunLocalHelperResult<Tip31Factory_rootCodeOutput>> {
        return await runLocalHelper(this, "_rootCode", {});
    }

    async run_walletCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_walletCodeOutput>> {
        return await runHelper(this, "_walletCode", {}, options);
    }

    async _walletCode(): Promise<RunLocalHelperResult<Tip31Factory_walletCodeOutput>> {
        return await runLocalHelper(this, "_walletCode", {});
    }

    async run_rootUpgradeableCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_rootUpgradeableCodeOutput>> {
        return await runHelper(this, "_rootUpgradeableCode", {}, options);
    }

    async _rootUpgradeableCode(): Promise<RunLocalHelperResult<Tip31Factory_rootUpgradeableCodeOutput>> {
        return await runLocalHelper(this, "_rootUpgradeableCode", {});
    }

    async run_walletUpgradeableCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_walletUpgradeableCodeOutput>> {
        return await runHelper(this, "_walletUpgradeableCode", {}, options);
    }

    async _walletUpgradeableCode(): Promise<RunLocalHelperResult<Tip31Factory_walletUpgradeableCodeOutput>> {
        return await runLocalHelper(this, "_walletUpgradeableCode", {});
    }

    async run_platformCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_platformCodeOutput>> {
        return await runHelper(this, "_platformCode", {}, options);
    }

    async _platformCode(): Promise<RunLocalHelperResult<Tip31Factory_platformCodeOutput>> {
        return await runLocalHelper(this, "_platformCode", {});
    }

}

