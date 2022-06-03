import { AbiContract, AbiFunction } from "@eversdk/core";
import { Web3Evr } from "./evr";

export class ContractFunction {
    constructor(
        public evr: Web3Evr,
        public abi: AbiContract,
        public fn: AbiFunction,
        public params: any,
    ) {
    }

    async call(): Promise<any> {
        console.log(`call ${this.fn.name}(${JSON.stringify(this.params)})`);

    }

    async process(): Promise<any> {
        console.log(`process ${this.fn.name}(${JSON.stringify(this.params)})`);
    }
}

export class Contract {
    methods: { [name: string]: (params: any) => ContractFunction } = {};

    constructor(public evr: Web3Evr, public abi: AbiContract) {
        for (const fn of abi.functions ?? []) {
            this.methods[fn.name] = (params) => new ContractFunction(evr, abi, fn, params);
        }
    }
}

