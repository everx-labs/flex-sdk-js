
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class FlexAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"flex_keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"}],"outputs":[],"id":"0x100"},{"name":"addXchgPair","inputs":[{"name":"_answer_id","type":"uint32"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x200"},{"name":"requestPairs","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"}],"id":"0x300"},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"},{"name":"xchg_pair_code","type":"cell"},{"name":"xchg_price_code","type":"cell"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"xchg_pair_code","type":"cell"},{"name":"unsalted_price_code_hash","type":"uint256"},{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"},{"name":"pairs_count","type":"uint32"}],"id":"0x15"},{"name":"getXchgTradingPair","inputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x16"},{"name":"calcLendTokensForOrder","inputs":[{"name":"sell","type":"bool"},{"name":"major_tokens","type":"uint128"},{"components":[{"name":"num","type":"uint128"},{"name":"denum","type":"uint128"}],"name":"price","type":"tuple"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"exchange_version_","type":"uint32"},{"name":"workchain_id_","type":"int8"},{"name":"xchg_pair_code_","type":"optional(cell)"},{"name":"first_pair_","type":"optional(address)"},{"name":"last_pair_","type":"optional(address)"},{"name":"pairs_count_","type":"uint32"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECWwEAF68AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIBsHA6T/AdBtbSIhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZWEwIATyOgCBZAVUB4HGV8rQwINlxFLqTcCPZ4YsI0SJwWdkJASxfBQ/TAI6AIiHhgQIAEtcYATAhVQHZCgEucYASYQGwAtMAjoAiIeEB0/8BMCFVAdkLA47tQAXDAALTP9Mf0x+TAe1QIsEWjoDhIsEVjoDhAsAU8qkwBPJ57UTQ0wAB8n/TH/QE0x/SB/QE0wCOgCIh4QH6QAEwIVUB2RMPDAEkMNXTAI6AIiHhAfpAATAhVQHZDQH+MNMf0XD4ZPgq0CDXSsAD8uBFgB9h0wEC1NTV+kDTf9N/B8ACB9N/1dN/03/Tf9MH1NTRyA/ysHMvAc8LAXBWEAHPCwHJ0AHOgBSAFFYRAc8LH4ASYfpAMFADzlDSzlUGVQ/LfxfLfxXLf1CVy38Xy39xE88LYVBSy39QQssHFA4APMwUzMlQAszJAczJcPsAVeFygBJjgA6AFWOAIGUB2QFYBvJ57UTQ0wAB8n/TH/QE0x/SB/QEjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkQATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZEQHeAdMf0XD4ZCpu8tBl+CrQINdKwAPy4EXU1NX6QAbAAAbTf9N/gC1h0wEBwAIC03/V03/Tf9N/0wfU1NHICvKwcyoBzwsBcCsBzwsBydABzgn6QDBQCc6AFSoBzwsfcRLPC2GAG2FVAcwJ+QAZzwv/EgDojkuOJIASYQHLH8kBzMlQCczJcPsAgBWAH2JygCFjgA6AJGOAL2UB2Y4TcBzPCwBVATAqVfKAE2FzgBFj2VYUAeBxHM8LAIAUYQHOK9mOFXASzwsAVQEwIYARc2OAFGFzgBJj2VYYAeFxEs8LAIAYYQHOIdkCViLBF46A4Qbyee1E0NMAAfJ/0x/0BNMf0gf0BNMAjoAiIeEB+kABMCFVAdkXFAEkMNXTAI6AIiHhAfpAATAhVQHZFQH+MNMf0XD4ZF8EBdX6QNX6QNEB0YAeYdMBAcACyHQhAc8LAnAhAc8KB3AjAc8LAHASzwv/ydAjzgTysHMjAc8LAXAkAc8LAcnQAc4hyQb6QDABznEiAc8LAVF0zlFizMkizMklzHAXzwv/UOfMgBZxH88LYYAWFc8LH1CjygdxGhYAhM8LAFB3znAWzwt/BMkjzMlQA8zJUAPMyVADzMlQA8xwzwsAyfkAFM8L/8nQUAPOyVACzMlw+wBVNFUZVdyAGGUB2QFUAsAX8qkF8nntRNDTAAHyf9Mf9ATTH9IH9ATTAI6AIiHhAfpAATAhVQHZGAEkMNXTAI6AIiHhAfpAATAhVQHZGQH+MNMf0XD4ZF8JBNMA1dN/03/Tf9GOaXqBJxAlWamFgnEAAAAAAAAAAAAAAAAAAAAAIQG58rKAHGHTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAXcRLPC2GAFxPPCx9QN6AWzwt/yVAFzMlw+wBVQ1UZVdyAGGUB2RoAUiUh4EMzqYWCcQAAAAAAAAAAAAAAAAAAAAAhAbnysiFwcFUCWVUDVQPZA8bfAdBtIdMAAfJwINYB0wAw8ncwIW1VAyEgVQMh2zyAH2UC8rQwCQgGVQhVDFUMVQxVDFUMVQtVDFUHVQxVDFUMVQxVDFUN2zyAH2UC8rSOgALTAJeLCHEBMCPZATAhAeFwI9lYTBwBPI6AIFkBVQHgcZXytDAg2XEUupNwI9nhiwjRInBZ2R0D/l8FVhDXDR9vo3Cd7UDtUAERFQGAFWXbMCIh4XEWsHBDUOMEA8MAVhTXSfKwnvJ5cCRwVSJVAlUTVQXZJAHhghCAAAAAFLCOgOBbgBFh0x+dW/J5cCFwX0BVFFUG2YECACMBuY6A4YEBABO6IuHtRNDTAAHyf9Mf9ATTH9IH9AQ2KB4BLo6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZHwEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SABhAHTH9GAIFP+VQH0D2+hVhCkghB/////sIARYeMEVQ/Tf9N/03/Tf9Um+GSOgAHTAJlwcSRVEQFVEdkiAeH6QHAk2SEB+gHR+CrQINdKwAPy4EWAKmHTANMAA9TU1fpA03/TfwnTAPpAMFIFxwUK03/V03/Tf9N/0wfU1NGAEWHy4GQB0CDXSvgoAcACAcgC8uBFUwHOUYLLfxfLfxXLfxPLB1Cly38Yy39Qd85QRst/UGbMyQLTAVA2zMlQBMzJIcEDIgFGmDDAA/LQY/I04QHAAvK0A9MAjoAiIeEB0wQB1xgBMCFVAdkjA8wwC6ML0geOgAEwLCHgclYVAfsC+ESCEIAAAAAhsYIQ/////xK8cFjjBMiBAwBWEAFVAts8gQCA+wAwDfhi+ELTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkmSyQB/MhwgQEBIlnPAoEBASKAGGFVAc8CgQEBgBdhVQFVAc8AcIEBAc8CAcmBAQAjAc8LHwXSBwbKBwXT/zACzATL/1CqzslQCcxwzwsCAcmBAQFVAYAVYVUBzwKBAQGAFGFVAVUBzwDMyYAgAVYTgCNhVQL0Fy5wXzBVBIASgBRjdyUAPIAeY3OAIWOAImGAIWGAJGFzgCBjgCRhgCVhgCVh2QHiyHAhAc8LAIAXYSHLH4AmYQH0AIAlYQHLHxTKBxf0AIAYYcAAjkuOGzCAGWFVBMsfyQHMye1UgQEAgBxigBxlJ1UH2SIh4HEazwsAgBthAc4pcHKAG2MBVe11gBdjgBhhcoAaY4AZYYAbYYAcYYAcYdknAE6OFXATzwsAVQIwIoAXdGOAG2F0gBhj2VYfAeFxE88LAIAfYQHOItkCeIEDACMBuY6A4YECABO6IuEC8nntRNDTAAHyf9Mf9ATTH9IH9ASOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TApATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZKgH8AdMf0VUP0x/4KtAg10oC03/Tf9N/1NRw+GQHwAMH0wfT/9X6QNTU0wfT/9X6QNN/03/Tf9X6QNEB0QXRgBNh8uBFgBJh1CPDACXDALAB1NX6QNN/038owwAXsAbTf9XTf9N/03/TB9TU0V8KA/LgZluAM2HTANMA0wD6QFIWKwH+xwUF+kD6ADAG8uBkMFYjbvLQZe1HbxBvF28QcQahcvsCyHAhAc8LACDJIczJIczJdCMBzwsCcCEBzwoHcM8L/8nQJM5RIsxS5c4EyXEkAc8LAVYpAcxWKlUCygdxEs8LAFYVVQTOcBbPC/9RNMxwFM8LfwPJUATMyVACzMlQAywD/MzJAcxwzwsAyfkAViYhgBthVieAFWFVD1UPVQ9VD4AbYYASYYAbYYAbYYAbYYAbYSqAG2GAG2GAG2GAG2Eu2zxw+wBREc8L/8nQjoCOIHEiVSVVCV8EIlkBVT5VBlVNXjBygBFjVS6AEmGAEmHZLgHhyIIQJ6GYhFUPVQxVAUAuLQEaVhkn2zxw+wAwC6Qr2S8B7MhwVQQBVQtWF1UG2zyBAID7AMhwIQHPCwCAGGEByx+AF2EB9ACAFmEByx+AFWEBygeAFGEB9ACOHHETzwsAFc4Tyx/JUALMye1UgQIAVaBfCydVB9mccRLPCwCAEmEBziHZVhIB4HASzwsAVQIwIVUTVQVVMtkvAFjIgBghAc8LBRbOUAT6Am0B9ABw+gJw+gJxzwthUCTLH3TPCwLLB8v/yQHMyQFmgQMAE7oi4QLyee1E0NMAAfJ/0x/0BNMf0gf0BI6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZMQEyAdWOgAHTAJlwcSRVEQFVEdkiAeH6QHAk2TIB9IAfYdMAA9Mf7UcB0QTTAAVvEG8XBdMA+kD6QHD4ZPoAMAhvEIAXYdMfMAmhcvsCyHAhAc8LAHYhAc8LAnAjAc8LAcnQAc4UznD6AoAmYQH0AFIazwsfcBr6AnD6AnHPC2GOgJdwG88LACrZVhAB4XEbzwsAVhABzirZMwE6D8AACaOOgCEh4HEUzwsALAHOIwFVFFUTVQVVBdk0Af4wBMlQD8zJUA7MyYEAgPsAyHAhAc8LAIAWYSHLH4AWYQH0AIAVYQHLH4AUYQHKB4ATYQH0AI42jhYwUILLH8kBzMntVIEDAFWQXwooVQjZJiHgcRXPCwAdziNwVSpVGwFVKlUpVQpVDVUNVQ3ZjhBwEs8LAFUDMCFVdFUMVUjZNQAeKwHgcRLPCwCAEWEBziHZAVhb8nlVD9Mf7UTQ0wAB8n/TH/QE0x/SB/QEjoAB0wCUcHAk2SIB4fpAAXEk2TcBQoIQgAAAAByyAtWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TgBogHTH9GAIFOOVQH0D2+h8rvQ0x+AIWHTANMA0wD6QDDTAQXSB9P/1fpA0STBA5lfBMAD8tBj8jThBMAC8rQH0wCOgCIh4QHTBAHXGAEwIVUB2TkE/jDSBwS6A9P/MFACuhKw8ruAIFUOgBVhVQH0W4EBABm68rqAFWH4Y4AgVhUiVQH0D2+hVhakghB/////sIAXYeMECNMCgQEB1wCBAQHXANWBAQHXAC34ZIEBAdcAjoCOgHcZsIEBARPXANWBAQHXAPgA+EOOgCcB4fpA1fpA039IRkI6AW7Tf9N/1fpA1fpA1fpA1NTTB9P/1fpA1NTTB9P/1fpA1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZOwH8AdEE0QXRWwjRDdEO0Q/RyHAhAc8LACDJIczJIczJdCMBzwsCcCEBzwoHcM8L/8nQJM5RIsxWF1UEzgHJcSUBzwsBVjkBzFY6VQPKB3ESzwsAVhpVBc5wFc8L/1E1zHAUzwt/A8lQBczJUALMyVACzMlQAsxwzwsAyfkAVjYhPAKCViJWOIAaYYAZYYAZYYAZYYAZYVYhgBlhgBVhgBVhgBVhgBVhgBRhgBRhgBRhgBRhgBphgBhh2zxw+wDPC//J0CBAPQH+jmEwKsAAgClhgCRhVQLjBCLTASHBA5gwwAPy0GPyNOEBwALytNMAjiswgB9hpAHSB9P/cZ9xVhpwX2BVUFUHVQZVB9kqAeFxVQcBgBJh4wRxVhLZIiHhAdMEAdcYATAhVQHZKyHhyHYhAc8LA3AiAc8LAcnQAc50IgHPCwJWKj4B/gHKBxzL/8nQUAvOghAnoZiEG88LHyMBzslVCVYQ+gKAOWEB9ABw+gJw+gJxzwthzMlw+wAgcHCAJ2F1gChjgCxhcoArYwF0gCljcoArYwFygCtjAXKAK2NygCtjAXKAK2MBgClhc4AqY4AqYXKAK2OAKmFygCtjcoArY3KAKmM/ABiALGFygCZjdYAoY9kB/shRZs56JwHPCx9VDwHLfx/Lf1BezHAmAc8LAIEAxCcBzwsIgBVhAcsHcSgBzwsCIslQdMxReM5VDlUPy38ByVBoywdRMsyAEWFVBsyAEmFVAsv/UfjOUObLf21QVMv/FszJUbbOGswYzBbLBxTL/xfMyQbJJczJgQQAEs8LCnBBAKLPC/9REczJUGPMUHn6AhL0AHD6AnD6AgfJcxjPC2FxFc8LAFBiznAVzwv/UVLMcBbPC38FyVACzMlQBMzJUALMyVACzHDPCwDJAcxxzwsAzMkBLo6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZQwEkAdXTAI6AIiHhAfpAATAhVQHZRAH8MNFWEXBf0HWAMWNzgDJjgDFhcoAvY4AxYYAxYYAwYYAvYYAsYYAqYYAwYYAqYYAwYXWAJ2NygChjeYAgY4A0YYApYYA1YYAqYYA0YXOAKWOANWGANWFygDRjcoA0Y4A0YYA2YYA2YYA2YYA2YeFwcFUqVQ6AEWF1gBNjXwoiRQCAVQmAHmFzgBtjVRyAHmFVHYAeYVUNdIAbY4AUYXOAHGNygBpjgB5hgBxhgB5hgBphgB5hgB5hgB1hgB5hgB5h2QH+yHAhAc8LAIArYSHLH4AmYQH0AIA1YQHLH4A0YQHKB4AzYQH0AAvAAI5FjhowVQ9VAssfyQHMye1UgQEAgCpigCplJ1UH2SIh4HEVzwsAgBRhAc4kcHKAEmMBVahygBFjgBFhVQ+AEmGAE2GAE2HZnHEdzwsAgBJhAc4s2SYB4EcAInAdzwsAVQMwK1W0gBFhVUzZArhyVhkB+wL4RIIQgAAAACGxghD/////ErxwWOMEyIIQLKIM9VYQAVUC2zyBAID7ADAN+GL4QtMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2UtJAf7IgQEBGCgBzwCBAQGAGWEpVQHPAIEBAYAZYVUBVQHPAIEBAUYQzwAEyYEBACgBzwsfA9IHBMoHA9P/MAXMUELL/4AdYVUGzskBzHHPCwIByYEBAVUBgBhhVQHPAoEBAYAXYVUBVQHPAMzJgCABVh2AGWFVAvQXVhVwX9BVHgF4SgBygB1jc4AhY4AhYXKAH2OAH2FygB1jgCNhgB9hgCNhgCBhgCNhc4AfY4AjYXaAHWOAJGGAI2GAJGHZAErIgBghAc8LBRTOcPoCbQH0AHD6AnD6AnHPC2FQI8sfyx/JAczJAbztQI5WgBlh7VALgBFhgBNhgBRhcF/wcF8wgBNhgDBhgCJhcoAvY4AkYYAwYXeAH2OAIGGAJWGAIWGAJmF0gC1jcoAnYwGAMGGAKmF1gCxjgBCAIGOAMGGAMGFVD9MATQP+jiVxcF/AVQ4wVQtVGVUJVQ+ADoARY4AbYYAbYXeAFWNzgBxjXhDZIgHhINMAji9xcF/AVR2AEWFfA1ULVRlVCVUPgA6AEWOAG2GAG2F1gBdjgBxhcoAbY3KAHWMB2XEjAbmOgOBxE7oi4dWOgAHTAJlwcCRVEQFVEdkiAeHTBFFPTgAGcSTZAfyOeY5njlWOQwLRcV8gVQRVF1UbVQ6AEmGAFGFygBZjc4AZY18NVQxVGlUKVQ+ADoARY4AcYYAcYXOAGmNygBtjAXOAGmNygB1jAdkD0wCUcHAm2SIB4dQBcSbZA9MAlHBwJtkiAeHUAXEm2QLTAJRwcCXZIgHh1AFxJdkC0wBQACybcF8gJlURVQNVEtkiAeHTANMAcSbZARaOgCFVIV4QVRIB4lIBLo6AAdMAmXBwJFURAVUR2SIB4dMEcSTZUwE2joAC0wCbcF8gJlURVQNVEtkiAeHTANMAcSbZVAEkjoAC0wCUcHAl2SIB4dQBcSXZVQEkjoAD0wCUcHAm2SIB4dQBcSbZVgH8AtMAjkVxcF8gcVUFVQhVG1UOgBJhgBRhdYAWY18MVQ1VG1ULVQ+ADoARY4AdYYAdYYAdYXKAHGMBc4AZY4AcYYAcYYAdYYAeYdkiAeHUAXBxXyBVBVUIVRtVDoASYYAUYXWAFmNfDFUNVRtVC1UPgA6AEWOAHWGAHWGAHWFyVwAugBxjAYAcYXKAG2MBcoAbY4AdYYAeYdkB7O1AjjqAEmHtUA4PVQ+AEWFwX/BwX8CAHGGADYAgY4ApYYAtYXSAJ2NygCtjAYAsYYAtYYAVgBljgC5hgC5hJtMAjizTANMA0wD6QPpA+gD0BPoA+gDTP9MfcXBVDYAVYVtVDlU/VadVL14QgBNh2SIB4Vsm0wFZAf6OKm1tcnBfICVwX1BVHFtVDVU+VSuAEWFVHYARYVU8gBFhgBFhgBNhgBNh2SLBA444AsADIuH6QAEB+kABAdM/0x8BbW1xcnBfQFUNgBVhW1UOVT9VL1UfVQ2AEWFVO1UfAYASYYATYdnhAsACIuH6QAEB+kABAfoAbW1xcCNwWgBOXzBxVQ2AFWFbVQ5VP1UvgBFhVR0BgBFhVTyAEWGAEWGAEmGAE2HZ",
        code: "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",
        codeHash: "e55168e621840e1f780482b9506c133f061393cc7331f00456554f62fae5b5f2",
    };
    
    constructor(options: AccountOptions) {
        super(FlexAccount.package, options);
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: {
        flex_keep_evers: string | number | bigint// uint128,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            pair_keep: string | number | bigint// uint128
        }// tuple,
        old_flex?: string// optional(address),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async runLocalOnDeploy(input: {
        flex_keep_evers: string | number | bigint// uint128,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            pair_keep: string | number | bigint// uint128
        }// tuple,
        old_flex?: string// optional(address),
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runAddXchgPair(input: {
        _answer_id: number// uint32,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            pair_keep: string | number | bigint// uint128
        }// tuple,
        major_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
        minor_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
        min_amount: string | number | bigint// uint128,
        minmove: string | number | bigint// uint128,
        price_denum: string | number | bigint// uint128,
        notify_addr: string// address,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "addXchgPair", input);
    }

    async runLocalAddXchgPair(input: {
        _answer_id: number// uint32,
        evers: {
            deploy: string | number | bigint// uint128
            setnext: string | number | bigint// uint128
            pair_keep: string | number | bigint// uint128
        }// tuple,
        major_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
        minor_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
        min_amount: string | number | bigint// uint128,
        minmove: string | number | bigint// uint128,
        price_denum: string | number | bigint// uint128,
        notify_addr: string// address,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "addXchgPair", input);
    }

    async runRequestPairs(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            first_pair?: string// optional(address),
            last_pair?: string// optional(address),
        }
    }> {
        return await runHelper(this, "requestPairs", input);
    }

    async runLocalRequestPairs(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            first_pair?: string// optional(address),
            last_pair?: string// optional(address),
        }
    }> {
        return await runLocalHelper(this, "requestPairs", input);
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            super_root: string// address,
            ev_cfg: {
                transfer_tip3: string// uint128
                return_ownership: string// uint128
                order_answer: string// uint128
                process_queue: string// uint128
                send_notify: string// uint128
                dest_wallet_keep_evers: string// uint128
            }// tuple,
            deals_limit: number// uint8,
            xchg_pair_code: string// cell,
            xchg_price_code: string// cell,
        }
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async runLocalGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            super_root: string// address,
            ev_cfg: {
                transfer_tip3: string// uint128
                return_ownership: string// uint128
                order_answer: string// uint128
                process_queue: string// uint128
                send_notify: string// uint128
                dest_wallet_keep_evers: string// uint128
            }// tuple,
            deals_limit: number// uint8,
            xchg_pair_code: string// cell,
            xchg_price_code: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            xchg_pair_code: string// cell,
            unsalted_price_code_hash: string// uint256,
            first_pair?: string// optional(address),
            last_pair?: string// optional(address),
            pairs_count: number// uint32,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            xchg_pair_code: string// cell,
            unsalted_price_code_hash: string// uint256,
            first_pair?: string// optional(address),
            last_pair?: string// optional(address),
            pairs_count: number// uint32,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetXchgTradingPair(input: {
        tip3_major_root: string// address,
        tip3_minor_root: string// address,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "getXchgTradingPair", input);
    }

    async runLocalGetXchgTradingPair(input: {
        tip3_major_root: string// address,
        tip3_minor_root: string// address,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "getXchgTradingPair", input);
    }

    async runCalcLendTokensForOrder(input: {
        sell: boolean// bool,
        major_tokens: string | number | bigint// uint128,
        price: {
            num: string | number | bigint// uint128
            denum: string | number | bigint// uint128
        }// tuple,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runHelper(this, "calcLendTokensForOrder", input);
    }

    async runLocalCalcLendTokensForOrder(input: {
        sell: boolean// bool,
        major_tokens: string | number | bigint// uint128,
        price: {
            num: string | number | bigint// uint128
            denum: string | number | bigint// uint128
        }// tuple,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// uint128,
        }
    }> {
        return await runLocalHelper(this, "calcLendTokensForOrder", input);
    }

}

