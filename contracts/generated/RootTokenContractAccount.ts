
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
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_owner","type":"optional(address)"},{"name":"total_supply","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWalletCode","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xb"},{"name":"deployWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xc"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xd"},{"name":"grant","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"dest","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"mint","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xf"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x10"},{"name":"getName","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x11"},{"name":"getSymbol","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x12"},{"name":"getDecimals","inputs":[],"outputs":[{"name":"value0","type":"uint8"}],"id":"0x13"},{"name":"getRootKey","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x14"},{"name":"getRootOwner","inputs":[],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x15"},{"name":"getTotalSupply","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"},{"name":"getTotalGranted","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"},{"name":"hasWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x18"},{"name":"getWalletCode","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0x19"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getWalletCodeHash","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_owner_","type":"optional(address)"},{"name":"total_supply_","type":"uint128"},{"name":"total_granted_","type":"uint128"},{"name":"wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECRgEAFUgAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBICkEATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkFAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QYEUG3tQAfDAAPTP9Mf0x+VAe1Q2zAiwRSOgOEiwQ+OgOEiwQyOgOEiwQsdGAwHApaOgOECwAryqQbyqASj8uBEWwf5AUCD+RDyqO1E0NMAMPK++ADU1NMH1dP/cHD4ZI6AAtMAnXAkcFUDAVUDVQRVE9kiAeH6QAFxJdkJCAFcAtN/0VMmsfLgagLDAHBwAVULVQtVC1UKVQZVBlUHVQdVD9s8elVQVShfCVUB2UQD0AfyqAWj8uBEWwj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rwpcPhkbgvTH9QwDPLgbDBSxrry4GRxE7D4ACQoKCgvKCYoKoARYds8KPkARUQKAv6C8OD4AiJCNn9ONMjSLOYOHFDNQuWSuZ60XdKW6lHaYjoOuvgP+ADy4Gso12XADvLga4ARYdDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAXEs8LIHESzwthAckBzMlw+wBVA1UGVQZVBlUJVQdVBVUGVQdVCNs8RAsAFIALVRFVJF8FAdkDviLBDo6A4QLADPKpBvKoBKPy4EQwCPkBVBCU+RDyqNs8KVYRvgrDAFAKsPJ8+COBA+iogggbd0CgVhABuSDyvAvTH9Vw+GTT/46AAdMAmXBwJFURAVUR2SIB4fpAcSTZFEUNAU5wgBNhgBhhVQHjBALTf9XTf46AAdMAmXBxJFURAVUR2SIB4dRwJNkOAvAB0QXRVhZuJ8AAAfLQbSZWEKBWESG58tBlUY2x8uBqgBFh8tBoVhiAE2G68uBk+ABwKVYWVhZWFlYcVhdVBVYXgBdhVh3bPPgP+Cj4ACDTASHBA5gwwAPy0GPyNOEBwALytI6AAdMAlSAjcFnZIgHhINMEAdcYJNlEDwGqA8AAyHAhAc8LAHAhAc8LP1YcAcxWGwHMU4LOgBZhAcv/AVYazwsHcM8LfwfSBzBWH1UHy/+OgJ0kVQcwIVW4gBVhVYzZLAHgcSYBzwsAgBVhAc4h2RAByILw4PgCIkI2f040yNIs5g4cUM1C5ZK5nrRd0pbqUdpiOg7PC/+ADs8LDxPKB8lQA8xxFM8LAVYcAcxxzwsAA8lQAszJUgPMcM8LAMn5AI6AJSHgB9MEAdcYATAnAVVRVQdVB9kRAvwwgBVh+GR0FM8LAgbSBzBQBsoHyHAhAc8LAFBCy/+CEEOE8pgkAc8LH1UPAct/Acl2IwHPCwJwFs8LAcnQUAXOBNBxE88LAVCZzi0By39WGVUIzI6AD6NSNs5QDvoCgB9hAfQAcPoCcPoCc88LYXEezwsAE8xwzwsAyVAMzHETEgBAzwsAmXESzwsAGMwr2SMB4XASzwsAVQEwK1VhXlBVFtkBzslQB8zJcPsAXwiAFGHQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs6ADIAME88LHxPOcRPPC2ECyVACzMlw+wBwVQNVC1ULVQtVDlUMVQVVDFUJVQ3bPFUwVRVVGF8IAdlEAsAH8qgFo/LgRFsI+QFUEJT5EPKo2zwpVhG+CsMAUAqw8nz4I4ED6KiCCBt3QKBWEAG5cCGAEmFVAeMEAfK8CtMf1fpA03/Tf3D4ZI6AAdMAmXBxJFURAVUR2SIB4dRwJNlFFQP6AdFTWaBTsLny0GUM8tBoVhRVDbry4GT4AHBWElYRVhFWEVYYVhJVBVYRgBFhVhjbPPgP+ADIghBDhPKYIQHPCx9wIgHPCwH4KHYUzwsDAclQkst/joAEowMC0FAJzhnOUAb6AoAXYQH0AHD6AnD6AlB2znEWzwthcBbPC39EFxYAJpdxzwsAzCXZJQHhcM8LAAEwJdkBVslQBMzJcPsAcFUNVQxVDFUMVQ9VDVUFVQxVDVUO2zyADlVQVRdVKl8LAdlEBOQiwRKOgOEiwRGOgOECwA/yqQbyqASj8uBEMAj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GQL0x/V03/RBfLQaFtStbry4GT4AHAqKCgoLyhVBScrVhAbGkUZAsLbPPgPgBFh0NMBAcAC+ADIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs6AHxLPCyBxEs8LYVAyoALJAczJcPsAcFUIVQZVBlUGVQlVBlUFVQZVB1UI2zyAD1URVSRfBQHZREQBklUP0NMB2zxw+GRfCAPAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOA/pAMFADznHPC2GAEYARFM8LHxTMyVADzMlw+wABVZJVPV8PAdlFAqACwROOgOEwDtDTAds8cPhkXwcEwALIAfKwcyEBzwsBcCIBzwsBydABzgT6QDBQBM6AEnESzwthgBIVzwsfFczJUAPMyXD7AFVyVTtfDlUB2RxFAZYwDtDTAds8cPhkXwYFwALIAfKwcyEBzwsBcCIBzwsBydABzgX6QDBQBc6AE3ESzwthgBMWzwsfFssHyVAEzMlw+wBVc1U8Xw9VAdlFBLwiwRiOgOEiwRaOgOECwRWOgOEwDtDTAds8cPhkXwUGwALIAfKwcyEBzwsBcCIBzwsBydABzgb6QDBQBs6AFHESzwthgBQXzwsfF8v/yVAFzMlw+wBVdFU9gBBlVQHZIR8eRQHKMA7Q0wHbPHD4ZF8DCMACyAHysHMhAc8LAXAiAc8LAcnQAc4I+kAwUAjOcc8LYY4VyQHMyXD7AIAVVeB0gBFjgBNlVQHZcRqwgBUZzwsfmgJxE88LABLOKNkpAeBwzwsAVQEwKNlFAqYCwReOgOEwDtDTAds8cPhkWwnAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOCfpAMFAJzoAWcRLPC2GAFhrPCx8ay3/JUAjMyXD7AFV3dIARY4ATZVUB2SBFAZowDtDTAds8cPhkMArAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOCvpAMFAKzoAXcRLPC2GAFxvPCx8by3/JUAnMyXD7AFV4dIASY4AUZVUB2UUDviLBGo6A4QLBGY6A4TAO0NMB2zxw+GQLwALIAfKwcyEBzwsBcCIBzwsBydABzgv6QDBQC86AGHESzwthgBgczwsfDG7AAHGwHM8LAMlQCszJcPsAVXl0gBNjgBVlVQHZIyJFAZYwDtDTAds8cPhkC8ACyAHysHMhAc8LAXAiAc8LAcnQAc4L+kAwUAvOgBlxEs8LYYAZHM8LHxzMyVAKzMlw+wBVeXSAE2OAFWVVAdlFA0wiwRuOgOEB1dP/2zxw+GSOgAvTAJlwcS5VEQFVEdkiAeH6QHAu2ShFJAFg+CgC0QEg0wEhwQOYMMAD8tBj8jThAcAC8rSOgAHTAJUgI3BZ2SIB4SDTBAHXGCTZJQGwA8AAyHAhAc8LAHAhAc8LP4AUYQHMgBNhAcyAEmEBywdRgs6AFGEBy/9wGc8LfwbSB46AC6OAE2FVCMv/mnEmAc8LAB3OK9kiAeEkVQEwK1UBVZJVDFUb2SYBmILw4PgCIkI2f040yNIs5g4cUM1C5ZK5nrRd0pbqUdpiOg7PC/+ADs8LDxPKB8lQCcxxE88LARzMcc8LAAHJUAnMyVAIzHDPCwDJ+QAnAOCOWjCAIGHQ0wEBwALysHMpAc8LAXAqAc8LAcnQAc4B+kAwAc6AGnESzwthgBoqAc8LH3QbzwsCBtIHMFAGygcSy//J0FAIzslQA8zJcPsAVYVVj3SAGmOAG2UB2SIh4ATTBAHXGAEwJAFVIVUEVQTZAaoCwBvyqTAO0NMB2zxw+GQLwALIAfKwcyEBzwsBcCIBzwsBydABzgv6QDBQC86AG3ESzwthgBsczwsfDPkAHM8L/8lQCszJcPsAVXl0gBNjgBVlVQHZRQPG3wHQ0wAB8nAg1gGW7UDtUNswAdMAjoABMCEB4TAD0h8BwP/4APLgZtMfghBDhPKYErry4GbTH9N/2zxTG7ny0GcLoXETsFUHVQdVB1UHVQdVB1UFVQZVB1UJ2zxwVTBfBAHZKkVEA9wwI9cNH2+jmHBZVSNfBQHZ4TAk10nysJdwVSFfAwHZ4W0E0x+YcFlVI18FAdkiwQ2OgOEiwQuOgOECwAoi4e1E0NMAMPK++ADU1NMH0/9wcPhkjoAC0wCdcCRwVQMBVQNVBFUT2SIB4fpAAXEl2TYsKwFaUwax8uBqAtN/MALDAHBwAVUKVQpVClUKVQZVBlUHVQdVD9s8elUwVRVfBgHZRAP6MAHBDI6A4dMf2zxw+GRuJAvUMAHy4Gwj8uBpDtMA0wDTAPpAUeHHBQ76QPoAMA/y4GQwVhH5AILw4PgCIkI2f040yNIs5g4cUM1C5ZK5nrRd0pbqUdpiOg66+ADy4GtWEddlwA7y4GvtR28QbxdvEHEYsFB+oXL7Ash2IQEuRS0BsM8LA3AiAc8LAcnQAc4XznD6AoASYQH0AFDmyx9wFvoCcRbPCwBwFvoCBclxFs8LYRXMyYEAgPsAMFUHVQdVB1UHVQdVB1UIVQdVB1UM2zyAC1lVA18DAdlEAkzTH9P/2zxwcPhkjoAM0wCecC5wVQMBVRIBVQRVBNkiAeH6QHEv2UUvATgB1dN/03+OgAHTAJlwcSRVEQFVEdkiAeHUcCTZMAHqAdErbijAAAHy0G1SbqBT4Lny0GVVB1YXsfLgai7y4GkvgBth0wDTANMA+kBRUccF8uBk7UdvEPgo+AAg0wEDCPpA+gAwCW8XbxAZonL7AiDBA5fAA/LQY/I04cAC8rSOgALTAJUgJHBZ2SIB4SDTBAHXGCXZMQGsA8AAyHAhAc8LAHAhAc8LP1YhAcxWIAHMUXLOgCRhAcv/Vh9VB8sHcM8LfwfSBzBWHlUHy/+OgJ0kVQcwIVXYgBdhVY7ZVhwB4HEmAc8LAIAYYQHOIdkyAciC8OD4AiJCNn9ONMjSLOYOHFDNQuWSuZ60XdKW6lHaYjoOzwv/gA7PCw8TygfJUAPMcRTPCwFWGAHMcc8LAAPJUALMyVIDzHDPCwDJ+QCOgCUh4AfTBAHXGAEwJwFVUVUHVQfZMwL+MFYi+GR0FM8LAgbSBzBQBsoHyHAhAc8LAFBCy/+CEEOE8pgkAc8LH4AUYQHLfwHJdiMBzwsCcBbPCwHJ0FAFzgTQcRPPCwFSks5WEwHLf1YXVQHMjoBVD6NSR86AFGH6AlYlAfQAcPoCcPoCc88LYXETzwsAFcxwzwsAyQHMcTU0AEjPCwCZcRLPCwAfzCLZJQHhcBLPCwBVAzAjVQFVlFUOVR1VHdkB7MlQDszJcPsAyHYhAc8LA3AiAc8LAYAgYVUCyx9xgBlhAbACydBQA84ZznD6AoAgYQH0AHD6AlDuznAe+gINyXEezwthHczJgQCA+wBfBYAUYYAUYYAUYYAUYYAUYYAUYVUFgBRhVQuAE2HbPIAMVbBVDV8NAdlEBGYiwQ+OgOEwAcEOjoDh0x/T/9s8cHD4ZI6ADNMAnnAucFUDAVUSAVUEVQTZIgHh+kBxL9lAPEU3AcglAtXTf9EDbiLAAAHy0G1VAVYSsfLgau1HbxD4KCDTAQNvF4AZYdMA0wDTAPpA+kD6ADAGbxAWonL7AiXBA5lfBcAD8tBj8jThBcAC8rSOgAfTAJUgKXBZ2SIB4SDTBAHXGCrZOAGsA8AAyHAhAc8LAHAhAc8LP1YcAcxWGwHMUcLOgB9hAcv/VhpVDMsHcM8LfwfSBzBWGVUHy/+OgJ0kVQcwIVWYgBNhVYrZVhAB4HEmAc8LAIATYQHOIdk5AcyC8OD4AiJCNn9ONMjSLOYOHFDNQuWSuZ60XdKW6lHaYjoOzwv/gA7PCw8TygfJUAPMcSQBzwsBVhQBzHHPCwAByVADzMlQAsxwzwsAySD5AI6AJiHgCNMEAdcYATAoAVVhVQhVCNk6Af50JgHPCwJ2Fs8LAnAnAc8LAcnQCtIHMFCqzlCVygfL/8lwFc8LHwTQUgTOBMlxgBdhAbBVBIARYfoCViAB9ABw+gJw+gJzzwthE8xxzwsAzMlw+wDIgBthIcsfFM52JAHPCwNwFc8LAcnQAckEzhvOcPoCgBxhAfQAcPoCcPoCOwFccc8LYRLMyYEAgPsAXwhVDVUNVQ1VDVUNVQ1VBVUNVQ1VDds8gA1VUFUHXwcB2UQCSNMf+kDTf9N/2zwkcPhkjoAM0wCZcHEvVREBVRHZIgHh1HAv2UU9AvpWEVUGoFNwufLQZSjy4GmAFmHTANMA0wD6QFGhxwXy4GTtR28QbxcK+kD4APoAMAtvEI6ACKMMoXL7Ash2IQHPCwNwIgHPCwHJ0AHOgBlhAc5w+gKAHGEB9ACCEEOE8pgSzwsfcBL6AgGAGGHPC39wEvoCUDPOcRPPC2FwEz8+AC7PC3+Ycc8LABnMJtksAeFwzwsAATAm2QFkyQHMyYEAgPsAcRywgBFhgBFhgBFhgBFhgBFhgBFhVQVVD1UJVQ/bPIAOVaBVDF8MAdlEA/oiwRCOgOEw0x/bPHD4ZArTfzAj8uBpJFUP0wDTANMA+kBRUccF8uBk7UdvEG8XBfpA+AD6ADAGbxBQeaBxGrBQhaFy+wLIdiEBzwsDcCIBzwsBydABzhjOcPoCgBRhAfQAVQ9VB8sfcBL6AnESzwsAcBL6AgHJcRLPC2HMyUJFQQFMgQCA+wBfA1UIVQhVCFUIVQhVCFUFVQhVCFUJ2zyAD1lVA18DAdlEAvwCwBAi4QTTANMA7UdvEG8XAdMA+kD6QNs8cPhkCvoAMA5vEIAUYdMfcRawVQFVD6Fy+wLIdiEBzwsDcCIBzwsBydABzh/OcPoCgBVhAfQAUC7LH3Ae+gJSLst/cB76Ag3JcR7PC2EdzMmBAID7AFUHVQdVB1UHVQdVB1UKVQdFQwEgVQdVCds8gBBVUFUHXwcB2UQAru1AyHAhAc8LABzLPxrMcRWwjhFQNct/y3/0AMlQAszJ7VTtUAGjUJXMF8sHFcv/jhBwzwsAVRFbVSBeEFUCVQPZIwHhcc8LAANQA84BMFUgXhBVAlUD2QCW7UDtRNDTAAHyf9M/1NTTB9P/jhDV03/Tf/QE0QbtUFUBMFUDAdMAn3BwVQIwVUNVCFUVVRcB2SIB4fpAAXFVAjBVQ1UIVRVVFwHZ",
        codeHash: "bf99badca772dfa46da4397d90aa1f0def9e5f47adf0203d35262f9488790ad8",
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

