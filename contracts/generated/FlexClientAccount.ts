
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
    ResultOfQueryTransactionTree,
} from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type FlexClientDeployPriceXchgInput = {
    sell: boolean /* bool */,
    immediate_client: boolean /* bool */,
    post_order: boolean /* bool */,
    price_num: string | number | bigint /* uint128 */,
    amount: string | number | bigint /* uint128 */,
    lend_amount: string | number | bigint /* uint128 */,
    lend_finish_time: number /* uint32 */,
    evers: string | number | bigint /* uint128 */,
    unsalted_price_code: string /* cell */,
    price_salt: string /* cell */,
    my_tip3_addr: string /* address */,
    user_id: string | number | bigint /* uint256 */,
    order_id: string | number | bigint /* uint256 */,
};

export type FlexClientDeployPriceXchgOutput = {
    value0: string /* address */,
};

export type FlexClientCancelXchgOrderInput = {
    sell: boolean /* bool */,
    price_num: string | number | bigint /* uint128 */,
    value: string | number | bigint /* uint128 */,
    salted_price_code: string /* cell */,
    user_id?: string | number | bigint /* optional(uint256) */,
    order_id?: string | number | bigint /* optional(uint256) */,
};

export type FlexClientTransferInput = {
    dest: string /* address */,
    value: string | number | bigint /* uint128 */,
    bounce: boolean /* bool */,
};

