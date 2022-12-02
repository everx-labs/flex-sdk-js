# Release Notes

All notable changes to this project will be documented in this file.


## [0.10.0] – 2022-11-23

### New

- Integration tests.
- `Trader.cancelAllOrders` - cancels all orders for the specified trader.


## [0.9.0] – 2022-11-23

### New

- `Client.getClientInfo` - shows Flex Client contract's balance.
- `Trader.getIndexInfo` - shows User Index contract's address and balance
- `Trader.topUp`, `Trader.getTopUpInfo` - tops up and calculates the topup value for Trader's wallets and UserIndex contract


## [0.8.0] – 2022-11-18

### New

- decimal string in token value. E.g "1234567890123456789.1234".

### Fixed

- waiting for the derivative transactions was going into infinite loop if the shard had been stopped.

## [0.7.1] – 2022-11-09

### New

- additional logic to detect errors during making/canceling of orders

### Fixed

- optimization for first step of the makeOrder and cancelOrder

## [0.7.0] – 2022-11-08

### New

- ABI 2.3 Flex Contracts version was supported.
  
- `makeOrder` and `cancelOrder` now returns additional `status` field of type `enum MakeOrderStatus` representing the processing stage of the request. 
  Can be of [`STARTING`, `FINALIZING`, `SUCCESS`, `ERROR`]. 

- In case of `FINALIZING` status returned can be proceeded to the final result with 
  `waitForMakeOrder` and `waitForCancelOrder` functions. Just pass the result of `makeOrder`/`cancelOrder` as the input parameter.

  **Attention!!!!**

  - `ERROR` status means the error occurred in the contract system, which means you SHOULD NOT perform retries until you solve the error reason. 
  - Network errors are not resolved by `makeOrder`/`cancelOrder` methods. Wrap your code in `try catch` for network errors. In case of network error we suggest you to query trader info from the api to understand your state. See `/examples/trader-info.ts` sample

### Improved

- Added flex client balance check before trader Index Contract deploy to the `deployTrader`.

### Fixed

- If non-existing signer was specified then empty error message was printed. 
- make-order did not finish process in case of a full order closure.

## [0.6.0] – 2022-10-07

### New

- `Trader.cancelOrder` and `Trader.makeOrder` now work in 2 modes, defined by `waitForOrderbookUpdate` flag. If `false`, the functions return only 1st transaction that initiated the operation. If `true` - return also the second transaction that actually processed the operation, after which the orderbook is updated. 

## [0.5.0] – 2022-09-22

### New

- `Trader.cancelOrder`  and `Trader.makeOrder` now accept price and amount also in units. See the documentation and tests for more info. 

## [0.4.0] – 2022-09-21

### New

- `Trader.cancelOrder` now returns transactionID

## [0.3.0] – 2022-08-30

### New

- Contracts updated to the last version (commit bb3ec9320b130174e57142c492b90bf092fa6e25)

### Fixed

- Ever deposit fixed: `Trader.deployTraderEverWallet` function now uses `WrapperEverAccount` ABI instead of `WrapperAccount`
- Ever deposit `Trader.deployTraderEverWallet` does not perform an additional top-up any more

### Improvements

- Code refactoring. Only TS files left in the root folders. Build the library with `nmp run build` to get the entire build in the `dist` folder. Run examples from `dist/examples` folder.


## [0.2.0] – 2022-05-30

### New

- `Trader.makeOrder(...)` now returns `orderId` and `transactionId` fields

### Improvements

- Random generator is now used to generate order IDs instead of current timestamp. 
