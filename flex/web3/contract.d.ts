import { AbiContract, AbiFunction } from "@eversdk/core";
import { Web3Evr } from "./index";
export declare class ContractFunction {
    evr: Web3Evr;
    abi: AbiContract;
    fn: AbiFunction;
    params: any;
    constructor(evr: Web3Evr, abi: AbiContract, fn: AbiFunction, params: any);
    call(): Promise<any>;
    process(): Promise<any>;
}
export declare class Contract {
    evr: Web3Evr;
    abi: AbiContract;
    methods: {
        [name: string]: (params: any) => ContractFunction;
    };
    constructor(evr: Web3Evr, abi: AbiContract);
}
//# sourceMappingURL=contract.d.ts.map