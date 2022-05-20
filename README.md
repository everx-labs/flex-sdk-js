# flex-sdk-js

FLEX-SDK is a library with convenient facade over the FLEX smart contract system
and can be used by FLEX maintainers, FLEX traders and other.

The library is targeted to be used with Node.js applications.

# Setup Library

Library setup is simple, it includes setup for the TonClient and configuration of the FLEX SDK:

```ts
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";

TonClient.useBinaryLibrary(libNode);
Flex.config = {
    client: {
        network: {
            endpoints: ["https://flex2.dev.tonlabs.io"],
        },
    },
    globalConfig: "0:402f14b65b6b7af9752910e77eabf8f71240f6c190b5e4f1ab4d56c09954b723",
};
```

Many functions of FLEX SDK accepts parameters named `signer`.
Is a secret required to sign messages that will be sent to the accounts on the blockchain.

`signer` parameters can be one of:

- Instance of the `Signer` type from the `@eversdk/core` library.

- String containing the secret key of the key pair required to sign messages.
  Secret key must be represented as a hex string with exactly 64 characters.
  FLEX SDK calculates the public part of the keypair from specified secret key.

- Name of the signer in the `everdev` signer registry. 


# Exchange Maintenance

## Super Root

## Global Config

## Tokens

## Pairs

## Migration

# Client Management

Before trading on FLEX you have to prepare some required FLEX actors: client and user.

## Clients and Users

Client creation requires helper account with EVER balance that can send internal
messages to other accounts. Good choice is a Multisig Wallet. 

```ts
const everWallet = new EverWallet({
    address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
    signer: "msig",
});

const client = await Client.deploy({
    everWallet,
    signer: "flex-client-1",
});

const userAccount = await client.deployUser({
    id: 1,
    name: "Client 1 User 1",
    signer: "flex-user-1-1",
    eversAll: 40e9,
    eversAuth: 1e9,
    refillWallet: 10e9,
    minRefill: 0.1e9,
});

```

## FLEX Wallets

# Trading

## Orders

If you have a FLEX wallet you can start make orders.

```ts
const order = await Trading.makeOrder({
    client: {
        address: "0:ae6cb924f28a5b95f61afd239ad7cf3920edcfadcda456afa3b2dea7c9da31a8",
    },
    wallet: {
        address: "0:62fe1c8d300724cb154dd54f9d498c0b8baacdc8687feabf9251716a3c2aa7a2",
        signer: "flex-wallet-1",

    },
    market: {
        address: "0:f0bb8d8a4a1416a7b380cb217513395aea994487a2b3e80129c136184def8bb4",
    },
    price: 1.23,
    amount: 1,
    userId: "88dfec98c82a5e34f3152be0525ec58544f9e1dcc9a88fde75f7b7eb4c31d4b5",
});
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

To update FLEX contract wrappers you have to perform following steps:

- Clone `ton-contracts` repository aside of `flex-sdk-js` folder.
- Checkout `ton-contracts` repo on required branch.
- Run `npm run update-contracts` inside of `flex-sdk-js` folder.

After that step the `flex-sdk-js` library can stop to compile.
You have to perform changes in library code to reflect changes in 
FLEX contract system if required.


