
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class WrapperEverAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onEverTransfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"name":"args","type":"tuple"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"components":[{"name":"addr_","type":"address"}],"name":"wallet_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECYwEAGyEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBICEHA6b/AdBtIG0jISBVAyHbPIAfZQLytDAJCAZVCFUMVQxVDFUMVQxVC1UMVQdVDFUMVQxVDFUMVQ3bPIAfZQLytI6AAtMAl4sIcQEwI9kBMCEB4XAj2WBUCAE8joAgWQFVAeBxlfK0MCDZcRS6k3Aj2eGLCNEicFnZCQEuXwVVD9MAjoAiIeGBAgAS1xgBMCFVAdkKAShxFLAB0wCOgCIh4QHT/wEwIVUB2QsDhu1ABMMAAtM/0x/TH5UB7VDbMIEBACMBuY6A4SLBEo6A4QLAEPKpMATyee1E0NMAAfJ/1NTTB9IH0//Tf/QE+gDV0wATDQwA6o5nMNXTAI5VMNEw0XD4ZF8DgB1h0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs6AEHESzwthgBATzwsfA27AAHGwE88LAMkBzMlw+wBVgFUKVfyAGmUB2SIh4QH6QAEwIVUB2SIh4QH6QAEwIVUB2QFgAsAS8qkwBPJ57UTQ0wAB8n/U1NMH0gfT/9N/9AT6ANXTAI6AIiHhAfpAATAhVQHZDgEkMNXTAI6AIiHhAfpAATAhVQHZDwFiMNEw0fgocPhkINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2RAB/MhxIQHPCwBwIgHPCwCC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdIwHPC/+AFM8LDwXSBzBSBsoHySHMUnPOcM8LIHASzws/gChh0wEEyYATYVUCzFGVzoAoYVUD9AADwAJQI8zJcBLPC//MyVUPVQfMH8sHcBEB+s8LfxzL/x3MyQrysHMhAc8LAXAiAc8LAcnQAc4M+kAwUAzOghIBNAAULAHPCycq12XPCw90LQHPCwKAEnEUzwthgBIfzwsfBc8KB4Lw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0Szwv/C/kAG88L/8nQ+QIaEgA2zwv/ydBQAs7JUArMyXD7AFVGVQxV7oAbZQHZAoSBAgAjAbmOgOGBAQATuvKpMATyee1E0NMAAfJ/1NTTB9IH0//Tf/QE+gDVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkZFAEkAdXTAI6AIiHhAfpAATAhVQHZFQF2MNEw0XD4ZMAAJm7DALHy0G34KCDTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkWAf7IcSEBzwsAcCIBzwsAgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SMBzwv/gBTPCw8F0gcwUgbKB8khzFJzznDPCyBwEs8LP4AqYdMBBMlWFVUCzFGVzoArYVUD9AADwAJQI8zJcBLPC//MyVYSVQfMVhEBywdwFwH8zwt/LwHL/8zJAfKwghIBNAAUIwHPCych12WBAQCBAQAmAc8LH1Ajyw9zJgHPCwFwJwHPCwHJ0AHOgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3RLPC/+AFWFVA8wE+QAF+kAwUALOgBNhVQPMUELL/8nQdCUBGACYzwsCUZXOgBJhVQLLB1UPAcv/cRXPC2FQ9Mt/DslQaMoHBfkCFc8L/8nQUALOFczJUJrMcM8LABnMyVACzMlw+wBVNlULVe2AGmUB2QJagQMAIwG5joDhgQIAE7ryqTAE8nntRNDTAAHyf9TU0wfSB9P/03/0BPoA1dMAGxoA9o5tMNXTAI5bMNEw0XD4ZF8FgBth0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QIECAFAkzoECABPPCx8YzBbMcRbPC2FQRcsHy//4KAHOyVADzMlw+wBVQFUGVfiAFmUB2SIh4QH6QAEwIVUB2SIh4QH6QAEwIVUB2QFigQMAE7ryqQXyee1E0NMAAfJ/1NTTB9IH0//Tf/QE+gDV0wCOgCIh4QH6QAEwIVUB2RwBJDDV0wCOgCIh4QH6QAEwIVUB2R0BSDDRMNFw+GRfBQnV0/+OgAHTAJlwcSRVEQFVEdkiAeH6QHAk2R4BfAHRyHAhAc8LAHAhAc8LP/goI84Yy/9Qx8wazI6AAqMJzwsHcM8Lfx/L/5pxKQHPCwASzi7ZKAHhKVUBMC7ZHwH6gvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SkBzwv/gBTPCw8nAcoHyVAKzHAazwsggCFh0wGAImFVAvQAC8kCwAJQK8zJUAXMyQHMyQjysHMnAc8LAXAoAc8LAcnQAc4D+kAwUAPOghIBNAAUJwHPCyco12UgAM7PCw90KAHPCwKBAwBxFM8LYYEDABrPCx8HzwoHgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3RLPC/8J+QAZzwv/ydD5AhjPC//J0FAEzslQBczJcPsAVUVV64AYZQHZAtLfAdAg0wAB8nAg1gGW7UDtUNswAdMAjoABMCEB4TAE0h8BwP/4APLgZdMfghBDhPKYErry4GXtRNDTAALTfzAB8n8B1NTTB9IH0//Tf/QE+gDVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNklIgEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SMB5AHRBNErVhK58tBmyHAhAc8LAIASYSHMgBJhAcyAEWEBywdVDwHKB1UNVQ+hD88L/wbAAFDmy38c9ABQCvoCjjKOFDAMyVAMzMlQC8zJ7VRwVcBfDQHZJSHgcR3PCwAbzitwVQFVDVV0VQlVC1UcAVUN2SQAQo4SLFUCMCFVAVUGVRRVBlUGVRXZJgHhcSwBzwsAF84m2QOibSBtVQYhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZYFQmATyOgCBZAVUB4HGV8rQwINlxFLqTcCPZ4YsI0SJwWdknBP5fBVYT1w0fb6OdcIASYnOAFGOAFWUB2eFxE7DDAFYV10nysJ/yeXCAEWJzgBNjgBRlAdkiAeGAFWHTH44QW/J5cIARYnKAE2OAE2UB2SLBDY6A4SLBC46A4QLACiLh7UTQ0wAB8n/U1NMH0gfT/9N/9AT6ANXTAI6AIiHhAfpAQC8pKAAMATAhVQHZATIw1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZKgH+AdEE0Q7TH3D4ZNN/CW4J1DAJ8uBoKPkAgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3bry4Gf4KtAg10rAA/LgRXIpAfsCyILw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0hAc8L/3AiAc8LAclwIysB/AHPCwCAFBPPCw8E1FYRVQXKBwHUdiYBzwsCBdB0KAHPCwJwKAHPCz9xKQHPCwGAMGHTAPgoAdMAcC8BzwsfVhhVBcwC0wAMyQrVViBVCMwnVhLOVh5VCsoHcRjPCwBVClUPzgfJDvpAMAT6QDBVC1UPzMlxgBFhAc8LABzOcCwB/s8LIFYxAfQAG8zJcBPPC/8SzMlWG1UCzFYaAcsHcM8Lf1YYAcv/zMkBzHDPCwDJIPkAFs8L/8nQUATOUAv6AlYrAfQAcPoCcPoCc88LYRPMcc8LABfMyXD7AMh2IQHPCwNwIgHPCwHJ0AHOF85w+gKAKWEB9ABQlssfcBb6AnEtAfwWzwsAcBb6AgXJcRbPC2EVzMmBAID7AMhwIQHPCwCAFWEhzIAVYQHMgBRhAcsHcRPPCwBRM86AE2FVAsoHgBJhAcv/gBFhAct/VQ8B9ABQD/oCjhkwAclQDszJUA3Mye1UeoAfYoAhYYAgZQHZLCHhVQ9VA84hcFUfAVWmVQwuABBVDlUfgBFh2QJwMAHBDI6A4QHyee1E0NMAAfJ/1NTTB9IH0//Tf/QE+gDVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNk3MAEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TEBSgHRBNGAEWHTH3D4ZNP/joAB0wCZcHEkVREBVRHZIgHh+kBwJNkyAeyAK2HTANMA0wD6QO1HbxBvFwH6QAjV03/4KAHRCvoAMARvEI6ACqMFoXL7AshwIQHPCwBwIQHPCz9Rws5VDwHL/1YhVQzMViABzFYfAcsHcM8Lf1YdAcv/mnEkAc8LAB7OLNkoAeEiVQUwLFUBVWZVDVU6VRzZMwH+gvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SQBzwv/gBTPCw9xJAHPCwFwJgHPCwFWIVUCygfJdiYBzwsCBsxwFM8LIAHJcCcBzwsfVh9VA8x0GM8LAgLQgBhhwABWNVUE9AAFyVAnzlYhVQPKB3EYzwsAA8lQZDQB/MzJUATMyVAPzMlQDsxwzwsAySD5ABTPC//J0FIDzlAE+gJWLwH0AHD6AnD6AnPPC2ESzHHPCwAbzMlw+wDIUd3LHxrOdi0BzwsDcB7PCwHJ0AHJDc4UznD6AoArYQH0AHD6AnD6AnHPC2EbzMmBAID7AMhwIQHPCwCAG2EhzDUB/oAbYQHMgBphAcsHgBlhAcoHgBhhAcv/gBdhAct/gBZhAfQAgBVh+gKOOo4ZMAPJUAPMyQHMye1UgAuAI2KAJWGAJGUB2Swh4HEWzwsAVQ8BziVwVQVVBFUDVQVVA1UFVQZVBtmcIlUEMCFVlVUPVVrZVhIB4XEkAc8LAIATYQE2AAbOIdkBYgHyee1E0NMAAfJ/1NTTB9IH0//Tf/QE+gDVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNk4ATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZOQFoAdEE0YARYdN/+kDT/3Bw+GQB1Y6AAdMAjhJwI3BVBVUUAVUCVRQBVQZVBtkiAeH6QHEk2ToC/gHT/9XTAJbRMNHywGsiAeH6QNEC0TBWFiu5joAEwAAB8tBp7UdvEG8XbxAsAbny4GnIcCEBzwsAcCEBzws/Vh8BzFYeAcz4KCPOHcv/Vh1VDMsHgDNh0wDTANMAcBXPC38E+kAwVh9VBMv/jhAmVQIwK1UBVYNVDFUMVRvZKQE8OwAW4HEoAc8LAB3OK9kB1ILw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0oAc8L/4AUzwsPViEBygfJUAfMcBfPCyBWMwH0AAbJdCgBzwsCghIBNAAUGc8LJ1YhVQjKB1AozMlQBszJUAvMySDXZRXPCw89Af6C8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdzwv/BPkAFM8L/8nQ+QIUzwv/ydAYxwXy4GpfA4AVYSqhIFYVoHL7AshwIQHPCwFVD8AAdhPPCwMBydABzhPOUAv6AoApYQH0AHD6AnD6AnDPC2HJgQCA+wDIcCEBPgH+zwsAgBphIcyAGmEBzIAZYQHLB4AYYQHKB4AXYQHL/xzLf4AVYQH0AIAUYfoCjjmOGTANyVANzMkBzMntVIAMgCJigCRhgCNlAdklIeBxFc8LAB/OI3BVDlUSAVWGVQ1VDFUPVQ9VD9mcLFUEMCFVhVUOVVnZVhEB4XEjAc8LAD8ADoASYQHOIdkCcCLBDo6A4TAC8nntRNDTAAHyf9TU0wfSB9P/03/0BPoA1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZSEEBMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlCAUAB0QTRcPhkjoCAE2HTAJlwcSRVEQFVEdkiAeH6QHAk2UMBngHV+kDTf9EL8uBtgCth0wDTANMA+kBWECLHBQH6QPoAMALy4GT4KCDTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdlEAfzIgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SEBzwv/cSIBzwsAJgHOcCMBzwsAgBQTzwsPBdIHMFIGygfJ7UdvEFETzHATzwsgAW8XdCUBzwsCgBJhowTJcBbPCz9Rps5WN1UD9AADghIBNAAUF88LJ1UDVQxFAfyAE2HjBFCDygdQQ8zJcBTPC/8TzFYhVQfMBG8QGaJy+wIHyVYeVQLMVh0Bywdwzwt/VhsBy//MySDXZRTPCw+C8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdzwv/A/kA+ESCEIAAAAAhsYIQ/////xK8UCXL/3BGAfxFBeMEyHohAc8LHxLLH3HPCwBwIgHPCwHJdiMBzwsDBsnQAdAB+QJQQs5Qws6AE2EBy39wzwv/cM8LAMkBzMkDzlCVy//J0FAEznD6AoArYQH0AHD6AnD6AnHPC2ETzMmBAID7AMhwIQHPCwCAGmEhzIAaYQHMgBlhAcsHcRNHALDPCwBVDyHOgBhhVQPKB4AXYQHL/4AWYQHLf4AVYQH0AIAUYfoCjhkwA8kBzMlQAszJ7VSADYAiYoAkYYAjZQHZVhEh4VDjziJwVZRVC1UKVQxVDlUOVQ7ZAn6BAMojAbmOgOECwA4i4QLyee1E0NMAAfJ/1NTTB9IH0//Tf/QE+gDVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlNSQEyAdWOgAHTAJlwcSRVEQFVEdkiAeH6QHAk2UoB/gHRgCdh0wAG0TAE0wDtR28QbxcB0wD6QPpAcPhk+gAwBG8QgBhh0x8wBaFy+wLIdiEBzwsDcCIBzwsBydABzhPOcPoCgCdhAfQAUELLH3AS+gIBVhDPC39wEvoCAclxEs8LYczJgQCA+wDIcCEBzwsAgBVhIcyAFWEBzIAUYQFLAf7LB4ATYQHKB4ASYQHL/4ARYQHLf1UPAfQAUA/6Ao5ACaOOGjAOyVAIzMlQDczJ7VSADoAdYoAfYYAeZQHZIFkBVQHgcRPPCwAWziFwVQFVS1UsVQ9VLFUMVQ9VD1UP2Y4SL1UDMCFVAVULVVVVC1UaVRrZKwHhcSMBzwsAHM4rTAAC2QFwgQDKE7oi4QLyee1E0NMAAfJ/1NTTB9IH0//Tf/QE+gDVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlOATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZTwFQAdEE0YASYdMf03/T/3D4ZNWOgAHTAJlwcSRVEQFVEdkiAeH6QHAk2VAB/AHTf9N/1fpA0TCAMGHTAALRMFEpoALTANMA+kD6QPoAMFAGufLQbCuAGWGgIFYYoHL7AshwIQHPCwD4KCLOHsv/cC4Bzws/joAKo1YhVQHMViABzFYfAcsHcM8Lf1YdAcv/mnEkAc8LABzOKtkiAeEvVQEwKlUBVYJVC1Ua2VEB/oIQQ4TymCQBzwsfgBFhAct/cCUBzwsBUHfOgvDZUHl0Na+j8CmEMMxALX4+n3gQAwZ4T+SvlDJxGZsi3SUBzwv/gBTPCw9WHwHKB8kKzwt/Bsl0JQHPCwJ2VhIBzwsCAtBxGc8LAFUKVhLMcBXPCyBxgBNhAc8LAVYeAcyAF2FSAf7AAAnJVjRVAvQABskDzFCkzlYeVQLKB3EazwsAUCTMyVAFzMlQDMzJAcwKyXAbzwsAySD5ABbPC//J0FACznD6AoAtYQH0AHD6AnD6AnPPC2EUzHHPCwAYzMmBAID7AMhwIQHPCwCAG2EhzIAbYQHMgBphAcsHgBlhAcoHgBhhUwDSAcv/E8t/gBZhAfQAgBVh+gKOOI4aMATJUATMyQHMye1UgQDKgCRigCZhgCVlAdkrIeBxFc8LAFUPAc4kcFUBVRMBVQJVBFUFVQXZnCNVBDAhVZVVD1Va2VYSAeFxIwHPCwCAE2EBziHZAbztQI5WgBlh7VALgBFhgBNhgBRhcF/wcF8wgBNhgDBhgCJhcoAvY4AkYYAwYXeAH2OAIGGAJWGAIWGAJmF0gC1jcoAnYwGAMGGAKmF1gCxjgBCAIGOAMGGAMGFVD9MAVQP+jiVxcF/AVQ4wVQtVGVUJVQ+ADoARY4AbYYAbYXeAFWNzgBxjXhDZIgHhINMAji9xcF/AVR2AEWFfA1ULVRlVCVUPgA6AEWOAG2GAG2F1gBdjgBxhcoAbY3KAHWMB2XEjAbmOgOBxE7oi4dWOgAHTAJlwcCRVEQFVEdkiAeHTBFlXVgAGcSTZAfyOeY5njlWOQwLRcV8gVQRVF1UbVQ6AEmGAFGFygBZjc4AZY18NVQxVGlUKVQ+ADoARY4AcYYAcYXOAGmNygBtjAXOAGmNygB1jAdkD0wCUcHAm2SIB4dQBcSbZA9MAlHBwJtkiAeHUAXEm2QLTAJRwcCXZIgHh1AFxJdkC0wBYACybcF8gJlURVQNVEtkiAeHTANMAcSbZARaOgCFVIV4QVRIB4loBLo6AAdMAmXBwJFURAVUR2SIB4dMEcSTZWwE2joAC0wCbcF8gJlURVQNVEtkiAeHTANMAcSbZXAEkjoAC0wCUcHAl2SIB4dQBcSXZXQEkjoAD0wCUcHAm2SIB4dQBcSbZXgH8AtMAjkVxcF8gcVUFVQhVG1UOgBJhgBRhdYAWY18MVQ1VG1ULVQ+ADoARY4AdYYAdYYAdYXKAHGMBc4AZY4AcYYAcYYAdYYAeYdkiAeHUAXBxXyBVBVUIVRtVDoASYYAUYXWAFmNfDFUNVRtVC1UPgA6AEWOAHWGAHWGAHWFyXwAugBxjAYAcYXKAG2MBcoAbY4AdYYAeYdkB7O1AjjqAEmHtUA4PVQ+AEWFwX/BwX8CAHGGADYAgY4ApYYAtYXSAJ2NygCtjAYAsYYAtYYAVgBljgC5hgC5hJtMAjizTANMA0wD6QPpA+gD0BPoA+gDTP9MfcXBVDYAVYVtVDlU/VadVL14QgBNh2SIB4Vsm0wFhAf6OKm1tcnBfICVwX1BVHFtVDVU+VSuAEWFVHYARYVU8gBFhgBFhgBNhgBNh2SLBA444AsADIuH6QAEB+kABAdM/0x8BbW1xcnBfQFUNgBVhW1UOVT9VL1UfVQ2AEWFVO1UfAYASYYATYdnhAsACIuH6QAEB+kABAfoAbW1xcCNwYgBOXzBxVQ2AFWFbVQ5VP1UvgBFhVR0BgBFhVTyAEWGAEWGAEmGAE2HZ",
        code: "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",
        codeHash: "12ca7860b54807c7bf7ec5d0c1ea351c11611adc9c34caa8107923625f72dac5",
    };
    
    constructor(options: AccountOptions) {
        super(WrapperEverAccount.package, options);
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: {
        _answer_id: number// uint32,
        reserve_wallet_evers: string | number | bigint// uint128,
        internal_wallet_code: string// cell,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean// bool,
        }
    }> {
        return await runHelper(this, "init", input);
    }

    async runLocalInit(input: {
        _answer_id: number// uint32,
        reserve_wallet_evers: string | number | bigint// uint128,
        internal_wallet_code: string// cell,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean// bool,
        }
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: {
        _answer_id: number// uint32,
        pubkey: string | number | bigint// uint256,
        owner?: string// optional(address),
        evers: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async runLocalDeployEmptyWallet(input: {
        _answer_id: number// uint32,
        pubkey: string | number | bigint// uint256,
        owner?: string// optional(address),
        evers: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnEverTransfer(input: {
        _answer_id: number// uint32,
        tokens: string | number | bigint// uint128,
        args: {
            pubkey: string | number | bigint// uint256
            owner?: string// optional(address)
            evers: string | number | bigint// uint128
            keep_evers: string | number | bigint// uint128
        }// tuple,
        answer_addr: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onEverTransfer", input);
    }

    async runLocalOnEverTransfer(input: {
        _answer_id: number// uint32,
        tokens: string | number | bigint// uint128,
        args: {
            pubkey: string | number | bigint// uint256
            owner?: string// optional(address)
            evers: string | number | bigint// uint128
            keep_evers: string | number | bigint// uint128
        }// tuple,
        answer_addr: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onEverTransfer", input);
    }

    async runBurn(input: {
        tokens: string | number | bigint// uint128,
        answer_addr: string// address,
        sender_pubkey: string | number | bigint// uint256,
        sender_owner?: string// optional(address),
        out_pubkey: string | number | bigint// uint256,
        out_owner?: string// optional(address),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "burn", input);
    }

    async runLocalBurn(input: {
        tokens: string | number | bigint// uint128,
        answer_addr: string// address,
        sender_pubkey: string | number | bigint// uint256,
        sender_owner?: string// optional(address),
        out_pubkey: string | number | bigint// uint256,
        out_owner?: string// optional(address),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: {
        answer_addr?: string// optional(address),
        to: string// address,
        tokens: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async runLocalTransferFromReserveWallet(input: {
        answer_addr?: string// optional(address),
        to: string// address,
        tokens: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async runLocalRequestTotalGranted(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            root_pubkey: string// uint256,
            total_granted: string// uint128,
            wallet_code: string// cell,
            external_wallet?: string// optional(address),
            reserve_wallet: string// address,
            super_root: string// address,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            root_pubkey: string// uint256,
            total_granted: string// uint128,
            wallet_code: string// cell,
            external_wallet?: string// optional(address),
            reserve_wallet: string// address,
            super_root: string// address,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            root_pubkey: string// uint256,
            root_address: string// address,
        }
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async runLocalGetTip3Config(): Promise<{
        transaction: Transaction,
        output: {
            name: string// string,
            symbol: string// string,
            decimals: number// uint8,
            root_pubkey: string// uint256,
            root_address: string// address,
        }
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean// bool,
        }
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async runLocalHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean// bool,
        }
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: {
        pubkey: string | number | bigint// uint256,
        owner?: string// optional(address),
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async runLocalGetWalletAddress(input: {
        pubkey: string | number | bigint// uint256,
        owner?: string// optional(address),
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async runLocalGetReserveWallet(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

}

