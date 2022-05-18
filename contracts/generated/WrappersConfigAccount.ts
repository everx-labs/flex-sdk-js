
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class WrappersConfigAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"optional(tuple)"},{"name":"old_token_version","type":"optional(uint32)"},{"name":"wrapper_deployers","type":"address[]"},{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"}],"outputs":[]},{"name":"onWICsCloned","inputs":[{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"}],"outputs":[]},{"name":"addWrapperType","inputs":[{"name":"keep_evers","type":"uint128"},{"name":"type","type":"uint8"},{"name":"wrapper_deployer","type":"address"}],"outputs":[]},{"name":"addWrapper","inputs":[{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"symbol","type":"string"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[]},{"name":"unlistWrapper","inputs":[{"name":"wic","type":"address"}],"outputs":[]},{"name":"cloneUpgrade","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"getDetails","inputs":[],"outputs":[{"name":"token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"},{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"},{"name":"salted_wic_hash","type":"uint256"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"},{"name":"wic_code","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"token_version_","type":"uint32"},{"name":"deployed_","type":"bool"},{"name":"keep_evers_","type":"uint128"},{"name":"workchain_id_","type":"int8"},{"name":"wrapper_deployers_","type":"address[]"},{"name":"first_wic_","type":"optional(address)"},{"name":"last_wic_","type":"optional(address)"},{"name":"wic_count_","type":"uint32"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECVwEAFtAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIBEHA6T/AdBtbSIhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZVEgIATyOgCBZAVUB4HGV8rQwINlxFLqTcCPZ4YsI0SJwWdkJASxfBQ/TAI6AIiHhgQIAEtcYATAhVQHZCgEucYASYQGwAtMAjoAiIeEB0/8BMCFVAdkLAqrtQAXDAALTP9Mf0x+TAe1QghA2j/wcIwG5joDhghAdDxJuE7ryqTAE8nntRNDTAAHyf9Mf0wDTf9IH0x/0BI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZDwwBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkNAf4B0x/R+Chw+GT4KiDQINdKwAMi12UD+QAB8uBFAdTU1fpA1DDQyCHXSsAC8uBFURHOUYHOFsv/FssPyVAGzIArYdMBAskBwAIJwAAJ8rBzJQHPCwFwJgHPCwHJ0AHOAvpAMFACzoIQnQ8SbiUBzwsfgBdhAcsfcRLPC2EBgBNhDgD2zwsfgBJhAfQAjk8D+QCOKBnLHxrL/8kBzMlQCMzJcPsAghAdDxJugBNicoAVY4AOgBhjgCNlAdmOFHAYzwsAVQEwJlUBVQtVc1ULVRrZLAHgcRjPCwAczibZjhBwEs8LAFUDMCFVZFULVUfZVhAB4XESzwsAVQ8BziHZAWSCEDaP/BwTuvKpMATyee1E0NMAAfJ/0x/TANN/0gfTH/QE0wCOgCIh4QH6QAEwIVUB2RAA/DDV0wCObDDTH9Fw+GT4KtAg10rAA/LgRdTU1YAjYdMBAcACAvpAyATysHMkAc8LAXAlAc8LAcnQAc4D+kAwUAPOcc8LYYIQto/8HBTPCx/OAdQwAczJAczJcPsAghA2j/wcVfBygBJjgA6AFWOAIGUB2SIh4QH6QAEwIVUB2QPG3wHQbSHTAAHycCDWAdMAMPJ3MCFtVQMhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZVEgSATxxFrCOgCYh4HGV8rQwINlxFbqTcCTZ4YsI0SNwWdkTAoiW7UDtUNswVhfHAQPDAI6AJCHhVhnHAiHhMPJ5+CrQINdKwAPy4EXtRNDTAALU1NUE8n9fAwHTH9MA03/SB9Mf9ATTABRHBNgwVhjXDR9vo5xwVSCAF3VjgBplAdnhMFYZ10nysI6A4YAYYdMfnVvyeXCAFnJjgBZlAdmCEDtol5MjAbmOgOGCEB0DZVwjAbmOgOGCEBvsdagTuiLhAvJ57UTQ0wAB8n/TH9MA03/SB9Mf9ARGNB0VAS6OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2RYBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkXAf6AEWHTf9N/BNMf0QTTf9N/1PgqINAg10pw+GTAAwPTB9QwBPLgRQHU1NX6QIAzYdMA0wDTAPpAMCXHBQTUMATy4GRfA1YYJrzy4GuAICZWGVUB9A5vofLgQAHQINdKwALIAfLgRQL6QDAiznAjAc8LAQjPCwf4KCPOUKrMB8lwGAH+IwHPCwB6JAHPCx8q+QAOzwt/diIBzwsCA9AKyVFFzlDsy/8K12UazwsPyXAqAc8LAHAhAc8LACHJAcxQLMxxUUvMUKPOcB7PCwAJyXESzwsAzHHPCwAKyXAazwsfVjYB9AAbzHDPCwgYzMlQCMxwzwsAySD5AAnJdBnPCwJWGhkC/gHKBxnL/1B1zATJBMkE0FIJzlAK+gJWMQH0AHD6AnD6AnPPC2EWzHHPCwASzMlw+wCOgI4lcSZVAlUFVRdVCl8FIlkBVStVBVUNVRoBVQlVC1UNVQxVDVUN2SoB4ch2IQHPCwNwIgHPCwHJ0AHOHc6ALC0BzwshUn7OyVANzMkbGgA+UMf6AgqkVi9VCvQAcPoCcPoCcc8LYRfMyXD7ADAo2QH4chf7Ash0IQHPCwNwEs8LAcnQAc7OcPoCgCthAfQAcPoCcPoCcM8LYcmBAIL7AMhwIQHPCwCAFWEByx+AFGEBywCAE2EBy3+AEmEBygeAEWEByx9VDwH0AI4icRLPCwATzhPLH8kBzMntVIIQG+x1qFXAgBSAD2OAIWUB2RwARplxEs8LAB7OLdkuAeBwEs8LAFUCMCFVAVV2VRtVDVUNVRzZAoKCEDbDkcgjAbmOgOGCEB0DZVwTuiLh7UTQ0wAB8n/TH9MA03/SB9Mf9ASOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SseATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZHwFoAdMf0XBw+GSAEWHTf46AAdMAjhRwXyAlcFUFVRZVAlUIVRZVCFUX2SIB4dN/03/Tf3Em2SABLo6AAtMAmXBwJVURAVUR2SIB4dMfcSXZIQE6AdMf9ATVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkiATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZIwF+AdMf0QbAAAXRDMAAD8AAgCZh8tBs+Cgg0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZJAPmMNIHjoCOgFYVAeAF8tBtyHAhAc8LAIATYSHLH3DPC6hWRQH0AHDPCwBwIgHPCx/JgEVh0wBQI8x0Fc8LAgLTANMA+kD6QPgqUrjKBwH6ADAJyXEZzwsBF8xxzwsAF8xwzwsAyfkAFc8L/8nQUATHBfLgaCknJQH+jj5fBYAbYYAcYVUSVUVfByOAD4AXY4AmYXKAJWMBcoAlYwF1gCJjgBthdYAfY4AhYXOAJGOAJmFygCRjgCZh2QEwLQHgXwNWFlYYoFYWoBuoVhqgGrzy4GpyVhkB+wLIcCEBzwsAUUHOVhAByx8vAfQAcCUBzwsgcCMBzwsBySYArHYXzwsCBtABVizPCx8CyVACzAXOG85w+gKAQWEB9ABw+gJw+gJxzwthA8mADBvPCx+AFmEBy3+AFWEBy3+AFGEBy39wzwsAGszJUALMyYEAgPsAMCDZAf74KtAg10rAA/LgRdTU1fpAMIBHYdMA0wDTAPpAMCTHBfLgZXJWIwH7Ash0IQHPCwNwEs8LAcnQAc4UznD6AoBKYQH0AHD6AnD6AnDPC2HJgQCC+wBfBoAeYYAfYVUCVXRfCSKAFmGAFWGAF2GAFmGAF2F1gBNjVQtVT3KAE2MBKAAYc4AVY3KAFWOAF2HZAf7IcCEBzwsAgCRhIcsfcc8LAIAVYQHLfxnKBx3LHw3AAFC99ACOP44hMIAUYVUHyx/JAczJ7VSCEB0DZVyAIGKAFIAiY4A0ZQHZLiHgcR7PCwATzixwVUhVFgFVOVUKVQxVDVUN2Y4VcBLPCwBVAjAhgBF0Y4AVYXSAEmPZVhsBKgAa4XESzwsAgBthAc4h2QFwghA2w5HIE7oi4QLyee1E0NMAAfJ/0x/TANN/0gfTH/QEjoAB0wCZcHAkAVURVQLZIgHh+kBxJNksATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZLQFGAdMf0XD4ZIARYdMfjoAB0wCZcHEkVREBVRHZIgHh+kBwJNkuAfz4KiDQgC5h0wDTANMA+kAwJNdKCNN/03/V03/Tf9N/DsADDtMf0x/0BNFVD/LgRQ3U1NX6QDAsAccF8uBkXwNWIiK58uBmVh668uBncScBrFM0oCOgVhSo7UcCoAFvEG8XbxC58uBqyHIoAfsCcCEBzwsAUSLLH3DPC6hWOgEvAf70AMhwIQHPCwGCEB0DZVwiAc8LHwHJcBTPCwBwJgHPCx/JcCQBzwsAdiEBzwsCUCPMdBfPCwIF0FDTy3+AGWHAAHESzwsAUDLOViNVBMoHBclxLQHPCwFWEwHMcc8LACEBzHDPCwBQo8t/cRfPCwGAEmEBzHHPCwBQhst/Fst/MAGqcc8LAAXJViNVBcsfUHXMcM8LAMn5ABPPC//J0FIFzlAH+gJWNwH0AFYcVQLLH3AS+gJw+gJzzwthFMxxzwsAjoCTJyHZVhgB4XEnAc8LAFYZAc4h2TEBRIAYYcAAUOb0AI6AJCHgcRnPCwBWFQHOKAFVCVViVQlVCdkyAf4wVhNVCMsfyVANzMlQDMwMowzJTH3jBFC1zMlw+wDIdiEBzwsDcCIBzwsBydABzhXOcPoCgDJhAfQAUNTLH3AU+gJQk85wE/oCAslxE88LYRLMyYEAgPsAyHAhAc8LAIAZYSHLH4AZYQHLAIAYYQHLf4AXYQHKB4AWYQHLH4AVMwDSYQH0AI5Cjh4wUOLLH8kBzMntVIIQNsORyIATYoAUgBVjgCdlAdkqIeBxFc8LAFUPAc4kcFUfAVWIVR5VDlUNVQ+AEWGAEWHZjhBwEs8LAFUDMCFVpFUPVUvZLgHgcRLPCwCAE2EBziHZAnqCED7olbYjAbmOgOGCEDtol5MTuiLhAvJ57UTQ0wAB8n/TH9MA03/SB9Mf9ATTAI6AIiHhAfpAATAhVQHZOjUBMjDVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNk2AVAB0x/RcHD4ZI6AVQ/TAI4QcCNwVRMBVQFVEwFVBVUF2SIB4fpAcSTZNwEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TgBlAHTH9EM8uBpgC1h0wDTANMA+kAwVQ/HBfLgachwIQHPCwCAGmEhyx+AGmEBywCAGWEBy3+AGGEBygeAF2EByx8GwACAFmFVBvQAOQDEjjyOITCAEWFVAssfyQHMye1UghA7aJeTgBRigBWAFmOAKWUB2SIh4HEVzwsAGM4jcFUlVSRVBVUIVQhVCNmOFnASzwsAVQQwIVUBVTlVKVUMVSpVG9ktAeFxEs8LAB3OLNkCiIIQWDQyHCMBuY6A4YIQPuiVthO6IuEC8nntRNDTAAHyf9Mf0wDTf9IH0x/0BI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZPzsBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNk8Af6AJ2HTANMA0wAF0x/RBfpAgBZh+kAwAfpA+CrQINdKcPhkwAMC+gAwAvLgRdTU1fpAMBfHBfLgZO1HCsAACm8QbxdvEBOicvsCyHYhAc8LA3AiAc8LAcnQAc4VznD6AoAvYQH0AIANFc8LH3AV+gIEyXAV+gJxzwthFMzJgQCAPQH++wDIcCEBzwsAgBhhIcsfgBhhAcsAgBdhAct/gBZhAcoHgBVhAcsfgBRhAfQAjjyOHjBQwssfyQHMye1UghA+6JW2gBJigBSAFGOAJmUB2Swh4HEVzwsAHs4jcFUcAVVnVSpVC1UOVQ5VDtmOEHASzwsAVQMwIVWEVQ1VSdlWEj4AHAHhcRLPCwCAEmEBziHZAXCCEFg0MhwTuiLhAvJ57UTQ0wAB8n/TH9MA03/SB9Mf9ASOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2UABMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlBAsAB0x/RgBFh03/TB/gq0CDXSnD4ZMADAvpAMALy4EXU1NX6QDCALWHTANMA0wD6QDAkxwXy4GRfA1YSVQW68uBryBXOydCAIAFWEoASYVUC9BZyFvsCXwPTAQ2kjoAiwQNEQgHOjl8CwAPytI46yHMhAc8LAQPTCNIfItcYmcsIFMofFM4m2QajnHEXzwsAGMsEFs4j2eFwF88LAFUVWyVVEQFVM1UV2Q7TAJ5tcXBWEgFVEgFVA1UD2SIB4dMEIdcYcFYS2eECwALytEMAto47yHIhAc8LAQPSB5gUygcSy/8m2QSjAdP/nHEWzwsAF8sEFc4i2QEwIgHhcBbPCwABVQVbI1UBVSJVE9kO0wCebXFwVhIBVRIBVQNVA9kiAeHTBCHXGHBWEtkBsHQjAc8LA3AUzwsBydBQA84CydBQAs4IwABwGfoCgCxhAfQAcPoCcPoCcM8LYcmBAIL7AMhwIQHPCwCAFmEhyx+AFmEBywCAFWEBy3+AFGEBygcWyx8X9ABFAM6OQY4eMFB0yx/JUAPMye1UghBYNDIcVfCAFIASY4AkZQHZKSHgcRjPCwAaziZwVQlVB1UJVRdVJl4QVQdVClUKVQrZjhZwEs8LAFUBMCFVIV4QVR1VVlUsVR3ZLwHhcRLPCwAfzi7ZAVTyefgq0CDXSsAD8uBF7UTQ0wAC1NTVBPJ/XwMB0x/TANN/0gfTH/QE0wBHAMaOVTAI+kAwCNXTAI4+MNMf0XIY+wJwyHQhAc8LA3ASzwsBydABzhvOcPoCgCFhAfQAcPoCcPoCcM8LYcmBAIL7AIAWgAtjgB9lAdkiIeEB+kABMCFVAdkiIeEB+kABMCFVAdkBvO1AjlaAGWHtUAuAEWGAE2GAFGFwX/BwXzCAE2GAMGGAImFygC9jgCRhgDBhd4AfY4AgYYAlYYAhYYAmYXSALWNygCdjAYAwYYAqYXWALGOAEIAgY4AwYYAwYVUP0wBJA/6OJXFwX8BVDjBVC1UZVQlVD4AOgBFjgBthgBthd4AVY3OAHGNeENkiAeEg0wCOL3FwX8BVHYARYV8DVQtVGVUJVQ+ADoARY4AbYYAbYXWAF2OAHGFygBtjcoAdYwHZcSMBuY6A4HETuiLh1Y6AAdMAmXBwJFURAVUR2SIB4dMETUtKAAZxJNkB/I55jmeOVY5DAtFxXyBVBFUXVRtVDoASYYAUYXKAFmNzgBljXw1VDFUaVQpVD4AOgBFjgBxhgBxhc4AaY3KAG2MBc4AaY3KAHWMB2QPTAJRwcCbZIgHh1AFxJtkD0wCUcHAm2SIB4dQBcSbZAtMAlHBwJdkiAeHUAXEl2QLTAEwALJtwXyAmVRFVA1US2SIB4dMA0wBxJtkBFo6AIVUhXhBVEgHiTgEujoAB0wCZcHAkVREBVRHZIgHh0wRxJNlPATaOgALTAJtwXyAmVRFVA1US2SIB4dMA0wBxJtlQASSOgALTAJRwcCXZIgHh1AFxJdlRASSOgAPTAJRwcCbZIgHh1AFxJtlSAfwC0wCORXFwXyBxVQVVCFUbVQ6AEmGAFGF1gBZjXwxVDVUbVQtVD4AOgBFjgB1hgB1hgB1hcoAcYwFzgBljgBxhgBxhgB1hgB5h2SIB4dQBcHFfIFUFVQhVG1UOgBJhgBRhdYAWY18MVQ1VG1ULVQ+ADoARY4AdYYAdYYAdYXJTAC6AHGMBgBxhcoAbYwFygBtjgB1hgB5h2QHs7UCOOoASYe1QDg9VD4ARYXBf8HBfwIAcYYANgCBjgClhgC1hdIAnY3KAK2MBgCxhgC1hgBWAGWOALmGALmEm0wCOLNMA0wDTAPpA+kD6APQE+gD6ANM/0x9xcFUNgBVhW1UOVT9Vp1UvXhCAE2HZIgHhWybTAVUB/o4qbW1ycF8gJXBfUFUcW1UNVT5VK4ARYVUdgBFhVTyAEWGAEWGAE2GAE2HZIsEDjjgCwAMi4fpAAQH6QAEB0z/THwFtbXFycF9AVQ2AFWFbVQ5VP1UvVR9VDYARYVU7VR8BgBJhgBNh2eECwAIi4fpAAQH6QAEB+gBtbXFwI3BWAE5fMHFVDYAVYVtVDlU/VS+AEWFVHQGAEWFVPIARYYARYYASYYATYdk=",
        code: "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",
        codeHash: "166a10a2781b506ce7b56e246372ca280318d40a7d4de5981fc4c5d1e7948241",
    };
    
    constructor(options: AccountOptions) {
        super(WrappersConfigAccount.package, options);
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: {
        keep_evers: string | number | bigint// uint128,
        evers?: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            wic_keep: string | number | bigint// uint128
        }// optional(tuple),
        old_token_version?: number// optional(uint32),
        wrapper_deployers: string// address[],
        first_wic?: string// optional(address),
        last_wic?: string// optional(address),
        wic_count: number// uint32,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async runLocalOnDeploy(input: {
        keep_evers: string | number | bigint// uint128,
        evers?: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            wic_keep: string | number | bigint// uint128
        }// optional(tuple),
        old_token_version?: number// optional(uint32),
        wrapper_deployers: string// address[],
        first_wic?: string// optional(address),
        last_wic?: string// optional(address),
        wic_count: number// uint32,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runOnWICsCloned(input: {
        first_wic?: string// optional(address),
        last_wic?: string// optional(address),
        wic_count: number// uint32,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onWICsCloned", input);
    }

    async runLocalOnWICsCloned(input: {
        first_wic?: string// optional(address),
        last_wic?: string// optional(address),
        wic_count: number// uint32,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onWICsCloned", input);
    }

    async runAddWrapperType(input: {
        keep_evers: string | number | bigint// uint128,
        type: number// uint8,
        wrapper_deployer: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "addWrapperType", input);
    }

    async runLocalAddWrapperType(input: {
        keep_evers: string | number | bigint// uint128,
        type: number// uint8,
        wrapper_deployer: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapperType", input);
    }

    async runAddWrapper(input: {
        keep_evers: string | number | bigint// uint128,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            wic_keep: string | number | bigint// uint128
        }// tuple,
        symbol: string// string,
        type: number// uint8,
        init_args: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "addWrapper", input);
    }

    async runLocalAddWrapper(input: {
        keep_evers: string | number | bigint// uint128,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            wic_keep: string | number | bigint// uint128
        }// tuple,
        symbol: string// string,
        type: number// uint8,
        init_args: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapper", input);
    }

    async runUnlistWrapper(input: {
        wic: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unlistWrapper", input);
    }

    async runLocalUnlistWrapper(input: {
        wic: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlistWrapper", input);
    }

    async runCloneUpgrade(input: {
        _answer_id: number// uint32,
        answer_addr?: string// optional(address),
        keep_evers: string | number | bigint// uint128,
        clone_deploy_evers: string | number | bigint// uint128,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            wic_keep: string | number | bigint// uint128
        }// tuple,
        new_token_version: number// uint32,
        wrapper_deployers: string// address[],
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "cloneUpgrade", input);
    }

    async runLocalCloneUpgrade(input: {
        _answer_id: number// uint32,
        answer_addr?: string// optional(address),
        keep_evers: string | number | bigint// uint128,
        clone_deploy_evers: string | number | bigint// uint128,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            wic_keep: string | number | bigint// uint128
        }// tuple,
        new_token_version: number// uint32,
        wrapper_deployers: string// address[],
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "cloneUpgrade", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            token_version: number// uint32,
            wrapper_deployers: string// address[],
            first_wic?: string// optional(address),
            last_wic?: string// optional(address),
            wic_count: number// uint32,
            salted_wic_hash: string// uint256,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            token_version: number// uint32,
            wrapper_deployers: string// address[],
            first_wic?: string// optional(address),
            last_wic?: string// optional(address),
            wic_count: number// uint32,
            salted_wic_hash: string// uint256,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            super_root: string// address,
            wic_code: string// cell,
        }
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async runLocalGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            super_root: string// address,
            wic_code: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