export type FlexClientTransferTokensInput = {
    src: string /* address */,
    dst: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientDeployEmptyFlexWalletInput = {
    pubkey: string | number | bigint /* uint256 */,
    evers_to_wallet: string | number | bigint /* uint128 */,
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    trader: string | number | bigint /* uint256 */,
    flex_wallet_code: string /* cell */,
};

export type FlexClientDeployEmptyFlexWalletOutput = {
    value0: string /* address */,
};

export type FlexClientDeployIndexInput = {
    user_id: string | number | bigint /* uint256 */,
    lend_pubkey: string | number | bigint /* uint256 */,
    name: string /* string */,
    evers_all: string | number | bigint /* uint128 */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
    refill_wallet: string | number | bigint /* uint128 */,
    min_refill: string | number | bigint /* uint128 */,
};

export type FlexClientReBindWalletsInput = {
    user_id: string | number | bigint /* uint256 */,
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
    wallets: string[] /* address[] */,
    evers_relend_call: string | number | bigint /* uint128 */,
    evers_each_wallet_call: string | number | bigint /* uint128 */,
    evers_to_remove: string | number | bigint /* uint128 */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
};

export type FlexClientDestroyIndexInput = {
    user_id: string | number | bigint /* uint256 */,
    evers: string | number | bigint /* uint128 */,
};

export type FlexClientBurnWalletInput = {
    evers_value: string | number | bigint /* uint128 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    my_tip3_addr: string /* address */,
    notify?: string /* optional(cell) */,
};

export type FlexClientBurnThemAllInput = {
    burn_ev: string | number | bigint /* uint128 */,
    burns: {
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
        wallet: string /* address */,
        notify?: string /* optional(cell) */,
    }[] /* tuple[] */,
};

export type FlexClientCancelThemAllInput = {
    cancel_ev: string | number | bigint /* uint128 */,
    prices: string[] /* address[] */,
};

export type FlexClientUnwrapWalletInput = {
    evers_value: string | number | bigint /* uint128 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    my_tip3_addr: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type FlexClientBindWalletInput = {
    evers: string | number | bigint /* uint128 */,
    my_tip3_addr: string /* address */,
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
};

export type FlexClientOnTip3TransferInput = {
    _answer_id: number /* uint32 */,
    balance: string | number | bigint /* uint128 */,
    new_tokens: string | number | bigint /* uint128 */,
    evers_balance: string | number | bigint /* uint128 */,
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    sender?: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* optional(tuple) */,
    receiver: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    payload: string /* cell */,
    answer_addr: string /* address */,
};

export type FlexClientUpgradeInput = {
    request_evers: string | number | bigint /* uint128 */,
    user_data_cfg: string /* address */,
};

export type FlexClientGetPayloadForDeployInternalWalletInput = {
    owner_pubkey: string | number | bigint /* uint256 */,
    owner_addr?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientGetPayloadForDeployInternalWalletOutput = {
    value0: string /* cell */,
};

export type FlexClientGetPayloadForEverReTransferArgsInput = {
    wallet_deploy_evers: string | number | bigint /* uint128 */,
    wallet_keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientGetPayloadForEverReTransferArgsOutput = {
    value0: string /* cell */,
};

export type FlexClientGetPriceXchgAddressInput = {
    price_num: string | number | bigint /* uint128 */,
    salted_price_code: string /* cell */,
};

export type FlexClientGetPriceXchgAddressOutput = {
    value0: string /* address */,
};

export type FlexClientGetUserIdIndexInput = {
    user_id: string | number | bigint /* uint256 */,
};

export type FlexClientGetUserIdIndexOutput = {
    value0: string /* address */,
};

export type FlexClientGetDetailsOutput = {
    owner: string /* uint256 */,
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    ex_triplet?: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* optional(tuple) */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};


export class FlexClientAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"deployPriceXchg","inputs":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"lend_amount","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"evers","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"price_salt","type":"cell"},{"name":"my_tip3_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xa"},{"name":"cancelXchgOrder","inputs":[{"name":"sell","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"value","type":"uint128"},{"name":"salted_price_code","type":"cell"},{"name":"user_id","type":"optional(uint256)"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0xb"},{"name":"transfer","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[],"id":"0xc"},{"name":"transferTokens","inputs":[{"name":"src","type":"address"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"dst","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"deployEmptyFlexWallet","inputs":[{"name":"pubkey","type":"uint256"},{"name":"evers_to_wallet","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"name":"trader","type":"uint256"},{"name":"flex_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xe"},{"name":"deployIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"lend_pubkey","type":"uint256"},{"name":"name","type":"string"},{"name":"evers_all","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"},{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"reBindWallets","inputs":[{"name":"user_id","type":"uint256"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"},{"name":"wallets","type":"address[]"},{"name":"evers_relend_call","type":"uint128"},{"name":"evers_each_wallet_call","type":"uint128"},{"name":"evers_to_remove","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"}],"outputs":[],"id":"0x10"},{"name":"destroyIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x11"},{"name":"burnWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0x12"},{"name":"burnThemAll","inputs":[{"name":"burn_ev","type":"uint128"},{"components":[{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"wallet","type":"address"},{"name":"notify","type":"optional(cell)"}],"name":"burns","type":"tuple[]"}],"outputs":[],"id":"0x13"},{"name":"continueBurnThemAll","inputs":[],"outputs":[]},{"name":"cancelThemAll","inputs":[{"name":"cancel_ev","type":"uint128"},{"name":"prices","type":"address[]"}],"outputs":[],"id":"0x14"},{"name":"continueCancelThemAll","inputs":[],"outputs":[]},{"name":"unwrapWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"},{"name":"tokens","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0x15"},{"name":"bindWallet","inputs":[{"name":"evers","type":"uint128"},{"name":"my_tip3_addr","type":"address"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x16"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"upgrade","inputs":[{"name":"request_evers","type":"uint128"},{"name":"user_data_cfg","type":"address"}],"outputs":[],"id":"0x17"},{"name":"getPayloadForDeployInternalWallet","inputs":[{"name":"owner_pubkey","type":"uint256"},{"name":"owner_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x18"},{"name":"getPayloadForEverReTransferArgs","inputs":[{"name":"wallet_deploy_evers","type":"uint128"},{"name":"wallet_keep_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x19"},{"name":"getPriceXchgAddress","inputs":[{"name":"price_num","type":"uint128"},{"name":"salted_price_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getUserIdIndex","inputs":[{"name":"user_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1b"},{"name":"getDetails","inputs":[],"outputs":[{"name":"owner","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet","type":"optional(tuple)"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"id":"0x1c"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"owner_","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet_","type":"tuple"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"packet_burning_","type":"bool"},{"name":"burn_ev_","type":"uint128"},{"components":[{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"wallet","type":"address"},{"name":"notify","type":"optional(cell)"}],"name":"burns_","type":"tuple[]"},{"name":"packet_canceling_","type":"bool"},{"name":"cancel_ev_","type":"uint128"},{"name":"prices_","type":"address[]"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECkwEALVEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QcEAQr0pCD0oQUCpKAAAAAB2zxxsG0DcF+AgBhhgBhhgBhhgBhhgBhhgBhhgBhhVQ5VDlUOgBVhgBVhgBJhgBRhgBRhgBRhgBRhgBRhgBVhgBVhgBVhgBVhI9s88gAGjQC80NMA7UAC8n/TP9Mf9ATT/9Mf0x/TH9Mf0x/TH/QE9ATVltED7VBVAQHTAI4WcHBwVQNVBVtVtIARYVUdAVUOVR8B2SIB4fpA0/9xVQNVBVtVtIARYVUeVR4BgBFh2QIBIGUIATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkJAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QoEUG3tQAfDAAPTP9Mf0x+VAe1Q2zAiwROOgOEiwQ6OgOEiwQyOgOEiwQtFHxgLA/6OgOECwAryqQbyqASj8uBEMAj5AVQQlPkQ8qjbPFYWVh6+gBdhwwCwCwvyfPgjgQPoqIIIG3dAoFYdAblwIYAfYVUB4wQB8ryAGGHTANMA0wDVAsMAA8MABMMAcbBxFbBxFLAC03/Tf3D4ZFYfgBxhugHTf9Mf03/U1NX6QNP/EZIMAvzV0//RAdED0Qjy4GQp8uBlcYAYYQGw+AAvViRWJFYoViVWJVYlViVWJVYlViVWJVYlViUuViZWJlYmViZWJlYmViZWJts8+A/IcCEBzwsB+Cj4RIIQgAAAACGxghD/////Erwp0ATJAyTXSnYnAc8LA3BEBeMEAsACBNBWESeNDQHuy38czCoBzIAVYQHLAIAUYQHLAIAQJwHPCx9QxM5Q9sv/Assfcc8LAC0BznDPC38cy38ayx9Q98sAG8t/KQHOUDjL/8lQB8zJUAPMUFfOBslQYvoCViMB9ABw+gJw+gJxzwthzMlw+wDy4EXIUWbOzMkB0wEhwQMOAUSYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZDwL+cBjPCwCAJWHQ0wEBwALysFIXzwt/cM8L/3DPCx9WIwH0AHDPCx9xEs8LARTMcc8LAIAiYVUD9AAC0gcwBfpAegTJUAPMcM8LAMn5AHpVAQFVBlUC2zxw+wAwVQSAGWGAGWGAG2GAGmGAGmGAGmGAGmGAGmGAGmGAGmGAGmGAGmMQAVRhgBphVQ+AGmGAGmGAGmGAGmGAGmGAGmGAGmGAGmHbPFUgVRRVF18HAdmNArQH8qgFo/LgRFsI+QFUEJT5EPKo2zxWFlYevoAXYcMAsPJ8+COBA+iogggbd0CgVh0BuSDyvIAXYdMA1dN/03/UcPhkjoAB0wCZcHAkVREBVRHZIgHh0/9xJNmSEgFOgBVhcFULgCdhVQHjBAvDAI6ABNMAmXFwJwFVEVUC2SIB4dP/cCfZEwLmAdFWJYAiYbpxFbAGwAAE8uBkcYAYYQGw+AAvViNWI1YnViRWJFYkViRWJFYkViRWJFYRViUuViZWJlYmViZWJlYmViZWJts8+Cj4D9MBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2Y0UAfzIcCEBzwsBcCIBzwsAgBNhIct/cM8L/3EiAc8LAXASzwsfA8mBAMslAc8LHx/LAHYTzwsCDtBWL1UD9ACAE2FVAsx0Fc8LAgbSBzBSB8oHcRXPCwBwEs8LH1AuzlYtVQ30AMlQAsxwzwsAyfkAUTPPC//J0AHOVhD6AoArYQEVAUr0AHD6AnD6AnHPC2GOgJlwE88LAAEwIdksAeBxE88LAB7L/yHZFgEujoAIo5lxzwsAGMv/JtnhcM8LAAEwJtkXAsDJVQJVAVUOVQLbPHD7AFtVCoAeYYAeYYAgYYAfYYAfYYAfYYAfYYAfYYAfYYAfYYAfYYARYYAfYVUNgB9hgB9hgB9hgB9hgB9hgB9hgB9hgB9h2zyAC1WAVRpVLV8OAdmPjQP8AsENjoDhBvKoBKPy4EQwCPkBVBCU+RDyqNs8VhZWHr6AF2HDALALC/J8+COBA+iogggbd0CgVh0BuXAhgB9hVQHjBAHyvHD4ZIAYYdX6QNN/0wDRVhyAGWG68uBkcR6w+AAkVhpWGlYeVhtWG1YbVhtWG1YbVhtWG1YbVhsuG5IZAv5WG1YbVhtWG1YbVhtWG1Yb2zwNwwBxsPgPyHEhAc8LARLLAHDPCwBwEs8LAcnQAc4SzgH6AoAdYQH0AHD6AnD6AnDPC2HJcPsAMIAVYYAVYYAXYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWjRoBMmGAFmGAFmGAFmGAFmHbPIAMVRFVJF8FAdmNAt4G8qgEo/LgRDAI+QFUEJT5EPKo2zxWFlYevoAXYcMAsAsL8nz4I4ED6KiCCBt3QKBWHQG5cHAigCBhVQHjBALyvIAZYdX6QNP/1XD4ZI6AAdMAjhNwI3BVCFUEVTVVBVUXAVUJVQnZIgHh+kBxJNmSHAL+AdN/03/Tf9EH0VYjgCBhuvLgZHGAFWEBsPgALFYhViFWJVYiViJWIlYiViJWIlYiViJWIlYiLlYjViNWI1YjViNWI1YjViPbPPgP+ETIcCEBzwsAghCAAAAAI7GCEP////8UvCLJ+ChwQwbjBIALJAHPCx92JAHPCwIGAs8LH40dAYhxzwsAznAkAc8LAcnQDs8L/1DUzh3OUAT6AoAoYQH0AHD6AnD6AnHPC2GOgCYh4XElAc8LABjOJwFVOFUMVVZVDFUM2R4B8jBQS8t/cM8LfxjLf3HPCwBxEs8LgBjMyVAHzMlQBszJUAbMyXD7AFtVBIAZYYAZYYAbYYAaYYAaYYAaYYAaYYAaYYAaYYAaYYAaYYAaYYAaYVUNgBphgBphgBphgBphgBphgBphgBphgBph2zyADVUwVRVVKF8JAdmNBPwiwRCOgOECwQ+OgOEG8qgEo/LgRDAI+QFUEJT5EPKo2zxWFlYevoAXYcMAsCsB8nz4I4ED6KiCCBt3QKBWHgG5cCGAIGFVAeMEAfK8gBlh1dP/03/U1HD4ZNMHViCAHWG6AdP/1fpA0//U0QPRBPLgZHGAFWEBsPgAK1YhViEqJZIgAqpWJVYiViJWIlYiViJWIlYiViJWGFYiLlYjViNWI1YjViNWI1YjViPbPPgo+A8g0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZjSEB/shwIQHPCwBwIgHPCwEp+QAByXAjAc8LP1Eky/9xJAHPCwEs12UD0IASYVUEzIAnJwHPCyBxKAHPCwBQ9Mx2JwHPCwJR6M5QZcsPCdIHMFIKygfJdBjPCwJQdsyAE2FVA8v/gBFhVQbMUDzOUnbKB3EVzwsAAclRk85wzwsgVi0iAeYB9AAZzMkBzMlQ2csHcM8LfxrL/xfMyVAEzHDPCwDJIPkAUYjPC//J0FAGzlAK+gKAJmEB9ABw+gJw+gJzzwthFMxxzwsAjoCOEXEWzwsAgBZhAc5WFQHL/yXZJAHgcBbPCwBVATAkgBNzY4AWYXOAFGPZIwP+cc8LAFB4y//JUAfMyVAFzIAkYdAByQHTAQHAAnAT+wDIMAHysPpAgA6ADlUCAVUIVQbbPHD7AFUGgBthgBthgB1hgBxhgBxhgBxhgBxhgBxhgBxhgBxhgBxhgBNhgBxhgBJhgBxhgBxhgBxhgBxhgBxhgBxhgBxhgBxh2zxVQGONJAAQVRZVGV8JAdkC/AbyqASj8uBEMAj5AVQQlPkQ8qjbPFYWVh6+gBdhwwCwCwvyfPgjgQPoqIIIG3dAoFYdAblwIYAfYVUB4wQB8ryAGGHV0//T/9TTf3D4ZNN/Vh+AHGG6AdN/1dN/0QHRAvLgZFYUbvLQZnGAEmEBsPgAKVYeVh5WIlYfVh9WH5ImAppWH1YfVh9WH1YfVh9WHy5WIFYgViBWIFYgViBWIFYg2zz4KPgPINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2Y0nAf4wVhfQINdKwALIAfLgRXohAc8LH1EhzlFRzlYbAczJUAXMC88L/xnMcCMBzwsAB88Lf3AjAc8LAQrJCsl0FM8LAgXPC392JwHPCwID0HEoAc8LAQrSBzBQusxQo85QWct/UHPKB3EXzwsAcBXPC0cYy/9wzwv/cM8LgHDPC3/JKAL+UAPMcM8LAMkg+QAVzwv/yQLJAtBQBc5QAvoCgCBhAfQAcPoCcPoCc88LYRLMcc8LAMzJcPsAMFUBgBZhgBZhgBhhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBdhVQ2AF2GAF2GAF2GAF2GAF2GAF2GAF2GAF2HbPIAPAY0pABBVElUlXwYB2QPEIsERjoDhB/KoBaPy4ERbCPkBVBCU+RDyqNs8VhZWHr6AF2HDALDyfPgjgQPoqIIIG3dAoFYdAbkg8ryAF2HV0//TAHD4ZNWOgAHTAJtwcHAlVRFVA1US2SIB4fpA0/9xJdk7kisBWIAVYXBVC4AnYVUB4wQD0wABwwAB1Y6AAdMAmXBwJFURAVUR2SIB4dP/cSTZLAPyAdMf9ARxGbAI03/Tf9N/Vi2AKmG6AdN/0QvRgBNh0fLgZHGAHmEBsPgALlYpVilWLVYqVipWKlYqVipWKlYqVipWGFYrLlYsVixWLFYsVixWLFYsVizbPCXBf/gP8uBpU2uwjoAgWQFVAeFWIG7y0Gb4KCDTASHBA40wLQFEmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2S4B/DBWI9Ag10rAAsgB8uBFURHOUUHOViYBzMlQBMyACyQBzwsfLQHL/wHJB88Lf3AkAc8LAHEhAc8LARjMAVUPzwt/dCUBzwsCdikBzwsCcBfPCwHJ0ATSBzBQRs5QU8oHBMlxEs8LAHAYzwtHgBlhAcv/cM8L/3DPC4Bwzwt/yS8AtlAHzHDPCwDJ+QATzwv/ydBQAs5QBvoCVi4B9ABw+gJw+gJxzwthE8zJcPsAIXBfIHKAFWMBgBZhVQ92gBFjgBZhgBJhVQ10gBNjgBJhgBZhgBNhcoAUY4AWYdkERo6AJyFwX3BVJ+GAHWHDAHGwgBFhwwCAGGHAAI6A4HGwjoDgOjYzMQH8jnOAICNWEFUB9A5vofLgQMhwIQHPCwB2IQHPCwJwIwHPCwHJ0AHOA/pAMFADzoATEs8LHywBywAFpFEf+gIhVhO5A8lxF88LAFY8VQH0AHD6AnD6AnHPC2FWHlUBzlYdAcv/VhkBywAWzMlQBczJcPsAKCLicCGAF2FzgBpjMgB4gBphcoAbY3KAG2OAGmGAGWGAGGFygBtjgBphgBxhgBthgBxhgBVhgBxhgBZhdIAZY4AaYXKAG2OAHGHZAYiOgHAhgBdhc4AaY4AaYXKAG2OAHGGAGWGAGGGAHGGAGGFygBtjgBphgBxhgBthgBxhcoAUY3OAGmOAGGF0gBljgBxh2TQB/oAgJVYQVQH0Dm+h8uBAyHYhAc8LA3AiAc8LAcnQAc4C+kAwUALOcSIBzwsAgBMTzwsfLAHLAFYUVQLL/wekUS/6AiJWE7kIyXETzwsAVjxVAfQAcPoCcPoCcc8LYVYeVQHOVh0By/9WGQHLABLMyQHMyXD7ACkiVQFVMlUGVRU1AALiAv5xsI6A4I5ugCAiVhBVAfQOb6Hy4EDIcCEBzwsAdiEBzwsCcCMBzwsBydABzoATE88LHy0BywAD+kAwUALOcBPPCwBWGAHLAAHJAczJUR76AgOkVhEhvFY7VQT0AHD6AnD6AnHPC2ETzMlw+wAmI1UBVRJVEuJwIYAXYYAaYYAYODcAdGFygBljcoAZY4AYYYAXYYAWYXKAGWOAGGGAGmGAGWGAGmGAE2FzgBhjgBZhc4AYY4AZYYAaYYAaYdkB/o5ygCAkVhBVAfQOb6Hy4EDIdiEBzwsDcCIBzwsBydABzoATIgHPCx8tAcsAcM8LAAP6QDABzlYYVQLLAHETzwsAVhQBy//JUALMyVEe+gIFpFYRIbxWO1UG9ABw+gJw+gJxzwthE8zJcPsAJyNVAVUyVRTicCGAF2GAGmGAGGE5AHhygBljgBphgBdhgBZhgBphgBZhcoAZY4AYYYAaYYAZYYAaYYATYXKAGWOAFWFygBljgBdhc4AYY4AaYdkBsl8KVQ2AKGGAKGGAKmGAKWGAKWGAKWGAKWGAKWGAKWGAKWGAKWGAGGGAKWFVDYApYYApYYApYYApYYApYYApYYApYYApYds8gBCAE2JygBVjdIAYY4AZZQHZjQP8AsESjoDhBvKoBKPy4EQwCPkBVBCU+RDyqNs8VhZWHr6AF2HDALALC/J8+COBA+iogggbd0CgVh0BuXAhgB9hVQHjBAHyvHD4ZIAYYdXT/9N/0VYbgBhhuvLgZHEdsPgAI1YZVhlWHVYaVhpWGlYaVhpWGlYaVhpWGlYaLlYaP5I8AoJWGlYaVhpWGlYaVhpWGts8L274D/LQZvgoINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2Y09Av4wVhLQINdKwALIAfLgRVERzlFBzlYVAczJUATMyYAMJAHPCx9wFc8LAHEhAc8LARLMBMkC0gdxFs8LAHATzwtHF8v/cM8L/3DPC4Bwzwt/yQHMcM8LAMn5AFUEAVUPVQLbPHD7AFtVAYAWYYAWYYAYYYAXYYAXYYAXYYAXYYAXjz4BbmGAF2GAF2GAF2GAF2GAF2FVDYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYds8gBEBVRJVNV8HAdmNAq4G8qgEo/LgRDAI+QFUEJT5EPKo2zxWFlYevoAXYcMAsPJ8+COBA+iogggbd0CgVh0BuSDyvIAYYdXTf3D4ZNP/joAB0wCZcHAkVREBVRHZIgHh+kBxJNmSQAFOgBNhcFUJgCVhVQHjBAPV+kCOgAHTAJlwcSRVEQFVEdkiAeHUcCTZQQL8AdEF0VYkgCFhuvLgZHGAF2EBsPgAKFYiViJWJlYjViNWI1YjViNWI1YjViNWElYkLlYlViVWJVYlViVWJVYlViXbPPgP+ESCEIAAAAAhsYIQ/////xK8yHBQA+MEdiIBzwsDgA4jAc8LHxLLH3ATzwsBydBQ8sv/Ds4lAc4ujUIBVPoCgChhAfQAcPoCcPoCcc8LYY6AmXAfzwsAATAt2SoB4XEfzwsAG84t2UMBLo6AB6OYcc8LABLMJdnhcM8LAFUBMCXZRAK2yUTQ2zxw+wBfA1UBgBthgBthgB1hgBxhgBxhgBxhgBxhgBxhgBxhgBxhgBxhVQuAHGGAE2GAHGGAHGGAHGGAHGGAHGGAHGGAHGGAHGHbPIASVVBVF1UqXwsB2YaNBEoiwRiOgOEiwRWOgOECwRSOgOEG8qgEo/LgRDAI+QFUEJT5EPKoW0pIRgP82zxWFlYevoAXYcMAsAsL8nz4I4ED6KiCCBt3QKBWHQG5cCGAH2FVAeMEAfK8cPhkgBhh1dN/0x/0BNFWHIAZYbry4GTtR3EfsPgADiVWG1YbVh9WHFYcVhxWHFYcVhxWHFYcVhxWHFYcVhyAHGGAHGGAHGFWHFYcVhxWHNs8ko1HAtJTI6gBbxBvF28QufgP8uBqCfLQa0EI2zxVA4AWYYAWYYAYYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYASYYASYYASYYASYYAWYYAWYYAWYYAWYds8gBMBVRJVNV8HAdl5jQL8BvKoBKPy4EQwCPkBVBCU+RDyqNs8VhZWHr6AF2HDALALC/J8+COBA+iogggbd0CgVh0BuXAhgB9hVQHjBAHyvHD4ZIAYYdXTf9Mf9ATRVhyAGWG68uBk7UddqHFVDwGw+AACJ1YcVhxWIFYdVh1WHVYdVh1WHVYdVh1WHVYdkkkD/FYQVh5WHlYeVh5WHoAeYYAeYYAeYds8cRKsAW8QbxdvELn4D/Lgagby0GzbPFUEgBZhgBZhgBhhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBNhgBdhgBdhgBdhgBdhgBZhgBZhgBZhgBZh2zyAFAFVElU1XwcB2Y1zjQO6IsEWjoDhB/KoBaPy4ERbCPkBVBCU+RDyqNs8VhZWHr6AF2HDALDyfPgjgQPoqIIIG3dAoFYdAbkg8ryAF2HV039w+GTT/46AAdMAmXBwJFURAVUR2SIB4fpAcSTZUJJLAVKAE2FwVQmAJWFVAeMEA9X6QNN/joAB0wCZcHEkVREBVRHZIgHh1HAk2UwC/gHRBtFWJYAiYbry4GRxgBhhAbD4AClWI1YjVidWJFYkViRWJFYkViRWJFYkVhNWJS5WJlYmViZWJlYmViZWJlYm2zz4D/hEghCAAAAAIbGCEP////8SvMhwUAPjBHYiAc8LA4APIwHPCx8Syx9wIwHPCwHJ0AGAEWHPC/8CziiNTQFcAc5WEPoCgCphAfQAcPoCcPoCcc8LYY6AmXATzwsAATAh2S0B4XETzwsAHs4h2U4BQFByy3+OgAmjmHHPCwATzCfZ4XDPCwBVAjAnVREBVRHZTwK+yVACzMlF0Ns8cPsAXwRVAYAaYYAaYYAcYYAbYYAbYYAbYYAbYYAbYYAbYYAbYYAbYVULgBthgBJhgBthgBthgBthgBthgBthgBthgBthgBth2zyAFVVAVRZVKV8KAdmGjQPIAsEXjoDhBvKoBKPy4EQwCPkBVBCU+RDyqNs8VhZWHr6AF2HDALDyfPgjgQPoqIIIG3dAoFYdAbkg8ryAGGHV03/6QNMAcPhk1Y6AAdMAm3BwcCVVEVUDVRLZIgHh+kDT/3El2VaSUQFegBZhcFUMgChhVQHjBAnDAAPTAAHDAAHVjoAB0wCZcXAkAVURVQLZIgHh0/9wJNlSAv4B0QTRDNFbViSAIWG6cROwAvLgZHGAF2EBsPgAK1YiViJWJlYjViNWI1YjViNWI1YjViMvViQuViVWJVYlViVWJVYlViVWJds8+A/IcRewgBMnAc8LH3AoAc8LAXApAc8LAHYhAc8LAgLJUEPLAALQAc4vAc5WEPoCgCphAfQAjVMBYnD6AnD6AnHPC2GOgI4UcBPPCwABVQdbIVUBVRcBVURVF9kpAeFxE88LABvOGcv/KNlUAVYUywACo46AIFkBVQHgcRfPCwAby/8lcFU3VQlVCFUFVQlVGAFVC1ULVQvZVQK4MALJAczJS8DbPHD7AF8HgBZhgBZhgBhhgBdhgBdhgBdhgBdhgBdhgBdhgBdhgBdhVQuAF2FVDYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYds8gBYBVRJVJV8GAdmGjQL8BvKoBKPy4EQwCPkBVBCU+RDyqNs8VhZWHr6AF2HDALALC/J8+COBA+iogggbd0CgVh0BuXAhgB9hVQHjBAHyvIAgVhdWF1UB9A9voVYYpIIQf////7BWGeMEIPhkgBph1dN/+kDRVh2AGmG68uBkcR+w+AAlgBthVhtWHlYcklcC/lYcVhxWHFYcVhxWHFYcVhxWHC5WHFYcVhxWHFYcVhxWHFYc2zz4D8hwIQHPCwH4RIIQgAAAACGxghD/////ErxwWOMEdiMBzwsDAslWEgHQghAnZKfEFc8LHxLLH1AyzoARYQHOUAT6AoAgYQH0AHD6AnD6AnHPC2EDyVADzMmNWAFecPsAAfhi+ELTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdlZAfww0geAImHQ0wEBwALysMiAF4AXIgHPCx8VygcD0/8wUAPL/wH6QDBQAs7JAcxwzwsByYAgASaAHGFVAvQXVQZVBVUBgBthgBphgBphgBphgBphgBphgBphgBphgBphgBphgBphVQ+AGmGAGmGAGmGAGmGAGmGAGmGAGmGAGmFaARjbPFUgVRRVF18HAdmNBC4iwRqOgOECwRmOgOHbPHD4ZIAXZdXT/19eklwB7I5xAdN/1dN/0QHRjkuAF2HQ0wEBwALysHMpAc8LAXAqAc8LAcnQAc4B+kAwAc6AGHESzwthgBgazwsfUELLfxLLf8kBzMlQBszJcPsAVQRVdlU/gBFlAdkDo8hRiMv/mHHPCwAVziPZIgHhcM8LAAEwI9kB0wBdACSZcHEkVREBVRHZIgHh+kBwJNkBtts8cPhkgBdlD9DTAVUP1dN/03/RBMACyAHysHMhAc8LAXAiAc8LAcnQAc4E+kAwUATOgBlxEs8LYYAZJQHPCx9QNct/Fct/yVADzMlQAszJcPsAVXJVO18NAdmSA3oiwRuOgOHbPHD4ZPgogBlh1dN/1NED0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZYZJgAdjIcM8LAIAtYdDTAQHAAvKwUhbPC39wzwv/cM8LH1YjAfQAcM8LH3ESzwsBF8xxzwsAgCJhVQb0AAPSBzAF+kCAGgXJUAPMcM8LAMn5AIAaVQEBVQZVAts8cPsAgBlzY3iAHWN0gCZjgCdlAdljA4IiwRyOgOHbPHD4ZF8LDdXT/9EubvLQZvgoINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2WSSYgH6MIARYdAg10rAAsgB8uBFcCEBzwsAgCJh0NMBAcAC8rBRMs5QYs4YzMlQB8zJcCQBzwtHFcv/cM8L/3DPC4Bwzwt/cRTPCwEUzALJA9IHMAX6QIAbcRXPCwAVzHDPCwDJ+QCAG1UBAVUGVQLbPHD7AFWxVY50gBljgBplAdljADzIgAwhAc8LAxXOcc8LYVA0yx90zwsCywfL/8kBzMkB5gLAHPKp2zxfCyFw+GRu8tBmIG7y0GaAG2HQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzoAcgBwTzwsfA/pAMAHOULLL/xnLHxfLHxXLH3EXzwthcRfPCwATyx/LH8sfzMzJAczJcPsAVTBVdVU+gBBlAdmSAWTfAdDTAAHycCDWAdMAMPJ3me1A7VAJXwnbMCPHAY6AIFkBVQHhJMcCIeFwInBfMFUT2WYE/DAj1w0fb6NwISVwcFUIVQZVEgFVA1UZAVUJVSdVCuFwE+MEItdJ8rCTcCbZIQHhbYIQgAAAABKwA9MfjoAlAeCXcFUgXwMm2YIQGPofASMBuY6A4YEAyhO6InABVQRVElUE4ds8gCBWFlYWVQH0D2+hVhekghB/////sIAYYYlxkmcBbuMEgBhh0x/Tf9N/03/U1Cf4ZNMH0//V+kDV0wCOgCIh4QHT/9MAVQEwIlURAeEB+kABMCFVAdloATYw1dP/joAB0wCZcHEkVREBVRHZIgHh+kBwJNlpAYKAH2EC1NX6QNEw0TAG0VYebgjRB/LQZvgoINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2WoBpshwIQHPCwBwIQHPCz+AE2EBzIASYQHMgBFhAcsHUeLOKgHL/3Afzwt/BNIHjoANo4ASYVUGy/+acSYBzwsAGs4t2SIB4SRVATAtVQFVYlUJVRjZawHqgvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvCYBzwv/gBLPCw8kAcoHyVAFzHAVzwsggDJh0wBWL1UC9AAGyXQoAc8LAgLTANMA+kCCEgE0ABIczwsnUpbKB1BKzMmAFWHMyVAOzMkg12UUzwsPbAH+gvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvM8L/wP5ABPPC//J0PkCUXfPC//J0CEBxwXy4GhWI9Ag10rAAvgAyAHy4EVREc5Rwc5WJgHMyfhEDcyCEIAAAAAtsYIQ/////x68cEEO4wSADSIBzwsfyx8MyXAiAW0B/s8LAXAjAc8LAHEhAc8LARPMgBdhVQ7LfwLJdiQBzwsCAdB0Fs8LAisBygcDyVBVznESzwsAcBTPC0eAEmEBy/9wzwv/cM8LgHDPC3/JUAPMcM8LAMn5AM8L/8nQUgLOcPoCgC5hAfQAcPoCcPoCcc8LYRLMAQHJgED7APhi+EJuAU7TASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdlvAf7IgQDKgQDKIgHPCx8E0gcFygcE0/8wUATL/1BVzslQBMxwzwsBgQEBSRDPAHGAIWEBsIEBARrPAsmAIAFWF4AsYVUC9BeAKmGAF2FVAYAqYYAqYYAqYYAqYYAqYYAqYYAqYYAqYYAqYYAcYYAqYYAVYYAqYYAqYYAqYYAqYYAqcAEmYYAqYYAqYYAqYds8VcaAE2Um2Y0E/IIQYOc8eCMBuY6A4YIQGPofARO6InBZ4fgoB9MA0wDTAPpA2zxw+GSAGGGAImHHBfLgZPgAcRmwCgjbPIAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAXYYAVYYAWYYAXYYAXYYAXYYAXYYAXYYAWYYAWYYAWYXeSc3IBIoAWYds8ghAY+h8BVWBfBybZjQFMlgPtUFlVAu1AjhJtcF8gVSVfA1USAVUBVRJVBNkkAeGOgCRwItl0BP6AIBb0lm+hb6GOFG1wXyBVQ1UqXwhVEgFVAVUSVQTZ4chb+kBxUypVAds8cPsAyFsGpgJwFykB2zyBAP0nAbkDpXAS+wAjVQFVI1UEVQZVBlUG4HEXrBa5jhRtcF8gVQNVJl8EVRIBVQFVElUE2eHIbfgoghAY+h8BEts8gQCAdnaIdQAk+wBxWVtVAlUBVQNVAlUEVQTZAFrIgBghAc8LBRTOUAL6Am0B9ABw+gJw+gJxzwthgQDLE88LH8sAcM8LAckBzMkE/oIQYOc8eBO6InBZ4fgoB9MA0wDTAPpA2zxw+GSAGGGAImHHBfLgZPgARlTbPHEasAuAF2GAF2GAF2GAF2GAF2GAF2GAF2GAF2GAF2GAF2GAF2GAF2FVC4AWYYAXYYARYYARYYARYYAXYYATYYAWYYAWYYAWYds8ghBg5zx4VWCSeY14AAhfBybZA7jtQJYD7VBZVQKOFW1wXyBVk1UvXw1VAlUEVQFVElUE2Y4VGryfcF8gVUJVCVULXwdZVQLZJAHijoCOgIEA/ygBuY6A4ScB4G1wXyBVI1UoXwZVAlUEVQFVElUE2YeAegEegQD/KLoB4Y6AJ3AicFnZewFQgCAa9JdvoW+hKXBZ4VvQ0/+OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2XwBNAHV+kCOgAHTAJlwcSRVEQFVEdkiAeHUcCTZfQHKAdH4RIIQgAAAACGxghD/////ErxwWOMEyIAOIQHPCx8Syx92IgHPCwNwE88LAcnQbVDiy/9Q0s4mAc5WGPoCLAH0AHD6AnD6AnHPC2GOgJlwE88LAAEwIdkqAeFxE88LABrOIdl+ASyOgAOjmHHPCwATzCHZ4XDPCwABMCHZfwFODqUOyVUEVhdVAds8cPsAXwkKpIEA/yEBuVUCMCQnVQNVZFULVTjihgEQjoAncCJwWdmBAWyAIBr0l2+hb6EpcFUVAVUEVQZVA1UGVQdVFuEB0NP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNmCATQB1fpAjoAB0wCZcHEkVREBVRHZIgHh1HAk2YMBygHR+ESCEIAAAAAhsYIQ/////xK8cFjjBMiADiEBzwsfEssfdiIBzwsDcBPPCwHJ0G1Q4sv/UNLOJgHOVhr6AiwB9ABw+gJw+gJxzwthjoCZcBPPCwABMCHZKgHhcRPPCwAaziHZhAEsjoADo5hxzwsAE8wh2eFwzwsAATAh2YUBslUPpQHJVQVWGVUB2zxw+wCAFWGkgQD+IQG5VYJVDVUfXwwkVQVVRlUKVRkBVSjggQD+Ibom4YEA/hu8VQIwI1UBVVNVCVUJVRjgcF8gVUJVCVULXwdZVQLZhgA2yIAYzwsFE84B+gJtAfQAcPoCcPoCcc8LYczJAUjI+CiCEGDnPHhBsNs8gQCA+wBxCFUxVQhfBVUCVQFVEwFVBNmIAELIgBghAc8LBRTOcPoCEvQAcPoCcPoCcc8LYQLLH8kBzMkCuoIQgAAAABKy2zyAIFYYVhZVAfQPb6EsAfK7AdDTH4AfYdMA0wDTAPpAMNMBBdIH0//V+kDRMCPBA5lfA8AD8tBj8jThA8AC8rQG0wCOgCIh4QHTBAHXGAEwIVUB2ZKKA/ww0gcDugLT/zBQB7qw8ruAIIAfYYAdYVUB9FuBAMooAbmOgOCBAMoYuvK6gB5h+GOAIFYdIlUB9A9voVYepIIQf////7CAH2HjBCD4ZAPTAYEBAdcAjoBxgBZhAbCBAQET1wD4AMh2IQHPCwNwIgHPCwHJ0AHOdCIBzwsCJwGQjIsAvMoHJAHL/8nQAc5w+gKAJyIBzwsg+EPT/zCAJ2FVAvQAcPoCcPoCcc8LYY4RcRLPCwCAG2EBzlYaAcv/JdlVBDAnVQFVIlUTAeBwEs8LAFUCMCSAF3RjgBthdIAYY9kC4HHPCwBxE88LAMv/yQHMyXBVBVUDVQFVAts8A8MAgEAU+wBbgB1hVQRVBIAdYYAdYYAdYYAdYYAdYYAdYYAdYYAdYYAdYYAUYYAdYVUNgB1hgB1hgB1hgB1hgB1hgB1hgB1hgB1h2zyBAMpVQF8FJtmPjQH+7UDIcCEBzwsAgBlhIcs/cR2wgBlhVQzLH4AYYQH0AAGjAYAXYc8L/4AWYQHLH4AVYQHLH4AUYQHLH4ATYQHLH4ASYQHLH4ARYQHLH1UPAfQAH/QAjicwULvLABnLfxfLHxX0ABPLAAXLf8sf9ADJUALMyVACzMntVO1QXwMvIY4AOuFxJAHPCwAPUA/OHcv/LXBVAgFVk1UMVR0BVQ7ZAEDIgQDEzwsIFMsHEsv/AfoCbQH0AHD6AnD6AnHPC2HMyQH+MAbAF/K6XwWAGGH4Y4AgVhciVQH0D2+hVhikghB/////sFYZ4wT4ZPgA+EPTH9Mf0x/6QNP/1NQlVhy8AdQC8uBnyHAhAc8LAHEiAc8LABjOFsv/UPXLf4AhYVUFyz+AIGEByx8a9ABQycsfgBFhVQPLACLQ1AT7BDBVD88Lf5EAklCq9ACAGmFVB8v/AtQw0O0eUGLLHwXJUNjLHwztUzAG1DBQmvQAF8sAE8zJUGXLHxLLH1UPAcsfH8sfHcsfHPQAEvQAGszJ8AEA9O1A7UTQ0wAB8n/TP9Mf9ATT/9Mf0x/TH9Mf0x/TH/QE9ATVjh/TANN/0x/0BNMA1dN/0x/0BNED0QvtUFVxVQdVCVUJAdMAjhZwcHBVA1UFW1W0gBFhVR0BVQ5VHwHZIgHh+kDT/3FVA1UFW1W0gBFhVR5VHgGAEWHZ",
        code: "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",
        codeHash: "04c4cf4bac54205e70c5694a9db6dc8d6b399e5c15b0732c2fdfef72167d106a",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexClientAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runDeployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientDeployPriceXchgOutput,
    }> {
        return await runHelper(this, "deployPriceXchg", input);
    }

    async deployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployPriceXchgOutput,
    }> {
        return await runLocalHelper(this, "deployPriceXchg", input);
    }

    async runCancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "cancelXchgOrder", input);
    }

    async cancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelXchgOrder", input);
    }

    async runTransfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferTokens", input);
    }

    async transferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferTokens", input);
    }

    async runDeployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientDeployEmptyFlexWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyFlexWallet", input);
    }

    async deployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployEmptyFlexWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyFlexWallet", input);
    }

    async runDeployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "deployIndex", input);
    }

    async deployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "deployIndex", input);
    }

    async runReBindWallets(input: FlexClientReBindWalletsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "reBindWallets", input);
    }

    async reBindWallets(input: FlexClientReBindWalletsInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "reBindWallets", input);
    }

    async runDestroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "destroyIndex", input);
    }

    async destroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroyIndex", input);
    }

    async runBurnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burnWallet", input);
    }

    async burnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burnWallet", input);
    }

    async runBurnThemAll(input: FlexClientBurnThemAllInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burnThemAll", input);
    }

    async burnThemAll(input: FlexClientBurnThemAllInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burnThemAll", input);
    }

    async runContinueBurnThemAll(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "continueBurnThemAll", {});
    }

    async continueBurnThemAll(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "continueBurnThemAll", {});
    }

    async runCancelThemAll(input: FlexClientCancelThemAllInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "cancelThemAll", input);
    }

    async cancelThemAll(input: FlexClientCancelThemAllInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelThemAll", input);
    }

    async runContinueCancelThemAll(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "continueCancelThemAll", {});
    }

    async continueCancelThemAll(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "continueCancelThemAll", {});
    }

    async runUnwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unwrapWallet", input);
    }

    async unwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unwrapWallet", input);
    }

    async runBindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "bindWallet", input);
    }

    async bindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "bindWallet", input);
    }

    async runOnTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onTip3Transfer", input);
    }

    async onTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runUpgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "upgrade", input);
    }

    async upgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "upgrade", input);
    }

    async runGetPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetPayloadForDeployInternalWalletOutput,
    }> {
        return await runHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async getPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPayloadForDeployInternalWalletOutput,
    }> {
        return await runLocalHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async runGetPayloadForEverReTransferArgs(input: FlexClientGetPayloadForEverReTransferArgsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetPayloadForEverReTransferArgsOutput,
    }> {
        return await runHelper(this, "getPayloadForEverReTransferArgs", input);
    }

    async getPayloadForEverReTransferArgs(input: FlexClientGetPayloadForEverReTransferArgsInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPayloadForEverReTransferArgsOutput,
    }> {
        return await runLocalHelper(this, "getPayloadForEverReTransferArgs", input);
    }

    async runGetPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetPriceXchgAddressOutput,
    }> {
        return await runHelper(this, "getPriceXchgAddress", input);
    }

    async getPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPriceXchgAddressOutput,
    }> {
        return await runLocalHelper(this, "getPriceXchgAddress", input);
    }

    async runGetUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetUserIdIndexOutput,
    }> {
        return await runHelper(this, "getUserIdIndex", input);
    }

    async getUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetUserIdIndexOutput,
    }> {
        return await runLocalHelper(this, "getUserIdIndex", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: FlexClientGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

