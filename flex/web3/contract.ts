import { AbiContract, AbiFunction } from "@eversdk/core";
import { Evr } from "./evr";

export class ContractFunction {
    constructor(
        public evr: Evr,
        public abi: AbiContract,
        public fn: AbiFunction,
        public params: any,
    ) {
    }

    async call(): Promise<any> {
        this.evr.log.info("call",this.fn.name, "(", this.params, ")");

    }

    async process(): Promise<any> {
        this.evr.log.info("process", this.fn.name, "(", this.params, ")");
    }
}

export class Contract {
    methods: { [name: string]: (params: any) => ContractFunction } = {};

    constructor(public evr: Evr, public abi: AbiContract) {
        for (const fn of abi.functions ?? []) {
            this.methods[fn.name] = (params) => new ContractFunction(evr, abi, fn, params);
        }
    }
}

