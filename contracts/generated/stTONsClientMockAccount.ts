
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

export class stTONsClientMockAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner_pubkey","type":"uint256"}],"outputs":[]},{"name":"deployStTONs","inputs":[{"name":"evers","type":"uint128"},{"name":"code","type":"cell"},{"name":"owner_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"depool","type":"address"},{"name":"depool_pubkey","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"returnStake","inputs":[{"name":"stTONsAddr","type":"address"},{"name":"dst","type":"address"},{"name":"processing_evers","type":"uint128"},{"name":"depool_processing_evers","type":"uint128"}],"outputs":[]},{"name":"finalize","inputs":[{"name":"stTONsAddr","type":"address"},{"name":"dst","type":"address"},{"name":"processing_evers","type":"uint128"},{"name":"ignore_errors","type":"bool"}],"outputs":[]},{"name":"getOwnerPubkey","inputs":[],"outputs":[{"name":"value0","type":"uint256"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"owner_pubkey_","type":"uint256"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECGQEABQIAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIBgHAgL9FggCASAXCQE1I6AAdMAmXBwJAFVEVUC2SIB4YECANcYcSTZgCgEujoAi0wCZcHAkVREBVRHZIgHh0/9xJNkLA/5t7UAHwwAD0z/TH9MflQHtUNswghA8keHFIwG5joDhghAab2XsIwG5joDhghAU56/cghAU56/cFLryqQfyqAWj8uBECvkBVBC2+RDyqO1E0NMAAfJ/0z9TEr4CwwBQArAB0/8wAfJ8+COBA+iogggbd0CgIgG5cFRBROMEAvK8Eg0MANYD1fpA1fpAcPhk03/Tf1K6ugnRA9EH8uBk+ADIdiEBzwsDcCIBzwsBydABzoANEs8LHxLOEst/UCLOAckF+gIT9ABw+gJw+gJxzwthE8zJcPsAyHDPCwASyz8Ty//J7VRVIFU1XwdZAVUB2QHUghAab2XsE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuSDyvAPV03/U0/9w+GSOgAHTAJlwcCRVEQFVEdkiAeH6QHEk2Q4BggHV+kDT/9EC0VLbuvLgZPgAyHAhAc8LAHAhAc8LPxjL/46AjhBwEs8LAFUDMCFVAVUiVRPZJQHhcRLPCwAVziTZDwHOcFUNgBNhVQHjBFHCzhPL/3DPC59WEQH0AHDPCwhxKAHPCwEZzPgocRLPCwAJyQHTAVAkzMlQCcxwzwsAySD5ACnBA5lfCcAD8tBj8jThCcAC8rQC0wCOgCIh4QHTBAHXGAEwIVUB2RAB+nQkAc8LAgLSBzBQAsoHdhrPCwJwJAHPCwHJ0AHOUKnL/3oTzwsfAsnQgBVh0NMBUivOBMkBwAJQTPoCgBNhAfQAcPoCcPoCc88LYRTMcc8LABLMyXD7AMgJ8rBzKQHPCwFwKgHPCwHJ0AHOB/pAMFAHznHPC2GCEJpvZewZEQBUzwsfzslQB8zJcPsAyHDPCwAYyz8Zy//J7VSCEBpvZexVUFUnVRtfCwHZAaiCEERVjqYjAbmOgOGCEDyR4cWCEDyR4cUUuvKpB/KoBaPy4EQK+QFAtvkQ8qjtRNDTADDyvvgAcPhkMNXT/9HIcM8LQMv/ye1UVSFVNl8IWQFVAdkTAeaCEFXdAKQjAbmOgOGCEERVjqaCEERVjqYUuvKp7UTQ0wAB8n9w+GSAEWHQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs5xzwthghDEVY6mEs8LHwLTP9P/MFADy//JAczJcPsAVQFVc1U8Xw7ZFAH+ghBV3QCkE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuXBUQarjBAjyvALV+kDV+kBw+GTTf9MAUpm6CNED0Qby4GT4AMh2IQHPCwNwIgHPCwHJ0ATDAFBEzhUAhnEUsIAOEs8LHxLOywDJUCLOUAT6Ahn0AHD6AnD6AnHPC2ESzMlw+wDIcM8LABbLP8v/ye1UghBV3QCkWVU0XwZVAdkCASAXFwAFPI2gACjfMNDTAJLyMCIB4NYB0wAw8qnyNw==",
        code: "te6ccgECFgEABNUAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIBUEAgL9EwUCASAUBgE1I6AAdMAmXBwJAFVEVUC2SIB4YECANcYcSTZgBwEujoAi0wCZcHAkVREBVRHZIgHh0/9xJNkIA/5t7UAHwwAD0z/TH9MflQHtUNswghA8keHFIwG5joDhghAab2XsIwG5joDhghAU56/cghAU56/cFLryqQfyqAWj8uBECvkBVBC2+RDyqO1E0NMAAfJ/0z9TEr4CwwBQArAB0/8wAfJ8+COBA+iogggbd0CgIgG5cFRBROMEAvK8DwoJANYD1fpA1fpAcPhk03/Tf1K6ugnRA9EH8uBk+ADIdiEBzwsDcCIBzwsBydABzoANEs8LHxLOEst/UCLOAckF+gIT9ABw+gJw+gJxzwthE8zJcPsAyHDPCwASyz8Ty//J7VRVIFU1XwdZAVUB2QHUghAab2XsE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuSDyvAPV03/U0/9w+GSOgAHTAJlwcCRVEQFVEdkiAeH6QHEk2QsBggHV+kDT/9EC0VLbuvLgZPgAyHAhAc8LAHAhAc8LPxjL/46AjhBwEs8LAFUDMCFVAVUiVRPZJQHhcRLPCwAVziTZDAHOcFUNgBNhVQHjBFHCzhPL/3DPC59WEQH0AHDPCwhxKAHPCwEZzPgocRLPCwAJyQHTAVAkzMlQCcxwzwsAySD5ACnBA5lfCcAD8tBj8jThCcAC8rQC0wCOgCIh4QHTBAHXGAEwIVUB2Q0B+nQkAc8LAgLSBzBQAsoHdhrPCwJwJAHPCwHJ0AHOUKnL/3oTzwsfAsnQgBVh0NMBUivOBMkBwAJQTPoCgBNhAfQAcPoCcPoCc88LYRTMcc8LABLMyXD7AMgJ8rBzKQHPCwFwKgHPCwHJ0AHOB/pAMFAHznHPC2GCEJpvZewZDgBUzwsfzslQB8zJcPsAyHDPCwAYyz8Zy//J7VSCEBpvZexVUFUnVRtfCwHZAaiCEERVjqYjAbmOgOGCEDyR4cWCEDyR4cUUuvKpB/KoBaPy4EQK+QFAtvkQ8qjtRNDTADDyvvgAcPhkMNXT/9HIcM8LQMv/ye1UVSFVNl8IWQFVAdkQAeaCEFXdAKQjAbmOgOGCEERVjqaCEERVjqYUuvKp7UTQ0wAB8n9w+GSAEWHQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs5xzwthghDEVY6mEs8LHwLTP9P/MFADy//JAczJcPsAVQFVc1U8Xw7ZEQH+ghBV3QCkE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuXBUQarjBAjyvALV+kDV+kBw+GTTf9MAUpm6CNED0Qby4GT4AMh2IQHPCwNwIgHPCwHJ0ATDAFBEzhIAhnEUsIAOEs8LHxLOywDJUCLOUAT6Ahn0AHD6AnD6AnHPC2ESzMlw+wDIcM8LABbLP8v/ye1UghBV3QCkWVU0XwZVAdkCASAUFAAFPI2gACjfMNDTAJLyMCIB4NYB0wAw8qnyNw==",
        codeHash: "396856ad1b4705d4f3aea9e9f7a3a5068db30f9a4008c807887f51e899a6e936",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(stTONsClientMockAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        owner_pubkey: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runDeployStTONs(input: {
        evers: string | number | bigint /* uint128 */,
        code: string /* cell */,
        owner_pubkey: string | number | bigint /* uint256 */,
        owner_address?: string /* optional(address) */,
        depool: string /* address */,
        depool_pubkey: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "deployStTONs", input);
    }

    async runLocalDeployStTONs(input: {
        evers: string | number | bigint /* uint128 */,
        code: string /* cell */,
        owner_pubkey: string | number | bigint /* uint256 */,
        owner_address?: string /* optional(address) */,
        depool: string /* address */,
        depool_pubkey: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "deployStTONs", input);
    }

    async runReturnStake(input: {
        stTONsAddr: string /* address */,
        dst: string /* address */,
        processing_evers: string | number | bigint /* uint128 */,
        depool_processing_evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "returnStake", input);
    }

    async runLocalReturnStake(input: {
        stTONsAddr: string /* address */,
        dst: string /* address */,
        processing_evers: string | number | bigint /* uint128 */,
        depool_processing_evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "returnStake", input);
    }

    async runFinalize(input: {
        stTONsAddr: string /* address */,
        dst: string /* address */,
        processing_evers: string | number | bigint /* uint128 */,
        ignore_errors: boolean /* bool */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "finalize", input);
    }

    async runLocalFinalize(input: {
        stTONsAddr: string /* address */,
        dst: string /* address */,
        processing_evers: string | number | bigint /* uint128 */,
        ignore_errors: boolean /* bool */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "finalize", input);
    }

    async runGetOwnerPubkey(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint256 */,
        }
    }> {
        return await runHelper(this, "getOwnerPubkey", {});
    }

    async runLocalGetOwnerPubkey(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint256 */,
        }
    }> {
        return await runLocalHelper(this, "getOwnerPubkey", {});
    }

}

