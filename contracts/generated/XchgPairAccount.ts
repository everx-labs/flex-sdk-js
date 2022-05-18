
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class XchgPairAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"deploy_value","type":"uint128"},{"name":"notify_addr","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"}],"outputs":[],"id":"0xa"},{"name":"requestDetails","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"},{"name":"major_reserve_wallet","type":"address"},{"name":"minor_reserve_wallet","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"next","type":"optional(address)"}]},{"name":"setNext","inputs":[{"name":"next","type":"address"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"},{"name":"major_reserve_wallet","type":"address"},{"name":"minor_reserve_wallet","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"next","type":"optional(address)"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"flex","type":"address"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"},{"name":"xchg_price_code","type":"cell"}]},{"name":"getPriceXchgCode","inputs":[{"name":"salted","type":"bool"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x15"},{"name":"getPriceXchgSalt","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"tip3_major_root_","type":"address"},{"name":"tip3_minor_root_","type":"address"},{"name":"min_amount_","type":"uint128"},{"name":"minmove_","type":"uint128"},{"name":"price_denum_","type":"uint128"},{"name":"notify_addr_","type":"address"},{"name":"major_reserve_wallet_","type":"address"},{"name":"minor_reserve_wallet_","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg_","type":"optional(tuple)"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg_","type":"optional(tuple)"},{"name":"next_","type":"optional(address)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECTwEAFOwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBICMHA6T/AdBtbSIhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZTEAIATyOgCBZAVUB4HGV8rQwINlxFLqTcCPZ4YsI0SJwWdkJASxfBQ/TAI6AIiHhgQIAEtcYATAhVQHZCgEucYASYQGwAtMAjoAiIeEB0/8BMCFVAdkLA+LtQAXDAALTP9Mf0x+VAe1Q2zCCEGOrPswjAbmOgOEiwRaOgOECwBXyqQXyee1E0NMAAfJ/+kDV+kDTf9N/03/V+kDV+kDV+kDVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2RgSDAFUAdWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZDQEkAdXTAI6AIiHhAfpAATAhVQHZDgGgMNEw0QjRVQ/RgBFh0YAfYdMAMIATYdHAAPgq0CDXSsADgBZh0XD4ZPLgRdTU1fpA03/Tfw/AAFUPwACxD9N/1dN/03/Tf9MH1NGAFWHy0GoPAfaOTDCAOmHTAQHAAsgB8uBocyEBzwsBcCIBzwsBydABzgL6QDBQAs5xzwthgBWAFRPPCx8TzMlQAszJcPsAgCRidYAmY4AOgCxjgDdlAdkuIeD4KCDTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkQAf4wBNAg10rAAsgB8uBFUZnLfxjLfxbLf4AhYSjOgBlhKc6AHWFVAcyAI2FVAst/gB9hKs4ey3+AIWFVDct/gBxhVQLMgBdhVQPMgBZhAcyAFWEBywcBgBhhzwsHgBthVQLLf1DTy39Ric5R2c5ROc6AFmFVDMv/gBNhVQLL/4ASEQCgYSvOgBdhVQvOUNvLfwfSBzBQhMsHE8oHyVAFzMlQB8zJUAjMyVADzMlQBMzJUAPMyVAEzMlQBMzJI3Bf8HBfYHKAGWOAF3JjcoAZY4AbYdkBnALAFvKpMATyee1E0NMAAfJ/+kDV+kDTf9N/03/V+kDV+kDV+kDVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2RMBVAHVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2RQBJAHV0wCOgCIh4QH6QAEwIVUB2RUB6DDRMNEI0VUP0YARYdH4KtCAE2HRINdKwAOAFWHRcPhk8uBF1NTV+kDTf9N/DsAAD8AAUA+xDdN/1dN/03/Tf9MH1NEwgBJh8tBq+Cgg0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZFgH+MIA7YdMBAcACyAHy4GhwIQHPCwFSGs8LfxjLfwjJgBhhKM5zKQHPCwEC0FCKy3+AIWEpzoAdYQHMAYAjYc8Lf4AfYSrOULPOgBZhVQjMBPpAMFDTy3+AH2FVCct/gBphVQLMgBRhVQTMUEzOgBJhVQvLB4AWYVUEyweAFoAaYRcA+FUEy3+AFWFVBct/cRbPC2GAFisBzwsfUevOUZvOgBZhVQTL/4ATYVUFy/+AEmEszoAXYVUMzlDoy38I0gcwULXLBxTKB8lQBszJUATMyVAJzMlQBszJUAfMyQHMyVACzMlQBczJUAPMyXD7AFXRcoARY4AOgBRjgB9lAdkCnoIQdxnjiiMBuY6A4YIQY6s+zBO68qkwBPJ57UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNX6QNX6QNXTAI6AIiHhAdTU0wfT//pAVUBfBSFVAdkdGQE0MNXTAI6AIiHhAdTU0wfT//pAVUBfBSFVAdkaASQw1dMAjoAiIeEB+kABMCFVAdkbAf4w0TDRMNEw0TDR+CrQAtEwINdKwAMD0XD4ZALy4EUwgBxh0wEC1NTV+kDTf9N/B8ACB9N/1dN/03/Tf9MH1NHIDvLgaHMuAc8LAXAvAc8LAcnQAc6CEOOrPswvAc8LH1UP+kAwUALOULvOUF7LfxPLf1B8y38Vy39xF88LYVA2HABSy39QSct/EssHzMlQBszJAczJcPsAghBjqz7MVcBVHoAOgBJjgB1lAdkBpoIQdxnjihO68qkwBPJ57UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNX6QNX6QNWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZHgFUAdWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZHwEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SAB+gHRBNEM0VuAEmHRgBNh0YAUYdEBwAAKwABQCrGAFGHRcPhk8tBqgC5h0wEBwALIAfLgaHMhAc8LAXAiAc8LAcnQAc5Rwc6AE2EizoAZYSPOgBlhAct/gBJhVQHMUJLMA/pAMFANzlExzoASYSLOgBVhVQjLf4IQ9xnjiiQBIQH+zwsfUJXMgBNhJM6AEWFVDsxQkssHgBRhVQXOcRfPC2GAEmFVCct/UILL/1Diywccy/+ONclQAszJUArMyVAHzMlQCMzJUALMyVAHzMlQBczJUAXMyXD7AIIQdxnjilWQVRtV3oAaZQHZjhBwFc8LAFUHMCRVAVVyVRjZLAHhcSIAEBXPCwAaziPZA8bfAdBtIdMAAfJwINYB0wAw8ncwIW1VAyEgVQMh2zyAH2UC8rQwCQgGVQhVDFUMVQxVDFUMVQtVDFUHVQxVDFUMVQxVDFUN2zyAH2UC8rSOgALTAJeLCHEBMCPZATAhAeFwI9lMQCQBPHEWsI6AJiHgcZXytDAg2XEVupNwJNnhiwjRI3BZ2SUBTJbtQO1Q2zBWF8cBA8MAjoAkIeFWGccCIeEw8nlwgBdyY4AXZQHZJgP8MFYY1w0fb6OccFUggBd1Y4AaZQHZ4TBWGddJ8rCc8nlwgBdyY4AXZQHZ4YAYYdMfnVvyeXCAFnJjgBZlAdmCECehmIQjAbmOgOECwAoi4e1E0NMAAfJ/+kDV+kDTf9N/03/V+kDV+kDV+kDV0wCOgCIh4QHU1NMH0//6QFVAMignAAxfBSFVAdkBNDDV0wCOgCIh4QHU1NMH0//6QFVAXwUhVQHZKQEyMNWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SoB/AHRBNEF0VsE0TAP03/TfwbRBdN/03/VgCth0wAC+kAN0QzU1ATTANMA+kD6QPoAMCq8CNMHgBVh0dP/1fpA1NRw+GTTB9P/1fpA0QHRBtEP8uBlgBxh8tBmVhLy4Gf4KtAg10rAA/LgRdTU1fpA03/Tf1E/xwUD03/V03/TfysBatN/0wfU0V8J8uBpXwMj0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZLAH+yILwds9XRdznxWAjTxBsGtlfLM5X8JuDi9Vy1urNDLMoQwkhAc8L/3EiAc8LAFOQznAkAc8LAIAUFM8LDwbSBzBTBsoHySTMcBPPCyCCEgE0ABQmAc8LJ3QnAc8LAnAnAc8LP1YQ0wEHyVYaI8xWEizOVkdVB/QAUYbKB1A4zC0C/slwE88L/xLMyVYZVQHMVhQBywdwzwt/VhMBy//MySDXZSUBzwsPgvB2z1dF3OfFYCNPEGwa2V8szlfwm4OL1XLW6s0MsyhDCc8L/wH5AM8L/8nQ+QIVzwv/ydAkwQOZXwTAA/LQY/I04QTAAvK0BNMAjoAiIeEB0wQB1xgBMCEvLgAGVQHZAf5ygB5hAfsCyHAhAc8LAVYTVQnOcM8LIAHJVhFVCcx0FM8LAwHQVkVVAvQABdIHMFIOygfJUArMyVAEzFCDzlLYzIAUYVUHzlClygcCyVL4znDPC/8XzMlSqcsHcM8Lf1YXAcv/GMzJINdlFM8LD3AT+gKAPmEB9ABw+gJw+gJwMAH8zwthyYEAgPsAgvB2z1dF3OfFYCNPEGwa2V8szlfwm4OL1XLW6s0MsyhDCRLPC/8C+QASzwv/ydD5AhXPC//JyHEhAc8LAIATYSHMgBNhAcwD0FDzyweAIGEizoAXYQHLf4AaYQHLf3AjAc8LAFFTzoAhYSbOgBhhVQLLf1UPMQDeVQPL/1UMVhDMUWXOgBthVQXOUNbMG8sHgBNhAcv/Hc5Quc6OLzADyVAIzMlQAszJUAfMyVAFzMlQBczJUAbMyVAEzMntVHqAFWKAFIAXY4ApZQHZVhQh4YAbYVUNziFwVRlVO1UsVQhVClU7VQ7ZAryCECyiDPUjAbmOgOGCECehmIQTuiLhAvJ57UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNX6QNX6QNWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZOTMBVAHVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2TQBJAHV0wCOgCIh4QH6QAEwIVUB2TUB/jDRMNEI0VUP0YARYdGAEmHR+CrQINdKwAOAFWHRcPhk8uBF1NTV+kDTf9N/gDdh0wDTANMA+kAwUAfHBQPTf9XTf9N/03/TB9TRXwny4GTIgB1hIc6AHWEBy39xIgHPCwCAGWEjzoAaYSTOgBthJc6AHWFVBMt/cBbPCwCAHmE2ARwhzoAdYVUGy3+AFGHAADcB7I50gBxh+kCONTBQCs7JUAXMyVAIzMlQBszJUATMyVACzMlQA8zJAczJ7VSCECehmISAFGKAFYAWY4ApZQHZATAkIeCAFmEszIAWYQHMgBVhAcsHgBRhAcv/gBNhAc4hcF8wVQxVGVUUVT1VC1UfVRtVLoARYdk4AGKfJFVJXwUhVVp1gBFjVarZVhcB4YAbYSnMgBthAcyAGmEByweAGWEBy/+AGGEBziHZAaSCECyiDPUTuiLhAvJ57UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNX6QNX6QNWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZOgFUAdWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZOwEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TwB/gHRBNEM0VuAEmHRgBNh0YA0YdMA0wDTAPpAgBlh0fpAB8AAVQ/AALGAGmHRcPhkB/oA7UdvEG8XbxASonL7AlsF8tBqyFPgznAiAc8LAXAjAc8LAHYhAc8LAgLJUuTMVh8lzlYaJs5WGAHMAVYgzwt/UvPMBdBQBM6AJGHTHzA9AdxS5ssHVh9VAst/UVbLH1YXVQTMULPOU7XOVhwnzlYeKM5WGFUFywdWJVUNzlYgVQjLf3AX+gJS+Mv/VhdVAsv/LcAAgD1hVQj0AHD6AnD6AnHPC2GOgC8h4XEczwsAVhcBzitVClUBVYJVC1UL2T4B/jAJyVAHzMlQAszJAczJUAPMyQHMyVADzMlQAszJUALMyYEAgPsAyHEhAc8LAIAUYSHMgBRhAcxR0cwczBrLBxjL/1UPVQrLB3AqAc8LAIATYSvOgBRhLM6AFWEtzoAbYSTOgBRhVQXL/4AZYVUOzoAYYQHLf4AXYQHLf4AWYQE/AKbLf1DXzoASYVUMzo4vMAbJAczJUAXMyVADzMkBzMkBzMlQAszJAczJ7VSCECyiDPVV0IAUgBBjgCJlAdkuIeCAEmFVD84hcFUJAVUKVQNVZFUK2QG87UCOVoAZYe1QC4ARYYATYYAUYXBf8HBfMIATYYAwYYAiYXKAL2OAJGGAMGF3gB9jgCBhgCVhgCFhgCZhdIAtY3KAJ2MBgDBhgCphdYAsY4AQgCBjgDBhgDBhVQ/TAEED/o4lcXBfwFUOMFULVRlVCVUPgA6AEWOAG2GAG2F3gBVjc4AcY14Q2SIB4SDTAI4vcXBfwFUdgBFhXwNVC1UZVQlVD4AOgBFjgBthgBthdYAXY4AcYXKAG2NygB1jAdlxIwG5joDgcRO6IuHVjoAB0wCZcHAkVREBVRHZIgHh0wRFQ0IABnEk2QH8jnmOZ45VjkMC0XFfIFUEVRdVG1UOgBJhgBRhcoAWY3OAGWNfDVUMVRpVClUPgA6AEWOAHGGAHGFzgBpjcoAbYwFzgBpjcoAdYwHZA9MAlHBwJtkiAeHUAXEm2QPTAJRwcCbZIgHh1AFxJtkC0wCUcHAl2SIB4dQBcSXZAtMARAAsm3BfICZVEVUDVRLZIgHh0wDTAHEm2QEWjoAhVSFeEFUSAeJGAS6OgAHTAJlwcCRVEQFVEdkiAeHTBHEk2UcBNo6AAtMAm3BfICZVEVUDVRLZIgHh0wDTAHEm2UgBJI6AAtMAlHBwJdkiAeHUAXEl2UkBJI6AA9MAlHBwJtkiAeHUAXEm2UoB/ALTAI5FcXBfIHFVBVUIVRtVDoASYYAUYXWAFmNfDFUNVRtVC1UPgA6AEWOAHWGAHWGAHWFygBxjAXOAGWOAHGGAHGGAHWGAHmHZIgHh1AFwcV8gVQVVCFUbVQ6AEmGAFGF1gBZjXwxVDVUbVQtVD4AOgBFjgB1hgB1hgB1hcksALoAcYwGAHGFygBtjAXKAG2OAHWGAHmHZAeztQI46gBJh7VAOD1UPgBFhcF/wcF/AgBxhgA2AIGOAKWGALWF0gCdjcoArYwGALGGALWGAFYAZY4AuYYAuYSbTAI4s0wDTANMA+kD6QPoA9AT6APoA0z/TH3FwVQ2AFWFbVQ5VP1WnVS9eEIATYdkiAeFbJtMBTQH+jiptbXJwXyAlcF9QVRxbVQ1VPlUrgBFhVR2AEWFVPIARYYARYYATYYATYdkiwQOOOALAAyLh+kABAfpAAQHTP9MfAW1tcXJwX0BVDYAVYVtVDlU/VS9VH1UNgBFhVTtVHwGAEmGAE2HZ4QLAAiLh+kABAfpAAQH6AG1tcXAjcE4ATl8wcVUNgBVhW1UOVT9VL4ARYVUdAYARYVU8gBFhgBFhgBJhgBNh2Q==",
        code: "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",
        codeHash: "21e53913a74f5d4da9094d284a5c2ad9ad7a3423a8288c0922659d35157b667e",
    };
    
    constructor(options: AccountOptions) {
        super(XchgPairAccount.package, options);
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: {
        min_amount: string | number | bigint// uint128,
        minmove: string | number | bigint// uint128,
        price_denum: string | number | bigint// uint128,
        deploy_value: string | number | bigint// uint128,
        notify_addr: string// address,
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
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async runLocalOnDeploy(input: {
        min_amount: string | number | bigint// uint128,
        minmove: string | number | bigint// uint128,
        price_denum: string | number | bigint// uint128,
        deploy_value: string | number | bigint// uint128,
        notify_addr: string// address,
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
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runRequestDetails(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
        }
    }> {
        return await runHelper(this, "requestDetails", input);
    }

    async runLocalRequestDetails(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
        }
    }> {
        return await runLocalHelper(this, "requestDetails", input);
    }

    async runSetNext(input: {
        next: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setNext", input);
    }

    async runLocalSetNext(input: {
        next: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setNext", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            flex: string// address,
            ev_cfg: {
                transfer_tip3: string// uint128
                return_ownership: string// uint128
                order_answer: string// uint128
                process_queue: string// uint128
                send_notify: string// uint128
                dest_wallet_keep_evers: string// uint128
            }// tuple,
            deals_limit: number// uint8,
            xchg_price_code: string// cell,
        }
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async runLocalGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            flex: string// address,
            ev_cfg: {
                transfer_tip3: string// uint128
                return_ownership: string// uint128
                order_answer: string// uint128
                process_queue: string// uint128
                send_notify: string// uint128
                dest_wallet_keep_evers: string// uint128
            }// tuple,
            deals_limit: number// uint8,
            xchg_price_code: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

    async runGetPriceXchgCode(input: {
        salted: boolean// bool,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runHelper(this, "getPriceXchgCode", input);
    }

    async runLocalGetPriceXchgCode(input: {
        salted: boolean// bool,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getPriceXchgCode", input);
    }

    async runGetPriceXchgSalt(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runHelper(this, "getPriceXchgSalt", {});
    }

    async runLocalGetPriceXchgSalt(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getPriceXchgSalt", {});
    }

}

