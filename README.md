# flex-sdk-js

FLEX-SDK is a library with convenient facade over the FLEX smart contract system
and can be used by FLEX maintainers, FLEX traders and others.

The library is targeted to be used with Node.js applications.

Read the full Flex documentation here https://docs.everos.dev/flex

# Initialize Flex object

Library setup is simple, it includes setup for the Everscale client and configuration of the FLEX SDK.

To get the address of Flex Super Root contract go to the GraphQL playground and run this query:

```
query{
  flex{
    address
  }
}
```
Now specify the endpoint URL and Super Root address in the config
and initialize `flex` object with it. You will need `flex` object later:

```ts
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex, FlexConfig } from "../flex";

TonClient.useBinaryLibrary(libNode);
const FLEX_CONFIG: Partial<FlexConfig> = {
    evr: {
        sdk: {
            network: {
                endpoints: ["FLEX ENDPOINT"],
            },
        },
    },
    superRoot: "Super Root address",
};
const flex = new Flex(FLEX_CONFIG);

```
# About Signer parameter

Many functions of FLEX SDK accept parameters named `signer`.
It is an object that has a secret, required to sign messages that will be sent to the blockchain.

`signer` parameter can accept these values:

- String containing the secret key of the key pair required to sign messages.
  Secret key must be represented as a hex string with exactly 64 characters.
  
