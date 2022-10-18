
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    deployHelper,
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type RootTokenContractSetWalletCodeInput = {
    _answer_id: number /* uint32 */,
    wallet_code: string /* cell */,
};

export type RootTokenContractSetWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type RootTokenContractDeployWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type RootTokenContractDeployWalletOutput = {
    value0: string /* address */,
};

export type RootTokenContractDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type RootTokenContractDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type RootTokenContractGrantInput = {
    _answer_id: number /* uint32 */,
    dest: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type RootTokenContractMintInput = {
    _answer_id: number /* uint32 */,
    tokens: string | number | bigint /* uint128 */,
};

export type RootTokenContractMintOutput = {
    value0: boolean /* bool */,
};

export type RootTokenContractRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type RootTokenContractRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type RootTokenContractGetNameOutput = {
    value0: string /* string */,
};

export type RootTokenContractGetSymbolOutput = {
    value0: string /* string */,
};

export type RootTokenContractGetDecimalsOutput = {
    value0: number /* uint8 */,
};

export type RootTokenContractGetRootKeyOutput = {
    value0: string /* uint256 */,
};

export type RootTokenContractGetRootOwnerOutput = {
    value0?: string /* optional(address) */,
};

export type RootTokenContractGetTotalSupplyOutput = {
    value0: string /* uint128 */,
};

export type RootTokenContractGetTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type RootTokenContractHasWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type RootTokenContractGetWalletCodeOutput = {
    value0: string /* cell */,
};

export type RootTokenContractGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type RootTokenContractGetWalletAddressOutput = {
    value0: string /* address */,
};

export type RootTokenContractGetWalletCodeHashOutput = {
    value0: string /* uint256 */,
};


export class RootTokenContractAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_owner","type":"optional(address)"},{"name":"total_supply","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWalletCode","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xb"},{"name":"deployWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xc"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xd"},{"name":"grant","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"dest","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"mint","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xf"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x10"},{"name":"getName","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x11"},{"name":"getSymbol","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x12"},{"name":"getDecimals","inputs":[],"outputs":[{"name":"value0","type":"uint8"}],"id":"0x13"},{"name":"getRootKey","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x14"},{"name":"getRootOwner","inputs":[],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x15"},{"name":"getTotalSupply","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"},{"name":"getTotalGranted","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"},{"name":"hasWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x18"},{"name":"getWalletCode","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0x19"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getWalletCodeHash","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_owner_","type":"optional(address)"},{"name":"total_supply_","type":"uint128"},{"name":"total_granted_","type":"uint128"},{"name":"wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECRQEAFYcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBICkHAWT/jpeOgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QHTAJlwcCQBVRFVAtkiAeGBAgDXGHEk2QgEUG3tQAfDAAPTP9Mf0x+VAe1Q2zAiwRSOgOEiwQ+OgOEiwQyOgOEiwQseGQ0JBP6P6QfyqAWj8uBE+CjIzhvOydD5AVQQtvkQ8qjbPFOavgrDAFAKsPJ8+COBA+iogggbd0CgKgG5cFRBzOMECvK8KHD4ZG4M0x/UMA3y4GwwUtW68uBkcRKw+AAoJycnVhAnJigrVQ/bPCn5AOECwAryqQbyqASj8uBE+CjIzhrOREMLCgHWydD5AUCl+RDyqO1E0NMAMPK++AAB1NTTB9XT/3Bw+GSOrwLTf9FTJrHy4GoCwwBwcAFVC1ULVQtVClUGVQZVB1UHVQ3bPHpVMFUVVUhfCwHZAtMAnXAkcFUDAVUDVQRVE9kiAeH6QAFxJdlDAv6C8CyTLadTu6fp2J7+pjsvYbjiEwG22E/ac3+89rt7NaExuvgP+ADy4Gsp12XAC/Lga4ATYdDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAXEs8LIHESzwthAckBzMlw+wBVBlUGVQZVBlUKVQZVBVUGVQdVCds8QwwAFoALAVUSVTVfBwHZA/4iwQ6PYwfyqAWj8uBE+CjIIQHOHM7J0PkBVBDH+RDyqNs8U5u+CsMAUAqw8nz4I4ED6KiCCBt3QKArAblwVEHd4wQL8rwM0x/V+kDTf9N/cPhkjoAB0wCZcHEkVREBVRHZIgHh1HAk2eECwAzyqQbyqASj8uBE+CjIIQHOG87JRBcOAmTQ+QFUELb5EPKo2zxTmr4KwwBQCrDyfPgjgQPoqIIIG3dAoCoBuSDyvA3TH9Vw+GTT/0QPBPiP93CAFWGAE2FVAeMEAtN/1dN/j2EB0QXRVhZuJ8AAAfLQbSZWEKBWESG58tBlUY2x8uBqgBFh8tBoVhmAE2G68uBk+ABwKVYWVhZWFlYdVhdVBVYXgBdhVh3bPPgP+ABWG9MBIcEDmDDAA/LQY/I04QHAAvK0AdMAAdMAQxIREAAkmXBwJFURAVUR2SIB4fpAcSTZACKZcHEkVREBVRHZIgHh1HAk2QGYjrYDwADIcCEBzwsAcCEBzws/VhsBzFYaAcxWIyPOgBVhAcv/AVYZzwsHcM8LfwfSBzBWH1UHy/8B0wCVICNwWdkiAeEg0wQB1xgk2RMB3I7OgvAsky2nU7un6die/qY7L2G44hMBtthP2nN/vPa7ezWhMc8L/4ALzwsPE8oHyVADzHEUzwsBVhsBzHHPCwADyVACzMlSA8xwzwsAyfkAnSRVBzAhVaiAFGFVi9krAeBxJgHPCwCAFGEBziHZFAHUjtQwgBRh+GR0FM8LAgbSBzBQBsoHyHAhAc8LAFBCy/+CEEOE8pgkAc8LHx/Lfw7JdiIBzwsCcBXPCwHJ0FAEzgPQcRLPCwGAIGFVDs4tAct/VhlVAcwlIeAH0wQB1xgBMCcBVVFVB1UH2RUC/o7nyVAHzMlw+wBfCIAVYdDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAMgAwTzwsfE85xE88LYQLJUALMyXD7AHBVA1ULVQtVC1UOVQxVBVUMVQlVDds8VTBVFVUoXwkB2Q+jUjbOUA76AoAaYQH0AHD6AnD6AnNDFgBmzwthcR7PCwATzHDPCwDJUAzMcc8LAJlxEs8LABjMK9kjAeFwEs8LAFUBMCtVYV5QVRbZA/4B0SVWFaBToLny0GUL8tBoVhZVDLry4GT4AHBWElYQVhBWEFYaVhFVBVYQgBthVhjbPPgP+ADIcCEBzwsBghBDhPKYIgHPCx8Yy392Es8LAwfJjqvJAczJcPsAcFUOVQxVDFUMgBFhVQ1VBVUMVQ1VDts8gA5VYFUYVTtfDQHZQ0MYAHwDowHQUAjOGM5QBfoCgBJhAfQAcPoCcPoCgBdhVQbOcRLPC2FwEs8Lf5hxzwsAEswk2ScB4XDPCwBVATAk2QT+IsESjoDhIsERjslVD9DTAds8cPhkXwgDwALIAfKwcyEBzwsBcCIBzwsBydABzgP6QDBQA85xzwthgBGAERTPCx8UzMlQA8zJcPsAAVWSVT1fDwHZ4QLAD/KpBvKoBKPy4ET4KMjOGs7J0PkBVBCl+RDyqNs8KVYTvgrDAFAKsBxERBoC/vJ8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZAzTH9XTf9EF8tBoW1LFuvLgZPgAcCsoKChWEChVBScrVhDbPPgPgBJh0NMBAcAC+ADIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs6AHxLPCyBxEs8LYVAyoALJAcxDGwFMyXD7AHBVCVUGVQZVBlUKVQZVBVUGVQdVCNs8gA8BVRJVJV8GAdlDA/4CwROOyzAO0NMB2zxw+GRfBgXAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOBfpAMFAFzoATcRLPC2GAExbPCx8WywfJUATMyXD7AFVzVTxfD1UB2eEwDtDTAds8cPhkXwcEwALIAfKwcyEBzwsBcCIBzwsBydABzgT6QDBQBM6AEnESREQdADjPC2GAEhXPCx8VzMlQA8zJcPsAVXJVO18OVQHZBPgiwRiOgOEiwRaOgOECwRWO5TAO0NMB2zxw+GRfAwjAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOCPpAMFAIznHPC2GOFckBzMlw+wCAFVXgdIARY4ATZVUB2XEasIAVGc8LH5oCcRPPCwASzijZKQHgcM8LAFUBMCjZ4TAO0NMBIiBEHwGO2zxw+GRfBQbAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOBvpAMFAGzoAUcRLPC2GAFBfPCx8Xy//JUAXMyXD7AFV0VT2AEGVVAdlEA/4CwReOzTAO0NMB2zxw+GQwCsACyAHysHMhAc8LAXAiAc8LAcnQAc4K+kAwUArOgBdxEs8LYYAXG88LHxvLf8lQCczJcPsAVXh0gBJjgBRlVQHZ4TAO0NMB2zxw+GRbCcACyAHysHMhAc8LAXAiAc8LAcnQAc4J+kAwUAnOgBZxREQhAEISzwthgBYazwsfGst/yVAIzMlw+wBVd3SAEWOAE2VVAdkE2iLBGo/kIsEbjtUCwBvyqTAO0NMB2zxw+GQLwALIAfKwcyEBzwsBcCIBzwsBydABzgv6QDBQC86AG3ESzwthgBsczwsfDPkAHM8L/8lQCszJcPsAVXl0gBNjgBVlVQHZ4QHV0//bPHD4ZOECwRlERCUjA/6OyzAO0NMB2zxw+GQLwALIAfKwcyEBzwsBcCIBzwsBydABzgv6QDBQC86AGXESzwthgBkczwsfHMzJUArMyXD7AFV5dIATY4AVZVUB2eEwDtDTAds8cPhkC8ACyAHysHMhAc8LAXAiAc8LAcnQAc4L+kAwUAvOgBhxEs8LYYAYREQkAEQczwsfDG7AAHGwHM8LAMlQCszJcPsAVXl0gBNjgBVlVQHZAY6OsPgoAtEBINMBIcEDmDDAA/LQY/I04QHAAvK0joAB0wCVICNwWdkiAeEg0wQB1xgk2QvTAJlwcS5VEQFVEdkiAeH6QHAu2SYC/gPAAMhwIQHPCwBwIQHPCz+AFGEBzIATYQHMgBJhAcsHUYLOgBRhAcv/cBnPC38G0geOzILwLJMtp1O7p+nYnv6mOy9huOITAbbYT9pzf7z2u3s1oTHPC/+AC88LDxPKB8lQCcxxE88LARzMcc8LAAHJUAnMyVAIzHDPCwDJ+QAoJwBKC6OAE2FVCMv/mnEmAc8LAB3OK9kiAeEkVQEwK1UBVZJVDFUb2QDgjlowgCBh0NMBAcAC8rBzKQHPCwFwKgHPCwHJ0AHOAfpAMAHOgBpxEs8LYYAaKgHPCx90G88LAgbSBzBQBsoHEsv/ydBQCM7JUAPMyXD7AFWFVY90gBpjgBtlAdkiIeAE0wQB1xgBMCQBVSFVBFUE2QEC3yoE/AHQ0wAB8nAg1gGW7UDtUNswAdMAj9UwI9cNH2+jmHBZVSNfBQHZ4TAk10nysJdwVSFfAwHZ4W0E0x+YcFlVI18FAdkiwQ2OgyLBD+EiwQuOgOECwAoi4e1E0NMAMPK++ADU1NMH0/9wcPhkATAhAeEwA9IfAcD/+ADy4GbTHzYtLCsCcoIQQ4TymBK68uBm0x/Tf9s8Uxu58tBnC6FxE7BVB1UHVQdVB1UHVQdVBVUGVQdVCds8cFUwXwQB2URDAZKOrVMGsfLgagLTfzACwwBwcAFVClUKVQpVClUGVQZVB1UHVQ/bPHpVMFUVXwYB2QLTAJ1wJHBVAwFVA1UEVRPZIgHh+kABcSXZQwT+MAHBDI8K0x/T/9s8cHD4ZOHTH9s8cPhkbiQL1DAB8uBsI/LgaQ7TANMA0wD6QFHhxwUO+kD6ADAP8uBkMFYR+QCC8CyTLadTu6fp2J7+pjsvYbjiEwG22E/ac3+89rt7NaExuvgA8uBrVhHXZcAL8uBr7UdvEG8XbxBxGLBQfkQvRC4BwKFy+wLIdiEBzwsDcCIBzwsBydABzhfOcPoCgBJhAfQAUObLH3AW+gJxFs8LAHAW+gIFyXEWzwthFczJgQCA+wAwVQdVB1UHVQdVB1UHVQhVB1UHVQzbPIALWVUDXwMB2UMC/I77AdXTf9N/jt8B0StuKMAAAfLQbVJuoFPgufLQZVUHVhex8uBqLvLgaS+AG2HTANMA0wD6QFFRxwXy4GTtR28Q+Cj4ACDTAQMI+kD6ADAJbxdvEBmicvsCIMEDl8AD8tBj8jThwALytAHTAJlwcSRVEQFVEdkiAeHUcCTZDDEwADLTAJ5wLnBVAwFVEgFVBFUE2SIB4fpAcS/ZAZaOtQPAAMhwIQHPCwBwIQHPCz9WIQHMViABzFFyzoAkYQHL/1YfVQfLB3DPC38H0gcwVh5VB8v/AtMAlSAkcFnZIgHhINMEAdcYJdkyAd6OzoLwLJMtp1O7p+nYnv6mOy9huOITAbbYT9pzf7z2u3s1oTHPC/+AC88LDxPKB8lQA8xxFM8LAVYYAcxxzwsAA8lQAszJUgPMcM8LAMn5AJ0kVQcwIVXYgBdhVY7ZVhwB4HEmAc8LAIAYYQHOIdkzAdSO1DBWIvhkdBTPCwIG0gcwUAbKB8hwIQHPCwBQQsv/ghBDhPKYJAHPCx+AFGEBy38ByXYjAc8LAnAWzwsBydBQBc4E0HETzwsBUpLOVhMBy39WF1UBzCUh4AfTBAHXGAEwJwFVUVUHVQfZNAL8jvbJUA7MyXD7AMh2IQHPCwNwIgHPCwGAIGFVAssfcYAZYQGwAsnQUAPOGc5w+gKAIGEB9ABw+gJQ7s5wHvoCDclxHs8LYR3MyYEAgPsAXwWAFGGAFGGAFGGAFGGAFGGAFGFVBYAUYVULgBNh2zyADFWwVQ1fDQHZVQ+jUkfOQzUAjoAUYfoCViUB9ABw+gJw+gJzzwthcRPPCwAVzHDPCwDJAcxxzwsAmXESzwsAH8wi2SUB4XASzwsAVQMwI1UBVZRVDlUdVR3ZBP6P/SLBEI6A4TDTH9s8cPhkCtN/MCPy4GkkVQ/TANMA0wD6QFFRxwXy4GTtR28QbxcF+kD4APoAMAZvEFB5oHEasFCFoXL7Ash2IQHPCwNwIgHPCwHJ0AHOGM5w+gKAFGEB9ABVD1UHyx9wEvoCcRLPCwBwEvoCAclxEs8LYczJQURANwRs4TABwQ6PJNMf+kDTf9N/2zwkcPhkjoAM0wCZcHEvVREBVRHZIgHh1HAv2eHTH9P/2zxwcPhkRD5EOAHUjs4lAtXTf9EDbiLAAAHy0G1VAVYSsfLgau1HbxD4KCDTAQNvF4AZYdMA0wDTAPpA+kD6ADAGbxAWonL7AiXBA5lfBcAD8tBj8jThBcAC8rQM0wCecC5wVQMBVRIBVQRVBNkiAeH6QHEv2TkBlo61A8AAyHAhAc8LAHAhAc8LP1YcAcxWGwHMUcLOgB9hAcv/VhpVDMsHcM8LfwfSBzBWGVUHy/8H0wCVIClwWdkiAeEg0wQB1xgq2ToC+o7mgvAsky2nU7un6die/qY7L2G44hMBtthP2nN/vPa7ezWhMc8L/4ALzwsPE8oHyVADzHEkAc8LAVYUAcxxzwsAAclQA8zJUALMcM8LAMkg+QCOgCYh4AjTBAHXGAEwKAFVYVUIVQjZnSRVBzAhVZiAE2FVitlWEAHgcSYBPDsAFM8LAIATYQHOIdkB/nQmAc8LAnYWzwsCcCcBzwsBydAK0gcwUKrOUJXKB8v/yXAVzwsfBNBSBM4EyXGAF2EBsFUEgBFh+gJWIAH0AHD6AnD6AnPPC2ETzHHPCwDMyXD7AMiAG2Ehyx8UznYkAc8LA3AVzwsBydAByQTOG85w+gKAHGEB9ABw+gJw+gI9AVxxzwthEszJgQCA+wBfCFUNVQ1VDVUNVQ1VDVUFVQ1VDVUN2zyADVVQVQdfBwHZQwL8VhFVBqBTcLny0GUo8uBpgBZh0wDTANMA+kBRoccF8uBk7UdvEG8XCvpA+AD6ADALbxCOsskBzMmBAID7AHEcsIARYYARYYARYYARYYARYYARYVUFVQ9VCVUP2zyADlWgVQxfDAHZCKMMoXL7Ash2IQHPCwNwIgHPCwHJ0AHOQz8AkIAZYQHOcPoCgBxhAfQAghBDhPKYEs8LH3AS+gIBgBhhzwt/cBL6AlAzznETzwthcBPPC3+Ycc8LABnMJtksAeFwzwsAATAm2QFMgQCA+wBfA1UIVQhVCFUIVQhVCFUFVQhVCFUJ2zyAD1lVA18DAdlDAvwCwBAi4QTTANMA7UdvEG8XAdMA+kD6QNs8cPhkCvoAMA5vEIAUYdMfcRawVQFVD6Fy+wLIdiEBzwsDcCIBzwsBydABzh/OcPoCgBVhAfQAUC7LH3Ae+gJSLst/cB76Ag3JcR7PC2EdzMmBAID7AFUHVQdVB1UHVQdVB1UKVQdEQgEgVQdVCds8gBBVUFUHXwcB2UMAru1AyHAhAc8LABzLPxrMcRWwjhFQNct/y3/0AMlQAszJ7VTtUAGjUJXMF8sHFcv/jhBwzwsAVRFbVSBeEFUCVQPZIwHhcc8LAANQA84BMFUgXhBVAlUD2QCW7UDtRNDTAAHyf9M/1NTTB9P/jhDV03/Tf/QE0QbtUFUBMFUDAdMAn3BwVQIwVUNVCFUVVRcB2SIB4fpAAXFVAjBVQ1UIVRVVFwHZ",
        code: "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",
        codeHash: "b8cc7c4c5e760e80b527808c93d6b0163e293201b6c4ac30536ce9345575a21d",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(RootTokenContractAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_owner?: string /* optional(address) */,
        total_supply: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWalletCode(input: RootTokenContractSetWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractSetWalletCodeOutput>> {
        return await runHelper(this, "setWalletCode", input, options);
    }

    async setWalletCode(input: RootTokenContractSetWalletCodeInput): Promise<RunLocalHelperResult<RootTokenContractSetWalletCodeOutput>> {
        return await runLocalHelper(this, "setWalletCode", input);
    }

    async runDeployWallet(input: RootTokenContractDeployWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractDeployWalletOutput>> {
        return await runHelper(this, "deployWallet", input, options);
    }

    async deployWallet(input: RootTokenContractDeployWalletInput): Promise<RunLocalHelperResult<RootTokenContractDeployWalletOutput>> {
        return await runLocalHelper(this, "deployWallet", input);
    }

    async runDeployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractDeployEmptyWalletOutput>> {
        return await runHelper(this, "deployEmptyWallet", input, options);
    }

    async deployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput): Promise<RunLocalHelperResult<RootTokenContractDeployEmptyWalletOutput>> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runGrant(input: RootTokenContractGrantInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "grant", input, options);
    }

    async grant(input: RootTokenContractGrantInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "grant", input);
    }

