import { FlexConfig } from "./config";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
import { Evr } from "./web3";
export declare class Flex {
    config: FlexConfig;
    evr: Evr;
    constructor(config: Partial<FlexConfig>);
    getSuperRootAccount(): Promise<SuperRootAccount>;
    getGlobalConfigAccount(): Promise<GlobalConfigAccount>;
    getFlexAccount(): Promise<FlexAccount>;
    getUserConfigAccount(): Promise<UserDataConfigAccount>;
    query(text: string): Promise<any>;
    close(): Promise<void>;
}
//# sourceMappingURL=flex.d.ts.map