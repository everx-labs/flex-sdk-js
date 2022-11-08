import { CryptoModule, KeyPair, Signer, signerKeys, signerNone } from "@eversdk/core";
import path from "path";
import os from "os";
import fs from "fs";

export type SignerOption = Signer | string;

export class EvrSigners {
    registry = new Map<string, Signer>();

    constructor(public crypto: CryptoModule) {
    }

    async resolve(signer?: SignerOption): Promise<Signer> {
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

    async resolvePublicKey(signer?: SignerOption): Promise<string> {
        return await this.publicKey(await this.resolve(signer));
    }

    async publicKey(signer: Signer): Promise<string> {
        switch (signer.type) {
        case "External":
            return signer.public_key;
        case "Keys":
            return signer.keys.public;
        case "SigningBox":
            return (await this.crypto.signing_box_get_public_key({ handle: signer.handle })).pubkey;
        default:
            return "";
        }
    }

    async sign(signer: Signer, base64: string): Promise<string> {
        switch (signer.type) {
        case "External":
            throw new Error("External signer can not be used for signing.");
        case "Keys":
            return (await this.crypto.sign(({
                keys: signer.keys,
                unsigned: base64
            }))).signature;
        case "SigningBox":
            return (await this.crypto.signing_box_sign(({
                signing_box: signer.handle,
                unsigned: base64
            }))).signature;
        default:
            return "";
        }
    }

    async getHashSignature(signer: Signer, hex: string): Promise<string> {
        return await this.sign(signer, Buffer.from(hex, "hex").toString("base64"));
    }

    private async fromSecret(secret: string): Promise<Signer> {
        const keys = await this.crypto.nacl_sign_keypair_from_secret_key({
            secret,
        });
        keys.secret = keys.secret.substring(0, 64);
        return signerKeys(keys);
    }

    private async fromName(name: string): Promise<Signer> {
        const signer = this.registry.get(name);
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
            `Invalid signer: "${name}". You must use one of: \`secret key\`, \`everdev\` signer name or \`Flex.signers\` name.`,
        );
    }

}

type EverdevSignerRegistry = {
    items: {
        name: string,
        keys: KeyPair,
    }[]
};