- Instance of the [`Signer` type](https://docs.everos.dev/ever-sdk/reference/types-and-methods/mod_abi#signer) from the `@eversdk/core` library. 

- Name of the signer in the [`everdev` signer registry](https://github.com/tonlabs/everdev/blob/main/docs/command-line-interface/signer-tool.md).

# Manage Client and Traders

Before trading on FLEX you have to prepare some required FLEX actors: Client and Trader.

Client creation requires a wallet with EVER balance that will become an owner
for Client contract used to perform management operations of Flex. 

Good choice is a Multisig Wallet because it can send payloads to other contracts. 

Owner contract means that only this contract can call functions of Client contract. 
One of the management funcstions is deploy of a Trader's contract.

Let's deploy Flex Client and then a Trader: 

```ts
const clientAddress = await Client.deploy(flex, {
    everWallet: {
        address: "0:d807caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
        signer: "everWallet private key",
    },
    signer: "Flex Client private key, can be the same with everWallet signer",
    
});
console.log(`Client: ${clientAddress}}`);
```

To deploy a Trader, a person or organization who becomes Trader must generate a pair of keys and profive Flex Client with
**the pubkey only**.

If Flex Client will be its only Teader herself, than it can use its Client pubkey. 

Then, Flex Client must generate some Trader ID (uint256) that must be unique for each its Trader. 


We already generated some ID and have a Trader pubkey, let's deploy Trader contract:

```ts
// Client deploys Trader's contract (`userIdIndex` contract)

await Trader.deploy(flex, {
    client: {
        address: clientAddress,
        signer: "Client private key",
    },
    id: traderId,
    name: "any name",
    pubkey: "162c6c708018da073729dd4a60118425dd917e44653383f1faed4d16b94af30b" // Trader's pubkey
});

```

# Deposit on Flex

You can deposit EVERs and Tip3 tokens on Flex.

## Deposit EVERs

To deposit evers, transfer them to the Ever Vault contract. Specify Trader ID.

```ts
let trader_ever_wallet =  await Trader.deployEverWallet(flex, {
    clientAddress: clientAddress,
    everWallet: {
        address: "0:d677caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
        signer: "everWallet",
    },
    tokens: 100,
    evers: 20,
    keepEvers: 15,
    traderId: traderId,
    wrapperAddress: "0:c072805ae38d548d4abbaddf929659d37584117b63b0969eb3f812c6252b12fb", // EVER wrapper address
});

console.log(`Trader EVER wallet address: ${trader_ever_wallet} has beed topped-up.`);

```

## Deposit Tip3 tokens

To deposit Tip3 tokens, transfer them from Tip3 wallet to the Flex Vault contract.
Specify Trader ID. 

```ts
let trader_tip3_wallet =  await Trader.deployTip31Wallet(flex, {
    clientAddress: clientAddress, 
    everWallet: {
        address: "0:d677caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
        signer: "everWallet",
    },
    traderId: traderId,
    tokenWalletAddress: "0:d4208262595226ac069b94d716ec6339882ec93a0e7e254186f3eb77b7d34c4b", // tip3 wallet owned by everWallet
    tokenWrapperAddress: "0:d51c96406f74e4a1168f5ca3a936330beb7653782743cdce23c11d285c92f9ca", // Token Wrapper address on Flex
    tokenWrapperWalletAddress: "0:ca4a6787b720f38745ec2a13f997061a7ba3dfa2e9b4432771a9cf61ea6ac984", // tip3 vault contract of the Token Wrapper
    tokenUnits: "100000000000", // tokens to deposit
    transferEvers: 21,
    evers: 20,
    keepEvers: 15
}
);

console.log(`Trader Tip3 wallet address: ${trader_tip3_wallet} has beed topped-up.`);

```

# Trading

## Orders

Trader needs to have 2 wallets for each currency in a Pair to trade in that Pair. 
Go to the Deposit sections to read how to top-up token wallets.

```ts
await Trader.makeOrder(
    flex,
    {
        clientAddress: clientAddress,
        trader: {
            id: traderId,
            signer: `Trader's private key`
        },
        sell: true,
        marketAddress: marketAddress, // Trading pair address
        price: 2.6,
        amount: 18,
    },
);
```

# Examples

You can examine the `examples` folder for a lot of examples. 
To build run
```
npm run build
```

To run an example do

```bash 
cd dist/examples
node <example name>
```

# CLI

The major part of library functionality is accessible via command line interface flex-cli.

To use command line interface run command `npm run cli command [options] <arguments>`.

You can get help on CLI running `npm run cli --help`.

# Remarks for the FLEX SDK Developers

FLEX SDK contains folder `contracts` with TS wrappers of all contracts used in 
FLEX contract system. 
Please note that at the moment, Flex library syncronizes contracts from the private repository. 

To update FLEX contract wrappers you have to perform following steps:

- Clone `ton-contracts` repository aside of `flex-sdk-js` folder.
- Checkout `ton-contracts` repo on required branch.
- Run `npm run update-contracts` inside of `flex-sdk-js` folder.

After that step the `flex-sdk-js` library can stop to compile.
You have to perform changes in library code to reflect changes in 
FLEX contract system if required.

# TESTS

## Install

```bash 
npm i
npm run build
```

## Unit Tests

```bash 
npm t
```

## Integration Tests

### Configure

Create config file.
Config file must be located and named as `flex-sdk-js/.secret/integration-test-config.json`.

```json
{
    "flex": {
        "evr": {
            "sdk": {
                "network": {
                    "endpoints": [
                        "https://devnet.evercloud.dev/<evercloud-project-id>/graphql"
                    ]
                }
            }
        },
        "superRoot": "0:7a6d3ab04ab26333d6e0523410b60d9f4bc55913e4c0291010c8314e9e47d169"
    },
    "everWallet": {
        "address": "<ever-wallet-address>",
        "signer": "<ever-wallet-signer>"
    },
    "client": {
        "address": "<flex-client-address>",
        "signer": "<flex-client-signer>"
    },
    "trader": {
        "signer": "<flex-trader-signer>"
    },
    "market": "0:a8f3f3bfafcac2adf95b62670aa01fbf610a103ce7029dc5f13cab4f0a7edfe8",
    "EVER": {
        "wrapper": "0:1cc3596e2db5cc92d0e02f55526f8aec949924ef320d72b763a5f4aafcca3e30",
        "wallet": {
            "address": "<ever-token-wallet-address>",
            "signer": "<ever-token-wallet-signer>"
        }
    },
    "TSDT": {
        "wrapper": "0:b550a9138452d36d0a1e38edebac0063f3126e4d7a4cf593e6c090faa2ec0523",
        "wrapperWallet": "0:c304ee549051d5500877f2fc796bb81e3f9cfde2b1b62de0eb360804ab7fe661",
        "wallet": {
            "address": "<tsdt-token-wallet-address>",
            "signer": "<tsdt-token-wallet-signer>"
        }
    }
}
```

Where:

- `<ever-wallet-address>` and `<ever-wallet-signer>` is a main ever wallet.
  If you omit address, it will be calculated from signer's public key.
  This wallet must have enough balance to perform all integration test.

- `<flex-client-address>` and `<flex-client-signer>` is a FlexClient account. 
  
- `<flex-trader-signer>` is a traders keys used in trading operations. Public key of this signer is
  used as a `traderId`.

- `<ever-token-wallet-address>` and `<ever-token-wallet-signer>` is a multisig wallet that will be 
  used as an external EVER wallet.  
  If you omit address, it will be calculated from signer's public key.
  Usually it is the same as a main ever wallet.

- `<tsdt-token-wallet-address>` and `<tsdt-token-wallet-signer>` is a TSDT TIP3 Token Wallet that will be used
  as an external TSDT wallet.
  Usually this wallet is related to the main ever wallet. So `<tsdt-token-wallet-signer>` is equal to
  the `<ever-wallet-signer>`.

Recommended signer names:
- `flex-ever-wallet` for `<ever-wallet-signer>`.
- `flex-client` for `<flex-client-signer>`.  
- `flex-trader` for `<flex-trader-signer>`.
- `flex-ever-token-wallet` for `<ever-token-wallet-signer>`.
- `flex-tsdt-token-wallet` for `<tsdt-token-wallet-signer>`.

### Prepare

If you have no deployed trader and token wallets yet, you can do it with `prepare` script.  

```bash
npm run integration-test-prepare
```

### Run

```bash 
npm run integration-test
```
