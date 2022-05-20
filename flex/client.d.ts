import { Flex, FlexBoundLazy } from "./flex";
import { FlexClientAccount, UserIdIndexAccount } from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";
export declare type ClientOptions = {
    address: string;
    signer?: Signer | string;
};
export declare type ClientDeployOptions = {
    everWallet: EverWallet;
    signer: Signer | string;
};
export declare type UserDeployOptions = {
    id: number;
    name: string;
    signer: Signer | string;
    refillWallet: string | number | bigint;
    minRefill: string | number | bigint;
    eversAuth: string | number | bigint;
    eversAll: string | number | bigint;
};
declare type ClientState = {
    account: FlexClientAccount;
};
export declare class Client extends FlexBoundLazy<ClientOptions, ClientState> {
    static deploy(options: ClientDeployOptions, bindFlex?: Flex): Promise<Client>;
    deployUser(options: UserDeployOptions): Promise<UserIdIndexAccount>;
    protected createState(options: ClientOptions): Promise<ClientState>;
}
export {};
//# sourceMappingURL=client.d.ts.map