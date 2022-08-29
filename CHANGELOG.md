# Release Notes

All notable changes to this project will be documented in this file.

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
