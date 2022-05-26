
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
export type WrapperInitInput = {
    external_wallet: string /* address */,
    reserve_wallet_evers: string | number | bigint /* uint128 */,
    internal_wallet_code: string /* cell */,
};

export type WrapperDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type WrapperDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type WrapperOnTip3TransferInput = {
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

export type WrapperOnTip3TransferOutput = {
    err_code: number /* uint32 */,
    flex_wallet: string /* address */,
};

export type WrapperBurnInput = {
    tokens: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
};

export type WrapperTransferFromReserveWalletInput = {
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type WrapperRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type WrapperClonedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperClonedOutput = {
    value0?: string /* optional(address) */,
};

export type WrapperSetClonedInput = {
    cloned?: string /* optional(address) */,
    wrappers_cfg: string /* address */,
    wrappers_cfg_code_hash: string | number | bigint /* uint256 */,
    wrappers_cfg_code_depth: number /* uint16 */,
};

export type WrapperGetDetailsOutput = {
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

export type WrapperGetTip3ConfigOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
};

export type WrapperHasInternalWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type WrapperGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type WrapperGetWalletAddressOutput = {
    value0: string /* address */,
};

export type WrapperGetReserveWalletOutput = {
    value0: string /* address */,
};

export type WrapperGetTestValueOutput = {
    value0: number /* uint32 */,
};


export class WrapperAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"external_wallet","type":"address"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[{"name":"err_code","type":"uint32"},{"name":"flex_wallet","type":"address"}],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"},{"name":"getTestValue","inputs":[],"outputs":[{"name":"value0","type":"uint32"}],"id":"0x13"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgEChgEAIzcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBICgHA6b/AdBtIG0jISBVAyHbPIAfZQLytDAJCAZVCFUMVQxVDFUMVQxVC1UMVQdVDFUMVQxVDFUMVQ3bPIAfZQLytI6AAtMAl4sIcQEwI9kBMCEB4XAj2YN3CAE8joAgWQFVAeBxlfK0MCDZcRS6k3Aj2eGLCNEicFnZCQEuXwVVD9MAjoAiIeGBAgAS1xgBMCFVAdkKAShxFLAB0wCOgCIh4QHT/wEwIVUB2QsDiO1ABMMAAtM/0x/TH5UB7VDbMIEBACMBuY6A4SLBEo6A4QLAEPKpMATyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6ANMAFw4MAf6OejDV0wCOaDDV0wCOVjDRMNEw0XD4ZFuAH2HTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAQcRLPC2GAEBPPCx8DbsAAcbATzwsAyQHMyXD7AFWgVQxV/oAcZQHZIiHhAfpAATAhVQHZIiHhAfpAATAhVQHZIiHhDQASAfpAATAhVQHZAmIiwROOgOEG8nntRNDTAAHyf9TU1NMH0gfT/9N/1fQE+gDTAI6AIiHhAfpAATAhVQHZFQ8BJDDV0wCOgCIh4QH6QAEwIVUB2RABJDDV0wCOgCIh4QH6QAEwIVUB2REBZjDRMNEw0fgocPhkINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2RIB/MhxIQHPCwBwIgHPCwCC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdIwHPC/+AFM8LDwXSBzBSBsoHySHMUnPOcM8LIHASzws/gCth0wEEyYATYVUCzFGVzoArYVUD9AADwAJQI8zJcBLPC//MyVUPVQfMH8sHcBMB+s8LfxzL/x3MyQrysHMhAc8LAXAiAc8LAcnQAc4M+kAwUAzOghIBNAAULAHPCycq12XPCw90LQHPCwKAEnEUzwthgBIfzwsfBc8KB4Lw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0Szwv/C/kAG88L/8nQ+QIaFAA8zwv/ydBQAs7JUArMyXD7AFV2VQ+AD4ASY4AeZQHZAUYCwBPyqTAE8nntRNDTAAHyf9TU1NMH0gfT/9N/1fQE+gDTABYB/I5zMNXTAI5hMNXTAI5PMNEw0TDRcPhkXw6AE2HTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACznHPC2GCGBMAAAAqEs8LP8kBzMlw+wCAE1UBVfOAEWUB2SIh4QH6QAEwIVUB2SIh4QH6QAEwIVUB2SIh4QH6QAEwISAChoECACMBuY6A4YEBABO68qkwBPJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkeGAEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2RkBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkaAYQB0QTRCNFw+GRbBvLgbcAAKm7DALHy0G34KCDTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkbAf7IcSEBzwsAcCIBzwsAgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SMBzwv/gBTPCw8F0gcwUgbKB8khzFNyznDPCyBwIwHPCz+AMmHTAQTJVhxVAsxRt86AM2FVA/QAA8ACUCPMyXASzwv/zMlWGVUJzFYYAcsHHAH+cM8Lf1YWAcv/zMkB8rCCEgE0ABQlAc8LJyHXZc8LD3MmAc8LAXAnAc8LAcnQAc6C8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdEs8L/wL5AIEBACcBzwsfA8v/A/pAMAHOUeXOAsl0JgHPCwKAGmFVAsyAGWEBzB0A9IAYYQHLBwjPCgcB0HEfzwthDvkCzwv/ydBQBM6AE2FVBcv/gBJhAct/VQ8BzHHPCwAXzo4nMAHJUAPMyVAFzMkBzMlQCMzJcPsAgQEAVfCAEmGAD4AUY4AgZQHZKyHhUKPOInBVGFUYAVUJVQdVCVUGVQhVClUKVQrZAniBAwAjAbmOgOGBAgATuvKpMATyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6ANMAjoAiIeEB+kABMCFVAdkhHwH8MNXTAI5vMNXTAI5dMNEw0TDRcPhkXwWAHGHTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAgQIAUCTOgQIAE88LHxjMFsxxFs8LYVBFywfL//goAc7JUAPMyXD7AFVQVQdV+YAXZQHZIiHhAfpAATAhVQHZIiHhAfpAATAhIAAGVQHZAWSBAwATuvKpBfJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoA0wCOgCIh4QH6QAEwIVUB2SIBJDDV0wCOgCIh4QH6QAEwIVUB2SMBJDDV0wCOgCIh4QH6QAEwIVUB2SQBTDDRMNEw0XD4ZF8FCtXT/46AAdMAmXBxJFURAVUR2SIB4fpAcCTZJQGKAdHIcCEBzwsAcCEBzws/+CgjzhjL/1DHzBrMjoACownPCwdwzwt/VQ8By/+acSoBzwsAE84h2SkB4SpVAjAiVREBVRHZJgH8gvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SoBzwv/gBTPCw8oAcoHyVALzHAbzwsggCJh0wGAI2FVAvQADMkCwAJQLMzJUAbMyVACzMkJ8rBzKAHPCwFwKQHPCwHJ0AHOBPpAMFAEzoISATQAFCgBzwsnKddlJwDSzwsPdCkBzwsCgQMAcRTPC2GBAwAbzwsfCM8KB4Lw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0Szwv/CvkAGs8L/8nQ+QIZzwv/ydBQBc7JUAbMyXD7AFUFVTdV7IAZZQHZAtTfAdAg0wAB8nAg1gGW7UDtUNswAdMAjoABMCEB4TAE0h8BwP/4APLgZdMfghBDhPKYErry4GXtRNDTAALTfzAB8n8B1NTU0wfSB9P/03/V9AT6AI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZLikBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkqATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZKwGYAdEE0QjRWy1WFbny0GbIcCEBzwsAgBVhIcyAFWEBzIAUYQHMUeL0AFAN+gKAEmFVDcsHVQ6AEmGhAYARYc8KBwXAAFUPVQXL/xLLfywB/o5lBMAAjkGOGDAOyVAOzMlQBMzJUAnMye1UcFXgXw8B2SIh4HEWzwsAGs4kcFUhXhBVPF4gVQ9VDlUsXhBVDVUMVQ9VD1UP2Y4QLlUCMCFVAVUjVQZVBlUV2SMB4HElAc8LABfOJtmOFnAUzwsAVQYwI1UBVQpVGFUKVUZVGdktABgrAeFxFM8LABvOItkDom0gbVUGISBVAyHbPIAfZQLytDAJCAZVCFUMVQxVDFUMVQxVC1UMVQdVDFUMVQxVDFUMVQ3bPIAfZQLytI6AAtMAl4sIcQEwI9kBMCEB4XAj2YN3LwE8joAgWQFVAeBxlfK0MCDZcRS6k3Aj2eGLCNEicFnZMAT8XwVWE9cNH2+jnXCAEmJzgBRjgBVlAdnhcROwwwBWFddJ8rCf8nlwgBFic4ATY4AUZQHZIgHhgBVh0x+OEFvyeXCAEWJygBNjgBNlAdkiwQ6OgOEiwQyOgOEiwQuOgOECwAoi4e1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6ANMAV0M5MQEcjoAiIeEB+kABMCFVAdkyASww1Y6AAdMAlnAjcFUg2SIB4fpAcSTZMwEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TQB/gHRBNEI0VuAEWH6QNN/cPhk1DAE8tBsCm7y4Ggi+QCC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLduvLgZ/gq0CDXSsAD8uBFyILw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0hAc8L/4AUzwsPVhA1AfwBygdwIgHPCwBxIwHPCwD4KHAlAc8LAVITznEkAc8LAQXJB9RRhcx2JgHPCwJwF88LP1LIzHAUzwsgBcmAMWHTANMADNRwLQHPCx90LgHPCwIG0ALVVQ/TAArJVjVVDvQAcR7PCwBWIoARYcxVBlUPzlYeVQvKBwjJDPpAMAY2Afz6QDBQTszJUO/OcM8L/x7MyVYdVQzMVhwBywdwzwt/VhoBy//MyVAMzHDPCwDJIPkAFc8L/8nQUAvOgBRh+gJWLQH0AHD6AnD6AnPPC2ETzHHPCwAWzMlw+wByVhEB+wLIdiEBzwsDcBLPCwHJ0AHOznD6AoAqYQH0AHD6AnA3Af76AnDPC2HJgQCC+wDIcCEBzwsAgBlhIcyAGWEBzHEjAc8LAFG7zoAZYVUBzFDT9ACAEmH6AnHPCwAYzgGAFWHPCweAFGEBygeAE2EBy/+AEmEBy3+OHTAHyVALzMlQCszJUAXMye1UeoAgYoAiYYAhZQHZKyHhVQ9VCs4hcFUcOAAcAVUrVQZVOlUJVStVDdkBZjAC8nntRNDTAAHyf9TU1NMH0gfT/9N/1fQE+gCOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2ToBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNk7ATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZPAFQAdEE0QjRW4AVYdMfcPhk0/+OgAHTAJlwcSRVEQFVEdkiAeH6QHAk2T0B7IAvYdMA0wDTAPpA7UdvEG8XAfpACNXTf/goAdEK+gAwBG8QjoAKowWhcvsCyHAhAc8LAHAhAc8LP1HCzlUPAcv/ViNVDMxWIgHMViEBywdwzwt/Vh8By/+acSQBzwsAHs4s2SgB4SJVBTAsVQFVZlUNVTpVHNk+Af6C8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdJAHPC/+AFM8LD1YhAcoHcCUBzwsBcSUBzwsBAsl2JgHPCwIGzHAUzwsgVh9VAswCyXAnAc8LH3QYzwsCAdCAFmHAAHEVzwsAVjlVA/QABclQJ85WI1UCygcHyVBkPwH+zMlQBMzJUA/MyVACzHDPCwDJIPkAFM8L/8nQUgPOUAT6AlYzAfQAcPoCcPoCc88LYRLMcc8LABLMyXD7AMhR3csfznYtAc8LA3AezwsBydAByQ3OFM5w+gKAL2EB9ABw+gJw+gJxzwthG8zJgQCA+wDIcCEBzwsAgB5hIcyAHkABWGEBzIAXYSP0AIAXYfoCgBxhVQHMgBthAcsHgBphAcoHgBlhAcv/gBhhAct/QQHsjnQPwACOUY4eMAXJUAXMyVUPzMlQAszJ7VSAC4AmYoAoYYAnZQHZIyHgcRjPCwCAFWEBzidwcoATYwFVi3KAEmNVDnKAEmMBgBNhgBFhgBNhgBRhgBRh2Z0kVQMwIVXEgBJhVU3ZLQHgcSYBzwsAgBJhAc4h2UIARo4RcBPPCwBVBDAiVdWAFGFVXtlWFQHhcRPPCwCAFWEBziLZAnIwAcENjoDhAfJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlORAEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2UUBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlGAWIB0QTRCNFbgBRh03/6QNP/1XBw+GSOgALTAJ5wJHBVAwFVEgFVBFUE2SIB4fpAcSXZRwE2AdP/1Y6AAdMAmXBxJFURAVUR2SIB4fpAcCTZSAHaAdEE0Y6ABsAAVQ/y4G1WGy+58tBqyHAhAc8LAHAhAc8LP1YjAcxWIgHM+CgjzlUPAcv/AVYhzwsHgDhh0wDTANMAcBXPC38E+kAwViNVBMv/nCZVAjAuVbNVD1U82SkB4HEoAc8LAFUPAc4v2UkB1ILw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0pAc8L/4AUzwsPViUBygfJKMxwEs8LIFY5AfQAAcl0KgHPCwKCEgE0ABQrAc8LJwFWJ88KB1AjzMlQCMzJUALMySDXZRfPCw9KAf6C8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdzwv/BvkAFs8L/8nQ+QIVzwv/ydAUxwXy4Gv4RIIQgAAAACGxghD/////ErxwWOMEdiUBzwsCcCcBzwsBydABzoALJwHPCx9WFlUBzgLPCx9xzwsAgBJhAc4cy/9wSwFkHPoCCqOANGFVCvQAcPoCcPoCcc8LYY6AIiHgcSgBzwsAGs4pVQhVFwFVA1VEVQlVCdlMAdAwVhFVBct/cM8L/3HPCwBwF88LgMlQBszJgBFhwAALzIAcYYARYaEByVAGzMmAQPsAyHAhAc8LAIAhYSHMgCFhAcyAG2Ej9ACAG2H6AoAfYVUBzIAeYQHLB4AdYQHKB4AcYQHL/xjLf00A2I5DcRTPCwCAE2Ehzo4eMAPJUAPMyVADzMlQAszJ7VSADIAnYoApYYAoZQHZLyHggBdhVQLOIXBVFQFVA1UGVQNVFVUG2Y4VcBnPCwBVAzAngBJ1Y4AXYXWAE2PZVhgB4XEZzwsAgBhhAc4o2QFkAfJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlPATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZUAEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2VEBRAHRBNEI0XD4ZI6AgBdh0wCZcHEkVREBVRHZIgHh+kBwJNlSAZIB1fpA03/RD/LgbYAvYdMA0wDTAPpAMFYTIccF8uBk+Cgg0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZUwH++ESCEIAAAAAhsYIQ/////xK8cFjjBMhRqs6AGGEBy396KwHPCx8Syx9xKwHPCwBwE88L/w2jQH7jBHEWzwsAcBzPCwBSTc5wKgHPCwCC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdKwHPC/+AFM8LDwTSBzBSBVQB+soHyVB9zlHGzFFaznAnAc8LP3ATzwsgDsmAE2HAAA7MBslWNFUO9ABWI1UDzHAUzwv/dC0BzwsCdhrPCwJwLgHPCwGCEgE0ABQfzwsnUEPMyQ3J0AjJUIPOUFjKB1C2zMlWIFUBzFYfAcsHcM8Lf1YdAcv/zMkg12UTzwsPVQH8gvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3c8L/wL5ABLPC//J0PkCE88L/8nQUAPOcPoCgC5hAfQAcPoCcPoCcc8LYRbMyYBA+wDIcCEBzwsAgB5hIcyAHmEBzIAXYSP0AIAXYfoCcc8LAIAUYQHOgBthVQHMVgDugBphAcsHgBlhAcoHgBhhAcv/gBdhAct/jj+OHTAEyVAEzMlQAszJAczJ7VSADYAkYoAmYYAlZQHZLSHgcRfPCwCAFWEBziZwVQZVBFUDVRVVBFUGVQdVB9mcI1UFMCFVVlUMVWbZVhEB4XElAc8LAIASYQHOIdkDkoEEACMBuY6A4YEAyiMBuY6A4QLADiLhAvJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlpXlgBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlZATIB1Y6AAdMAmXBxJFURAVUR2SIB4fpAcCTZWgH8AdEE0QjRW4ApYdMAcPhk0wAEwAAE0wCAGWHTH8h2IQHPCwNwIgHPCwFQQssfBPpAMAHJ0FADzhLOcPoCgCphAfQAcPoCVhNVAst/cBL6AgHJcRLPC2HMyYBA+wDIcCEBzwsAgBlhIcyAGWEBzIASYSP0AIASYfoCgBdhVQHMWwEwgBZhAcsHgBVhAcoHgBRhAcv/gBNhAct/XAH8jmqORwqjjh4wA8lQCczJUALMyVAHzMntVIAOgCBigCJhgCFlAdkgWQFVAeBxFs8LAB/OJHBVO1UdAVUsVRxVDFULVQ1VD1UPVQ/ZjhIkVQMwIVUBVQxVZVUMVRtVG9ksAeBxJgHPCwAdzizZjhBwE88LAFUEMCJVhVUOVVnZXQAeVhAB4XETzwsAVQ8BziLZAXKBAMoTuiLhAvJ57UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlfATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZYAEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2WEBeAHRBNEI0VuAFWHTH9N/03/Tf9TUcPhk0wfT/9X6QNXTAI6AIiHhAdP/0wBVATAiVREB4QH6QAEwIVUB2WIBKDDV0//TAI6AIiHhAfpAATAhVQHZYwGQMNTV+kDRAdEE0QXRWw7y4GkwgDNh0wDTANMA+kABVhLHBQH6QPoAMALy4GkwJNDT/46AAdMAmXBxJFURAVUR2SIB4fpAcCTZZAG+7UdvEG8XAtN/038wA/goAW8QjoAEowqhcvsCyHAhAc8LAHAhAc8LP1EyzhrL/1YrVQLMVioBzFYpAcsHcM8Lf1YnAcv/mnEjAc8LABfOJNkrAeEpVQYwJVUBVUJVFdllAfyC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdIwHPC/+CEEOE8pgkAc8LH1YYAct/VhwBzoAUEs8LD1YqAcoHcCUBzwsBAclQgst/cSwBzwsBdi0BzwsCVihVAcxxE88LAFA9zHAUzwsgCMl0Fs8LAgXQgBxhwABmAf5WQFUJ9AAFyYASYVUNzHEVzwsAUDXOVilVB8oHgBhhgCdhoFBHzMlQB8zJUAnMyVADzAHJcBLPCwDJIPkAE88L/8nQUgXOUAX6AlY4AfQAcPoCcPoCc88LYcxxzwsAE8zJcPsAyHYhAc8LA3AiAc8LAcnQgBVhVQLLH3DPCx8TZwG6zlAizoATYQHOcPoCgDRhAfQAcPoCcPoCcc8LYQHJAczJgQCA+wDIcCEBzwsAgCNhIcyAI2EBzIAdYSP0AIAdYfoCgCFhVQHMgCBhAcsHgB9hAcoHgB5hAcv/FMt/aADajkRxFM8LAIAVYSHOjh8wA8lQA8zJUAPMyVACzMntVIEAyoAqYoAsYYArZQHZKCHggBlhVQLOIXBVFQFVA1UGVQNVFVUG2Y4VcBXPCwBVBDAkgBN2Y4AZYXaAFGPZVhoB4XEVzwsAgBphAc4k2QKEgQUAIwG5joDhgQQAE7oi4QLyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6AI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZcGoBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlrATIB1Y6AAdMAmXBxJFURAVUR2SIB4fpAcCTZbAHCAdEE0QjRcPhkW4ApYdMA0wDIdiEBzwsDcCIBzwsBA9MAgBxh0x8wUATLHwP6QI6ACaMGydBQBM7OcPoCgCthAfQAcPoCcPoCcc8LYZpxFM8LACwBzifZJQHhcBTPCwAn2W0BjslQA8zJgED7AFsEwADIcCEBzwsAgBhhIcyAEWEj9ACAEWH6AoAXYVUBzIAWYQHMgBVhAcsHgBRhAcoHgBNhAcv/gBJhAct/bgH8jl+OPo4fMAPJUAPMyVACzMlQDczJ7VSBBACAIGKAImGAIWUB2Soh4HEWzwsAHs4kcFV2VRtVC1UKVQxVDlUOVQ7ZjhAjVQIwIVUBVWNVClUKVRnZJgHgcSUBzwsAG84q2Y4WcBPPCwBVBTAiVQFVDlVnVQ5VO1Ud2S8B4XETbwAOzwsAH84h2QFygQUAE7oi4QLyee1E0NMAAfJ/1NTU0wfSB9P/03/V9AT6AI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZcQEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2XIBJAHV0wCOgCIh4QH6QAEwIVUB2XMBVjDRMNEE0XBw+GSOgIAVYdMAjhBwI3BVEwFVAVUTAVUFVQXZIgHh+kBxJNl0Af4B1fpA0//TD9EN8uBtVhnQINdKwALIAfLgRVPwzlFBzhPL/x7LD8lQAsxwIgHPCwBwIQHPCwACyVHjznQkAc8LAnAkAc8LACTJgDNh0wDTANMA+kAwUEXMVh1VBcoHgBRhVQbMyXEZzwsAGMxxzwsAAclwJwHPCx9WMQH0AFYedQH+AcxwzwsIzMkBzHDPCwDJ+QAWzwv/ydAjAccF8uBudhTPCwJwFs8LAcnQUAXOzgXAAHAW+gKAK2EB9ABw+gJw+gJwzwthyYBC+wDIcCEBzwsAgBthIcyAG2EBzIAUYSP0AIAUYfoCcc8LAIARYQHOgBhhVQHMgBdhAcsHgBZhAXYA3MoHgBVhAcv/gBRhAct/jjyOHTADyVADzMkBzMkBzMntVIEFAIAiYoAkYYAjZQHZKiHgcRbPCwAbziRwVUZVCVUFVQdVGFULVQtVC9mOEiNVBTAhVQFVLFVJVQ5VO1Ud2VYSAeFxJQHPCwAfzi7ZAbztQI5WgBlh7VALgBFhgBNhgBRhcF/wcF8wgBNhgDBhgCJhcoAvY4AkYYAwYXeAH2OAIGGAJWGAIWGAJmF0gC1jcoAnYwGAMGGAKmF1gCxjgBCAIGOAMGGAMGFVD9MAeAP+jiVxcF/AVQ4wVQtVGVUJVQ+ADoARY4AbYYAbYXeAFWNzgBxjXhDZIgHhINMAji9xcF/AVR2AEWFfA1ULVRlVCVUPgA6AEWOAG2GAG2F1gBdjgBxhcoAbY3KAHWMB2XEjAbmOgOBxE7oi4dWOgAHTAJlwcCRVEQFVEdkiAeHTBHx6eQAGcSTZAfyOeY5njlWOQwLRcV8gVQRVF1UbVQ6AEmGAFGFygBZjc4AZY18NVQxVGlUKVQ+ADoARY4AcYYAcYXOAGmNygBtjAXOAGmNygB1jAdkD0wCUcHAm2SIB4dQBcSbZA9MAlHBwJtkiAeHUAXEm2QLTAJRwcCXZIgHh1AFxJdkC0wB7ACybcF8gJlURVQNVEtkiAeHTANMAcSbZARaOgCFVIV4QVRIB4n0BLo6AAdMAmXBwJFURAVUR2SIB4dMEcSTZfgE2joAC0wCbcF8gJlURVQNVEtkiAeHTANMAcSbZfwEkjoAC0wCUcHAl2SIB4dQBcSXZgAEkjoAD0wCUcHAm2SIB4dQBcSbZgQH8AtMAjkVxcF8gcVUFVQhVG1UOgBJhgBRhdYAWY18MVQ1VG1ULVQ+ADoARY4AdYYAdYYAdYXKAHGMBc4AZY4AcYYAcYYAdYYAeYdkiAeHUAXBxXyBVBVUIVRtVDoASYYAUYXWAFmNfDFUNVRtVC1UPgA6AEWOAHWGAHWGAHWFyggAugBxjAYAcYXKAG2MBcoAbY4AdYYAeYdkB7O1AjjqAEmHtUA4PVQ+AEWFwX/BwX8CAHGGADYAgY4ApYYAtYXSAJ2NygCtjAYAsYYAtYYAVgBljgC5hgC5hJtMAjizTANMA0wD6QPpA+gD0BPoA+gDTP9MfcXBVDYAVYVtVDlU/VadVL14QgBNh2SIB4Vsm0wGEAf6OKm1tcnBfICVwX1BVHFtVDVU+VSuAEWFVHYARYVU8gBFhgBFhgBNhgBNh2SLBA444AsADIuH6QAEB+kABAdM/0x8BbW1xcnBfQFUNgBVhW1UOVT9VL1UfVQ2AEWFVO1UfAYASYYATYdnhAsACIuH6QAEB+kABAfoAbW1xcCNwhQBOXzBxVQ2AFWFbVQ5VP1UvgBFhVR0BgBFhVTyAEWGAEWGAEmGAE2HZ",
        code: "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",
        codeHash: "1b51356773d6276e6654e863d1143f64f3ac6f318a9b7c2815494690dc9f1330",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: WrapperInitInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "init", input);
    }

    async init(input: WrapperInitInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperOnTip3TransferOutput,
    }> {
        return await runHelper(this, "onTip3Transfer", input);
    }

    async onTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction,
        output: WrapperOnTip3TransferOutput,
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runBurn(input: WrapperBurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: WrapperBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async transferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runCloned(input: WrapperClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperClonedOutput,
    }> {
        return await runHelper(this, "cloned", input);
    }

    async cloned(input: WrapperClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperClonedOutput,
    }> {
        return await runLocalHelper(this, "cloned", input);
    }

    async runSetCloned(input: WrapperSetClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setCloned", input);
    }

    async setCloned(input: WrapperSetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCloned", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrapperGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetTip3ConfigOutput,
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async getTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperGetTip3ConfigOutput,
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperHasInternalWalletCodeOutput,
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async hasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperHasInternalWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetReserveWalletOutput,
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async getReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperGetReserveWalletOutput,
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

    async runGetTestValue(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetTestValueOutput,
    }> {
        return await runHelper(this, "getTestValue", {});
    }

    async getTestValue(): Promise<{
        transaction: Transaction,
        output: WrapperGetTestValueOutput,
    }> {
        return await runLocalHelper(this, "getTestValue", {});
    }

}

