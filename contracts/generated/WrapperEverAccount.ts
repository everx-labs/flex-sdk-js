
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type WrapperEverInitInput = {
    _answer_id: number /* uint32 */,
    reserve_wallet_evers: string | number | bigint /* uint128 */,
    internal_wallet_code: string /* cell */,
};

export type WrapperEverInitOutput = {
    value0: boolean /* bool */,
};

export type WrapperEverDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type WrapperEverDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type WrapperEverOnEverTransferInput = {
    _answer_id: number /* uint32 */,
    tokens: string | number | bigint /* uint128 */,
    args: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
        keep_evers: string | number | bigint /* uint128 */,
    } /* tuple */,
    answer_addr: string /* address */,
};

export type WrapperEverBurnInput = {
    tokens: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
};

export type WrapperEverTransferFromReserveWalletInput = {
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type WrapperEverRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperEverRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type WrapperEverClonedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperEverClonedOutput = {
    value0?: string /* optional(address) */,
};

export type WrapperEverSetClonedInput = {
    cloned?: string /* optional(address) */,
    wrappers_cfg: string /* address */,
    wrappers_cfg_code_hash: string | number | bigint /* uint256 */,
    wrappers_cfg_code_depth: number /* uint16 */,
};

export type WrapperEverGetDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    total_granted: string /* uint128 */,
    wallet_code: string /* cell */,
    external_wallet?: string /* optional(address) */,
    reserve_wallet: string /* address */,
    super_root: string /* address */,
    cloned?: string /* optional(address) */,
};

export type WrapperEverGetTip3ConfigOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
};

export type WrapperEverHasInternalWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type WrapperEverGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type WrapperEverGetWalletAddressOutput = {
    value0: string /* address */,
};

export type WrapperEverGetReserveWalletOutput = {
    value0: string /* address */,
};