    async runMint(input: RootTokenContractMintInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractMintOutput>> {
        return await runHelper(this, "mint", input, options);
    }

    async mint(input: RootTokenContractMintInput): Promise<RunLocalHelperResult<RootTokenContractMintOutput>> {
        return await runLocalHelper(this, "mint", input);
    }

    async runRequestTotalGranted(input: RootTokenContractRequestTotalGrantedInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractRequestTotalGrantedOutput>> {
        return await runHelper(this, "requestTotalGranted", input, options);
    }

    async requestTotalGranted(input: RootTokenContractRequestTotalGrantedInput): Promise<RunLocalHelperResult<RootTokenContractRequestTotalGrantedOutput>> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runGetName(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetNameOutput>> {
        return await runHelper(this, "getName", {}, options);
    }

    async getName(): Promise<RunLocalHelperResult<RootTokenContractGetNameOutput>> {
        return await runLocalHelper(this, "getName", {});
    }

    async runGetSymbol(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetSymbolOutput>> {
        return await runHelper(this, "getSymbol", {}, options);
    }

    async getSymbol(): Promise<RunLocalHelperResult<RootTokenContractGetSymbolOutput>> {
        return await runLocalHelper(this, "getSymbol", {});
    }

    async runGetDecimals(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetDecimalsOutput>> {
        return await runHelper(this, "getDecimals", {}, options);
    }

    async getDecimals(): Promise<RunLocalHelperResult<RootTokenContractGetDecimalsOutput>> {
        return await runLocalHelper(this, "getDecimals", {});
    }

    async runGetRootKey(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetRootKeyOutput>> {
        return await runHelper(this, "getRootKey", {}, options);
    }

    async getRootKey(): Promise<RunLocalHelperResult<RootTokenContractGetRootKeyOutput>> {
        return await runLocalHelper(this, "getRootKey", {});
    }

    async runGetRootOwner(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetRootOwnerOutput>> {
        return await runHelper(this, "getRootOwner", {}, options);
    }

    async getRootOwner(): Promise<RunLocalHelperResult<RootTokenContractGetRootOwnerOutput>> {
        return await runLocalHelper(this, "getRootOwner", {});
    }

    async runGetTotalSupply(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetTotalSupplyOutput>> {
        return await runHelper(this, "getTotalSupply", {}, options);
    }

    async getTotalSupply(): Promise<RunLocalHelperResult<RootTokenContractGetTotalSupplyOutput>> {
        return await runLocalHelper(this, "getTotalSupply", {});
    }

    async runGetTotalGranted(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetTotalGrantedOutput>> {
        return await runHelper(this, "getTotalGranted", {}, options);
    }

    async getTotalGranted(): Promise<RunLocalHelperResult<RootTokenContractGetTotalGrantedOutput>> {
        return await runLocalHelper(this, "getTotalGranted", {});
    }

    async runHasWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractHasWalletCodeOutput>> {
        return await runHelper(this, "hasWalletCode", {}, options);
    }

    async hasWalletCode(): Promise<RunLocalHelperResult<RootTokenContractHasWalletCodeOutput>> {
        return await runLocalHelper(this, "hasWalletCode", {});
    }

    async runGetWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetWalletCodeOutput>> {
        return await runHelper(this, "getWalletCode", {}, options);
    }

    async getWalletCode(): Promise<RunLocalHelperResult<RootTokenContractGetWalletCodeOutput>> {
        return await runLocalHelper(this, "getWalletCode", {});
    }

    async runGetWalletAddress(input: RootTokenContractGetWalletAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetWalletAddressOutput>> {
        return await runHelper(this, "getWalletAddress", input, options);
    }

    async getWalletAddress(input: RootTokenContractGetWalletAddressInput): Promise<RunLocalHelperResult<RootTokenContractGetWalletAddressOutput>> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetWalletCodeHash(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetWalletCodeHashOutput>> {
        return await runHelper(this, "getWalletCodeHash", {}, options);
    }

    async getWalletCodeHash(): Promise<RunLocalHelperResult<RootTokenContractGetWalletCodeHashOutput>> {
        return await runLocalHelper(this, "getWalletCodeHash", {});
    }

}

