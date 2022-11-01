# Release Notes

All notable changes to this project will be documented in this file.


## [0.7.0] – 2022-11-02

### New

- Added flex client balance checking to the `deployTrader`.

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
