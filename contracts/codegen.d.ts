import { AbiContract, TonClient } from "@eversdk/core";
export declare function contractCodeHeader(options: {
    hasDeploy: boolean;
}): string;
export declare function genContractCode(client: TonClient, options: {
    name: string;
    abi: AbiContract;
    tvc: string;
}): Promise<{
    code: string;
    hasDeploy: boolean;
}>;
//# sourceMappingURL=codegen.d.ts.map