export class WrapperEverAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onEverTransfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"name":"args","type":"tuple"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgEChAEAIjoAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBICYHA6b/AdBtIG0jISBVAyHbPIAfZQLytDAJCAZVCFUMVQxVDFUMVQxVC1UMVQdVDFUMVQxVDFUMVQ3bPIAfZQLytI6AAtMAl4sIcQEwI9kBMCEB4XAj2YF1CAE8joAgWQFVAeBxlfK0MCDZcRS6k3Aj2eGLCNEicFnZCQEuXwVVD9MAjoAiIeGBAgAS1xgBMCFVAdkKAShxFLAB0wCOgCIh4QHT/wEwIVUB2QsDiO1ABMMAAtM/0x/TH5UB7VDbMIEBACMBuY6A4SLBEo6A4QLAEPKpMATyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6ANMAFQ4MAf6OejDV0wCOaDDV0wCOVjDRMNEw0XD4ZFuAH2HTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAQcRLPC2GAEBPPCx8DbsAAcbATzwsAyQHMyXD7AFWgVQxV/oAcZQHZIiHhAfpAATAhVQHZIiHhAfpAATAhVQHZIiHhDQASAfpAATAhVQHZAWICwBLyqTAE8nntRNDTAAHyf9TU1NMH0gfT/9N/1fQE+gDTAI6AIiHhAfpAATAhVQHZDwEkMNXTAI6AIiHhAfpAATAhVQHZEAEkMNXTAI6AIiHhAfpAATAhVQHZEQFmMNEw0TDR+Chw+GQg0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZEgH8yHEhAc8LAHAiAc8LAILw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0jAc8L/4AUzwsPBdIHMFIGygfJIcxSc85wzwsgcBLPCz+AKWHTAQTJgBNhVQLMUZXOgClhVQP0AAPAAlAjzMlwEs8L/8zJVQ9VB8wfywdwEwH6zwt/HMv/HczJCvKwcyEBzwsBcCIBzwsBydABzgz6QDBQDM6CEgE0ABQsAc8LJyrXZc8LD3QtAc8LAoAScRTPC2GAEh/PCx8FzwoHgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3RLPC/8L+QAbzwv/ydD5AhoUADbPC//J0FACzslQCszJcPsAVVZVDVXvgBxlAdkChoECACMBuY6A4YEBABO68qkwBPJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkcFgEkAdXTAI6AIiHhAfpAATAhVQHZFwEyMNWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2RgBfgHRBNEF0XD4ZFsDwAAobsMAsfLQbfgoINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2RkB/shxIQHPCwBwIgHPCwCC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdIwHPC/+AFM8LDwXSBzBSBsoHySHMU3LOcM8LIHAjAc8LP4AwYdMBBMlWGlUCzFG3zoAxYVUD9AADwAJQI8zJcBLPC//MyVYXVQnMVhYBywcaAf5wzwt/VhQBy//MyQHysHMlAc8LAXAmAc8LAcnQAc6BAQAmAc8LH4ISATQAFCcBzwsnI9dlzwsPgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3c8L/wP5ABPPC/+AGGFVAswD+kAwUALOgBZhVQLMAsl0JgHPCwIYGwDqygcH0HESzwthUcXOgBVhVQLLBwL5AhfPC//J0FAEzoARYVUDy/9VDwHLfx7McM8LAI4oMAHJUATMyVAMzMlQAszJUAbMyXD7AIEBAFXggBFhgA+AE2OAH2UB2Skh4VCDziJwVRZVFgFVBlUEVQZVCFUIVQjZAniBAwAjAbmOgOGBAgATuvKpMATyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6ANMAjoAiIeEB+kABMCFVAdkfHQH8MNXTAI5vMNXTAI5dMNEw0TDRcPhkXwWAHGHTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAgQIAUCTOgQIAE88LHxjMFsxxFs8LYVBFywfL//goAc7JUAPMyXD7AFVQVQdV+YAXZQHZIiHhAfpAATAhVQHZIiHhAfpAATAhHgAGVQHZAWSBAwATuvKpBfJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoA0wCOgCIh4QH6QAEwIVUB2SABJDDV0wCOgCIh4QH6QAEwIVUB2SEBJDDV0wCOgCIh4QH6QAEwIVUB2SIBTDDRMNEw0XD4ZF8FCtXT/46AAdMAmXBxJFURAVUR2SIB4fpAcCTZIwGKAdHIcCEBzwsAcCEBzws/+CgjzhjL/1DHzBrMjoACownPCwdwzwt/VQ8By/+acSoBzwsAE84h2SkB4SpVAjAiVREBVRHZJAH8gvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SoBzwv/gBTPCw8oAcoHyVALzHAbzwsggCJh0wGAI2FVAvQADMkCwAJQLMzJUAbMyVACzMkJ8rBzKAHPCwFwKQHPCwHJ0AHOBPpAMFAEzoISATQAFCgBzwsnKddlJQDSzwsPdCkBzwsCgQMAcRTPC2GBAwAbzwsfCM8KB4Lw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0Szwv/CvkAGs8L/8nQ+QIZzwv/ydBQBc7JUAbMyXD7AFUFVTdV7IAZZQHZAtTfAdAg0wAB8nAg1gGW7UDtUNswAdMAjoABMCEB4TAE0h8BwP/4APLgZdMfghBDhPKYErry4GXtRNDTAALTfzAB8n8B1NTU0wfSB9P/03/V9AT6AI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZLCcBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkoATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZKQGYAdEE0QjRWy1WFbny0GbIcCEBzwsAgBVhIcyAFWEBzIAUYQHMUeL0AFAN+gKAEmFVDcsHVQ6AEmGhAYARYc8KBwXAAFUPVQXL/xLLfyoB/o5lBMAAjkGOGDAOyVAOzMlQBMzJUAnMye1UcFXgXw8B2SIh4HEWzwsAGs4kcFUhXhBVPF4gVQ9VDlUsXhBVDVUMVQ9VD1UP2Y4QLlUCMCFVAVUjVQZVBlUV2SMB4HElAc8LABfOJtmOFnAUzwsAVQYwI1UBVQpVGFUKVUZVGdkrABgrAeFxFM8LABvOItkDom0gbVUGISBVAyHbPIAfZQLytDAJCAZVCFUMVQxVDFUMVQxVC1UMVQdVDFUMVQxVDFUMVQ3bPIAfZQLytI6AAtMAl4sIcQEwI9kBMCEB4XAj2YF1LQE8joAgWQFVAeBxlfK0MCDZcRS6k3Aj2eGLCNEicFnZLgT8XwVWE9cNH2+jnXCAEmJzgBRjgBVlAdnhcROwwwBWFddJ8rCf8nlwgBFic4ATY4AUZQHZIgHhgBVh0x+OEFvyeXCAEWJygBNjgBNlAdkiwQ6OgOEiwQyOgOEiwQuOgOECwAoi4e1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6ANMAVkE3LwEcjoAiIeEB+kABMCFVAdkwATIw1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZMQEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TIB/AHRBNEI0VuAEWHTH3D4ZNN/C24L1DAL8uBoKvkAgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3bry4Gf4KtAg10rAA/LgRXIrAfsCyILw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0hAc8L/3AiATMB/M8LAXAjAc8LAHEhAc8LAQLJgBQUzwsPgC5h0wD4KFYXVQPKB3AoAc8LH3QpAc8LAnYnAc8LAgnQVhZVCMxwKQHPCz8GB9MADdTUCMmAEmHAAAnVgBFh0wBWI1UNzC5WE85xG88LAFUKgBJhzlYgVQzKBw3JBPpAMAb6QDBVBzQB/oARYczJcYASYQHPCwBVDwHOcM8LIFY0AfQAzMlwHc8L/xzMyVYeVQPMVh0Bywdwzwt/VhsBy//MyVACzHDPCwDJIPkAG88L/8nQAc5QDPoCVi4B9ABw+gJw+gJzzwthGMxxzwsAGszJcPsAyHYhAc8LA3AiAc8LAcnQAc4aznA1AdD6AoAsYQH0AFCpyx9wGfoCcRnPCwBwGfoCCMlxGc8LYRjMyYEAgPsAyHAhAc8LAIAZYSHMgBlhAcyAEmEj9ACAEmH6AnHPCwAWzoAWYVUFzIAVYQHLB4AUYQHKB4ATYQHL/4ASYQHLfzYAto44jhswA8lQA8zJAczJAczJ7VR6gCFigCNhgCJlAdkpIeBxFs8LAIARYQHOJXBVBQFVAlUjVQZVBtmOEiNVBTAhVQFVOlUqVQ1VOlUc2S0B4XElAc8LAB7OLdkBZjAC8nntRNDTAAHyf9TU1NMH0gfT/9N/1fQE+gCOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TgBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNk5ATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZOgFQAdEE0QjRW4AVYdMfcPhk0/+OgAHTAJlwcSRVEQFVEdkiAeH6QHAk2TsB7IAvYdMA0wDTAPpA7UdvEG8XAfpACNXTf/goAdEK+gAwBG8QjoAKowWhcvsCyHAhAc8LAHAhAc8LP1HCzlUPAcv/ViNVDMxWIgHMViEBywdwzwt/Vh8By/+acSQBzwsAHs4s2SgB4SJVBTAsVQFVZlUNVTpVHNk8Af6C8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdJAHPC/+AFM8LD1YhAcoHcCUBzwsBcSUBzwsBAsl2JgHPCwIGzHAUzwsgVh9VAswCyXAnAc8LH3QYzwsCAdCAFmHAAHEVzwsAVjlVA/QABclQJ85WI1UCygcHyVBkPQH+zMlQBMzJUA/MyVACzHDPCwDJIPkAFM8L/8nQUgPOUAT6AlYzAfQAcPoCcPoCc88LYRLMcc8LABLMyXD7AMhR3csfznYtAc8LA3AezwsBydAByQ3OFM5w+gKAL2EB9ABw+gJw+gJxzwthG8zJgQCA+wDIcCEBzwsAgB5hIcyAHj4BWGEBzIAXYSP0AIAXYfoCgBxhVQHMgBthAcsHgBphAcoHgBlhAcv/gBhhAct/PwHsjnQPwACOUY4eMAXJUAXMyVUPzMlQAszJ7VSAC4AmYoAoYYAnZQHZIyHgcRjPCwCAFWEBzidwcoATYwFVi3KAEmNVDnKAEmMBgBNhgBFhgBNhgBRhgBRh2Z0kVQMwIVXEgBJhVU3ZLQHgcSYBzwsAgBJhAc4h2UAARo4RcBPPCwBVBDAiVdWAFGFVXtlWFQHhcRPPCwCAFWEBziLZAnIwAcENjoDhAfJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlMQgEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2UMBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlEAW4B0QTRCNFbgBRh03/6QNP/cHD4ZAHVjoAB0wCOEnAjcFUFVRQBVQJVFAFVBlUG2SIB4fpAcSTZRQL+AdP/1dMAltEw0fLAayIB4fpA0QLRMFYYK7mOgATAAAHy0GntR28QbxdvECwBufLgachwIQHPCwBwIQHPCz9WIQHMViABzPgoI84dy/9WH1UMyweANmHTANMA0wBwFc8LfwT6QDBWIVUEy/+OECZVAjArVQFVg1UMVQxVG9kpAUdGABbgcSgBzwsAHc4r2QHUgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SgBzwv/gBTPCw9WIwHKB8lQB8xwF88LIFY2AfQABsl0KAHPCwKCEgE0ABQZzwsnViNVCMoHUCjMyVAGzMlQC8zJINdlFc8LD0gB/oLw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt3PC/8E+QAUzwv/ydD5AhTPC//J0BjHBfLgal8DgBdhKqEgVhagcvsCyHAhAc8LAQ7AAHYSzwsDDsnQUA7OEs5QCvoCgCxhAfQAcPoCcPoCcM8LYcmBAID7AMhwIQFJAWbPCwCAHWEhzIAdYQHMgBdhI/QAgBdh+gKAG2FVAcyAGmEByweAGWEBygeAGGEBy/8cy39KAeaOcQ3AAI5Ojh0wBMlQBMzJUA7MyQHMye1UgAyAJGKAJmGAJWUB2SMh4HEXzwsAgBRhAc4mcHKAEWMBVXqAEWFVD1UNgBFhgBFhVQ6AEWGAEmGAEmHZnCNVBTAhVYZVD1Vp2VYQAeBxJQHPCwCAEWEBziHZSwBGjhFwHc8LAFUDMCtV1IATYVVO2VYUAeFxHc8LAIAUYQHOLNkBZAHyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6AI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZTQEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2U4BMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlPAUQB0QTRCNFw+GSOgIAXYdMAmXBxJFURAVUR2SIB4fpAcCTZUAGeAdX6QNN/0Q/y4G2AL2HTANMA0wD6QFYUIscFAfpA+gAwAvLgZPgoINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2VEB+siC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdIQHPC/9xIgHPCwAmAc5wIwHPCwCAFBPPCw8F0gcwUgbKB8ntR28QURPMAXATzwsgdCUBzwsCgBhhwACAE2GjBW8XBMlwF88LP1G3zlY7VQP0AASCEgE0ABQYUgH+zwsnVQRVDYAUYeMEUJTKB1BUzMlwFc8L/xTMViVVCMwFbxAaonL7AgjJViJVA8xWIQHLB3DPC39WHwHL/8zJINdlFc8LD4Lw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt3PC/8E+QD4RIIQgAAAACGxghD/////ElMB/rxQJsv/cEYG4wTIeiEBzwsfEssfcc8LAHAiAc8LAcl2IwHPCwMHydAB0AH5AlCizlDSzoAXYQHLf3DPC/9wzwsAyQHMyVB0zlCmy//J0FAFznD6AoAvYQH0AHD6AnD6AnHPC2HMyYEAgPsAyHAhAc8LAIAfYSHMgB9hAcyAGGFUAf4j9ACAGGH6AnHPCwCAFWEBzoAcYVUBzIAbYQHLB4AaYQHKB4AZYQHL/4AYYQHLf44/jh0wBMlQBMzJUALMyQHMye1UgA2AJWKAJ2GAJmUB2S0h4HEXzwsAgBZhAc4mcFUGVQRVA1UVVQRVBlUHVQfZnCNVBTAhVVZVDFVm2VYSVQAeAeFxJQHPCwCAE2EBziHZA5KBBAAjAbmOgOGBAMojAbmOgOECwA4i4QLyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6AI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZZ11XATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZWAEyAdWOgAHTAJlwcSRVEQFVEdkiAeH6QHAk2VkB/AHRBNEI0VuAKWHTAHD4ZNMABMAABNMAgBlh0x/IdiEBzwsDcCIBzwsBUELLHwT6QDABydBQA84SznD6AoAqYQH0AHD6AlYTVQLLf3AS+gIByXESzwthzMmAQPsAyHAhAc8LAIAZYSHMgBlhAcyAEmEj9ACAEmH6AoAXYVUBzFoBMIAWYQHLB4AVYQHKB4AUYQHL/4ATYQHLf1sB/I5qjkcKo44eMAPJUAnMyVACzMlQB8zJ7VSADoAgYoAiYYAhZQHZIFkBVQHgcRbPCwAfziRwVTtVHQFVLFUcVQxVC1UNVQ9VD1UP2Y4SJFUDMCFVAVUMVWVVDFUbVRvZLAHgcSYBzwsAHc4s2Y4QcBPPCwBVBDAiVYVVDlVZ2VwAHlYQAeFxE88LAFUPAc4i2QFygQDKE7oi4QLyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6AI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZXgEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2V8BMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlgAVYB0QTRCNFbgBVh0x/Tf9P/cPhk1Y6AAdMAmXBxJFURAVUR2SIB4fpAcCTZYQH8AdN/03/V+kDRMIAzYdMAAtEwUSmgAtMA0wD6QPpA+gAwUAa58tBsK4AbYaAgVhmgcvsCyHAhAc8LAPgoIs4ey/9wLgHPCz+OgAqjViNVAcxWIgHMViEBywdwzwt/Vh8By/+acSQBzwsAHM4q2SIB4S9VATAqVQFVglULVRrZYgH+gvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SQBzwv/gBTPCw9WIQHKB4IQQ4TymCUBzwsfgBJhAct/F84GyXAlAc8LAcl0JgHPCwJVAVYSzFC4y39xVhIBzwsBdoATYQHPCwID0HAVzwsgVh9VAcxxE88LAIAVYWMB/sAACMkKyVYiVQ3KB1CyzHEUzwsAVjZVAvQAUFTOUJPMyVAFzMlQDMzJAcwCyXATzwsAySD5ABbPC//J0FAKznD6AoAwYQH0AHD6AnD6AnPPC2EUzHHPCwATzMmBAID7AMhwIQHPCwCAHmEhzIAeYQHMgBhhI/QAgBhh+gKAHGFkATBVAcyAG2EByweAGmEBygeAGWEBy/8Uy39lAe6OdQ/AAI5Sjh8wBMlQBMzJVQ/MyVACzMntVIEAyoAmYoAoYYAnZQHZIyHgcRfPCwCAFWEBziZwcoATYwFVmoATYYASYVUPgBNhgBNhgBFhgBNhgBRhgBRh2Z0jVQUwIVWmgBJhVWvZJwHgcSUBzwsAgBJhAc4h2WYARo4RcBXPCwBVBTAkVcaAFGFVbdlWFQHhcRXPCwCAFWEBziTZAoSBBQAjAbmOgOGBBAATuiLhAvJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNluaAEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2WkBMgHVjoAB0wCZcHEkVREBVRHZIgHh+kBwJNlqAcIB0QTRCNFw+GRbgClh0wDTAMh2IQHPCwNwIgHPCwED0wCAHGHTHzBQBMsfA/pAjoAJowbJ0FAEzs5w+gKAK2EB9ABw+gJw+gJxzwthmnEUzwsALAHOJ9klAeFwFM8LACfZawGOyVADzMmAQPsAWwTAAMhwIQHPCwCAGGEhzIARYSP0AIARYfoCgBdhVQHMgBZhAcyAFWEByweAFGEBygeAE2EBy/+AEmEBy39sAfyOX44+jh8wA8lQA8zJUALMyVANzMntVIEEAIAgYoAiYYAhZQHZKiHgcRbPCwAeziRwVXZVG1ULVQpVDFUOVQ5VDtmOECNVAjAhVQFVY1UKVQpVGdkmAeBxJQHPCwAbzirZjhZwE88LAFUFMCJVAVUOVWdVDlU7VR3ZLwHhcRNtAA7PCwAfziHZAXKBBQATuiLhAvJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlvATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZcAEkAdXTAI6AIiHhAfpAATAhVQHZcQFWMNEw0QTRcHD4ZI6AgBVh0wCOEHAjcFUTAVUBVRMBVQVVBdkiAeH6QHEk2XIB/gHV+kDT/9MP0Q3y4G1WGdAg10rAAsgB8uBFU/DOUUHOE8v/HssPyVACzHAiAc8LAHAhAc8LAALJUePOdCQBzwsCcCQBzwsAJMmAM2HTANMA0wD6QDBQRcxWHVUFygeAFGFVBszJcRnPCwAYzHHPCwAByXAnAc8LH1YxAfQAVh5zAf4BzHDPCwjMyQHMcM8LAMn5ABbPC//J0CMBxwXy4G52FM8LAnAWzwsBydBQBc7OBcAAcBb6AoArYQH0AHD6AnD6AnDPC2HJgEL7AMhwIQHPCwCAG2EhzIAbYQHMgBRhI/QAgBRh+gJxzwsAgBFhAc6AGGFVAcyAF2EByweAFmEBdADcygeAFWEBy/+AFGEBy3+OPI4dMAPJUAPMyQHMyQHMye1UgQUAgCJigCRhgCNlAdkqIeBxFs8LABvOJHBVRlUJVQVVB1UYVQtVC1UL2Y4SI1UFMCFVAVUsVUlVDlU7VR3ZVhIB4XElAc8LAB/OLtkBvO1AjlaAGWHtUAuAEWGAE2GAFGFwX/BwXzCAE2GAMGGAImFygC9jgCRhgDBhd4AfY4AgYYAlYYAhYYAmYXSALWNygCdjAYAwYYAqYXWALGOAEIAgY4AwYYAwYVUP0wB2A/6OJXFwX8BVDjBVC1UZVQlVD4AOgBFjgBthgBthd4AVY3OAHGNeENkiAeEg0wCOL3FwX8BVHYARYV8DVQtVGVUJVQ+ADoARY4AbYYAbYXWAF2OAHGFygBtjcoAdYwHZcSMBuY6A4HETuiLh1Y6AAdMAmXBwJFURAVUR2SIB4dMEenh3AAZxJNkB/I55jmeOVY5DAtFxXyBVBFUXVRtVDoASYYAUYXKAFmNzgBljXw1VDFUaVQpVD4AOgBFjgBxhgBxhc4AaY3KAG2MBc4AaY3KAHWMB2QPTAJRwcCbZIgHh1AFxJtkD0wCUcHAm2SIB4dQBcSbZAtMAlHBwJdkiAeHUAXEl2QLTAHkALJtwXyAmVRFVA1US2SIB4dMA0wBxJtkBFo6AIVUhXhBVEgHiewEujoAB0wCZcHAkVREBVRHZIgHh0wRxJNl8ATaOgALTAJtwXyAmVRFVA1US2SIB4dMA0wBxJtl9ASSOgALTAJRwcCXZIgHh1AFxJdl+ASSOgAPTAJRwcCbZIgHh1AFxJtl/AfwC0wCORXFwXyBxVQVVCFUbVQ6AEmGAFGF1gBZjXwxVDVUbVQtVD4AOgBFjgB1hgB1hgB1hcoAcYwFzgBljgBxhgBxhgB1hgB5h2SIB4dQBcHFfIFUFVQhVG1UOgBJhgBRhdYAWY18MVQ1VG1ULVQ+ADoARY4AdYYAdYYAdYXKAAC6AHGMBgBxhcoAbYwFygBtjgB1hgB5h2QHs7UCOOoASYe1QDg9VD4ARYXBf8HBfwIAcYYANgCBjgClhgC1hdIAnY3KAK2MBgCxhgC1hgBWAGWOALmGALmEm0wCOLNMA0wDTAPpA+kD6APQE+gD6ANM/0x9xcFUNgBVhW1UOVT9Vp1UvXhCAE2HZIgHhWybTAYIB/o4qbW1ycF8gJXBfUFUcW1UNVT5VK4ARYVUdgBFhVTyAEWGAEWGAE2GAE2HZIsEDjjgCwAMi4fpAAQH6QAEB0z/THwFtbXFycF9AVQ2AFWFbVQ5VP1UvVR9VDYARYVU7VR8BgBJhgBNh2eECwAIi4fpAAQH6QAEB+gBtbXFwI3CDAE5fMHFVDYAVYVtVDlU/VS+AEWFVHQGAEWFVPIARYYARYYASYYATYdk=",
        code: "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",
        codeHash: "bf4120c3df0475fb93d4d1a7af44f99975baccc762676e167f1753021548c48a",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperEverAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: WrapperEverInitInput): Promise<{
        transaction: Transaction,
        output: WrapperEverInitOutput,
    }> {
        return await runHelper(this, "init", input);
    }

    async init(input: WrapperEverInitInput): Promise<{
        transaction: Transaction,
        output: WrapperEverInitOutput,
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperEverDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperEverDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onEverTransfer", input);
    }

    async onEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onEverTransfer", input);
    }

    async runBurn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async transferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runCloned(input: WrapperEverClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverClonedOutput,
    }> {
        return await runHelper(this, "cloned", input);
    }

    async cloned(input: WrapperEverClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverClonedOutput,
    }> {
        return await runLocalHelper(this, "cloned", input);
    }

    async runSetCloned(input: WrapperEverSetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setCloned", input);
    }

    async setCloned(input: WrapperEverSetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCloned", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetTip3ConfigOutput,
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async getTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetTip3ConfigOutput,
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperEverHasInternalWalletCodeOutput,
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async hasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperEverHasInternalWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperEverGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperEverGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetReserveWalletOutput,
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async getReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetReserveWalletOutput,
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

}

