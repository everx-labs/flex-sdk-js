# flex-sdk-js

FLEX-SDK is a library with convenient facade over the FLEX smart contract system
and can be used by FLEX maintainers, FLEX traders and others.

The library is targeted to be used with Node.js applications.

Read the full Flex documentation here https://docs.everos.dev/flex

# Setup Library

Library setup is simple, it includes setup for the Everscale client and configuration of the FLEX SDK.

To get the address of Flex Super Root contract go to the GraphQL playground and run this query:

```
query{
  flex{
    address
  }
}
```
Now specify the address of the endpoint and the Super Root in the config:

```ts
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";

TonClient.useBinaryLibrary(libNode);
Flex.config = {
    evr: {
        sdk: {
            network: {
                endpoints: "Insert FLEX endpoint here",
            },
        },
    },
    superRoot: "Insert Super Root address here",
};

 const flex = new Flex();

```

Many functions of FLEX SDK accept parameters named `signer`.
It is an object that has a secret, required to sign messages that will be sent to the blockchain accounts.

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



