import { FlexConfig } from "./config";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
import { Web3Evr } from "./web3";
export declare class Flex {
    config: FlexConfig;
    evr: Web3Evr;
    constructor(config: Partial<FlexConfig>);
    getSuperRootAccount(): Promise<SuperRootAccount>;
    getGlobalConfigAccount(): Promise<GlobalConfigAccount>;
    getFlexAccount(): Promise<FlexAccount>;
    getUserConfigAccount(): Promise<UserDataConfigAccount>;
    query(text: string): Promise<any>;
    close(): Promise<void>;
}
export declare function priceToUnits(price: number, denominator: string | number): {
    num: string;
    denum: string;
};
//# sourceMappingURL=flex.d.ts.map