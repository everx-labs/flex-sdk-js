import { FlexBoundLazy, FlexBoundOptions } from "./flex";
import { FlexClientAccount } from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";
export declare type ClientOptions = FlexBoundOptions & {
    address: string;
};
export declare type ClientDeployOptions = FlexBoundOptions & {
    everWallet: EverWallet;
    signer: Signer | string;
};
declare type ClientState = {
    client: FlexClientAccount;
};
export declare class Client extends FlexBoundLazy<ClientOptions, ClientState> {
    constructor(options: ClientOptions);
    static deploy(options: ClientDeployOptions): Promise<Client>;
    protected createState(options: ClientOptions): Promise<ClientState>;
}
export {};
//# sourceMappingURL=client.d.ts.map