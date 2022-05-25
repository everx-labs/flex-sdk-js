import { KeyPair, Signer, signerKeys, signerNone, TonClient } from "@eversdk/core";
import { AccountType } from "@eversdk/appkit";
import path from "path";
import os from "os";
import fs from "fs";

export class AccountEx {
    static async isActive(address: string, useClient?: TonClient): Promise<boolean> {
        const client = useClient ?? TonClient.default;
        const accounts = (await client.net.query_collection({
            collection: "accounts",
            filter: { id: { eq: address } },
            result: "acc_type",
            limit: 1,
        })).result as { acc_type: number }[];
        return accounts.length > 0 && accounts[0].acc_type === AccountType.active;
    }
}

export class SignerRegistry {
    signers = new Map<string, Signer>();

    constructor(public client: TonClient) {
    }

    async resolve(signer: Signer | string | undefined): Promise<Signer> {
        if (signer === undefined) {
            return signerNone();
        }
        if (typeof signer === "string") {
            try {
                return await this.fromSecret(signer);
            } catch {
                return await this.fromName(signer);
            }
        }
        return signer;

    }

    async resolvePublicKey(signer: Signer | string | undefined): Promise<string> {
        return await this.publicKey(await this.resolve(signer));
    }

    async publicKey(signer: Signer): Promise<string> {
        switch (signer.type) {
        case "External":
            return signer.public_key;
        case "Keys":
            return signer.keys.public;
        case "SigningBox":
            return (await this.client.crypto.signing_box_get_public_key({ handle: signer.handle })).pubkey;
        default:
            return "";
        }
    }

    private async fromSecret(secret: string): Promise<Signer> {
        const keys = await this.client.crypto.nacl_sign_keypair_from_secret_key({
            secret,
        });
        keys.secret = keys.secret.substring(0, 64);
        return signerKeys(keys);
    }

    private async fromName(name: string): Promise<Signer> {
        const signer = this.signers.get(name);
        if (signer) {
            return signer;
        }
        const everdevSignerRegistryPath = path.resolve(
            os.homedir(),
            ".everdev",
            "signer",
            "registry.json",
        );
        if (fs.existsSync(everdevSignerRegistryPath)) {
            const registry = JSON.parse(fs.readFileSync(
                everdevSignerRegistryPath,
                "utf8",
            )) as EverdevSignerRegistry;
            const item = registry.items.find(x => x.name === name);
            if (item) {
                return signerKeys(item.keys);
            }
        }
        throw new Error(
            `Invalid signer: "${name}".
             You must use one of: \`secret key\`, \`everdev\` signer name or \`Flex.signers\` name.`,
        );
    }

}

type EverdevSignerRegistry = {
    items: {
        name: string,
        keys: KeyPair,
    }[]
};
