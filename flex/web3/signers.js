"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3EvrSigners = void 0;
const core_1 = require("@eversdk/core");
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
class Web3EvrSigners {
    constructor(crypto) {
        this.crypto = crypto;
        this.registry = new Map();
    }
    resolve(signer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (signer === undefined) {
                return (0, core_1.signerNone)();
            }
            if (typeof signer === "string") {
                try {
                    return yield this.fromSecret(signer);
                }
                catch (_a) {
                    return yield this.fromName(signer);
                }
            }
            return signer;
        });
    }
    resolvePublicKey(signer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.publicKey(yield this.resolve(signer));
        });
    }
    publicKey(signer) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (signer.type) {
                case "External":
                    return signer.public_key;
                case "Keys":
                    return signer.keys.public;
                case "SigningBox":
                    return (yield this.crypto.signing_box_get_public_key({ handle: signer.handle })).pubkey;
                default:
                    return "";
            }
        });
    }
    fromSecret(secret) {
        return __awaiter(this, void 0, void 0, function* () {
            const keys = yield this.crypto.nacl_sign_keypair_from_secret_key({
                secret,
            });
            keys.secret = keys.secret.substring(0, 64);
            return (0, core_1.signerKeys)(keys);
        });
    }
    fromName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.registry.get(name);
            if (signer) {
                return signer;
            }
            const everdevSignerRegistryPath = path_1.default.resolve(os_1.default.homedir(), ".everdev", "signer", "registry.json");
            if (fs_1.default.existsSync(everdevSignerRegistryPath)) {
                const registry = JSON.parse(fs_1.default.readFileSync(everdevSignerRegistryPath, "utf8"));
                const item = registry.items.find(x => x.name === name);
                if (item) {
                    return (0, core_1.signerKeys)(item.keys);
                }
            }
            throw new Error(`Invalid signer: "${name}".
             You must use one of: \`secret key\`, \`everdev\` signer name or \`Flex.signers\` name.`);
        });
    }
}
exports.Web3EvrSigners = Web3EvrSigners;
//# sourceMappingURL=signers.js.map