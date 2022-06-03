import { defaultConfig, FlexConfig } from "./config";
import {
    FlexAccount,
    GlobalConfigAccount,
    SuperRootAccount,
    UserDataConfigAccount,
} from "../contracts";
import { Web3Evr } from "./web3";

export class Flex {
    /**
     * Configuration of Flex Dex
     */
    config: FlexConfig;
    /**
     * Web3 instance
     */
    evr: Web3Evr;

    constructor(config: Partial<FlexConfig>) {
        this.config = {
            ...defaultConfig(),
            ...config,
        };
        this.evr = new Web3Evr(config.evr);
    }


    /** @internal */
    async getSuperRootAccount(): Promise<SuperRootAccount> {
        return this.evr.accounts.get(SuperRootAccount, this.config.superRoot);
    }

    /** @internal */
    async getGlobalConfigAccount(): Promise<GlobalConfigAccount> {
        const globalConfigAddress =
            this.config.globalConfig
            ?? (await (await this.getSuperRootAccount()).getCurrentGlobalConfig()).output.value0;
        return await this.evr.accounts.get(GlobalConfigAccount, globalConfigAddress);
    }

    /** @internal */
    async getFlexAccount(): Promise<FlexAccount> {
        const globalConfig = await this.getGlobalConfigAccount();
        const globalConfigDetails = (await globalConfig.getDetails()).output;
        return await this.evr.accounts.get(FlexAccount, globalConfigDetails.flex);
    }

    /** @internal */
    async getUserConfigAccount(): Promise<UserDataConfigAccount> {
        const globalConfig = await this.getGlobalConfigAccount();
        const globalConfigDetails = (await globalConfig.getDetails()).output;
        return await this.evr.accounts.get(UserDataConfigAccount, globalConfigDetails.user_cfg);
    }

    async query(text: string): Promise<any> {
        const result = await this.evr.sdk.net.query({
            query: `query {
                flex {
                    ${text}
                }
            }`,
        });
        return result.result.data.flex;
    }

    /**
     * Closes all Node.js tasks that were initiated and consumed by web3 instance
     * Use this function in the closing part of your application
     * otherwise the node.js process will not stop.
     */
    async close() {
        await this.evr.close();
    }

}

export function priceToUnits(
    price: number,
    denominator: string | number,
): { num: string, denum: string } {
    const denom = Math.floor(Number(denominator));
    const price_num = Math.floor(price * denom);
    return {
        num: price_num.toString(),
        denum: denom.toString(),
    };
}
