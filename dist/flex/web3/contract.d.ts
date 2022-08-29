import { AbiContract, AbiFunction } from "@eversdk/core";
import { Evr } from "./evr";
export declare class ContractFunction {
    evr: Evr;
    abi: AbiContract;
    fn: AbiFunction;
    params: any;
    constructor(evr: Evr, abi: AbiContract, fn: AbiFunction, params: any);
    call(): Promise<any>;
    process(): Promise<any>;
}
export declare class Contract {
    evr: Evr;
    abi: AbiContract;
    methods: {
        [name: string]: (params: any) => ContractFunction;
    };
    constructor(evr: Evr, abi: AbiContract);
}
//# sourceMappingURL=contract.d.ts.map