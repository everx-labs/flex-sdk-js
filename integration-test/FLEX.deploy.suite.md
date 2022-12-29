*** Settings ***
# Prerequisite
    - Deploy Msig everWallet (1000 EVER)
    - Mint TIP3.2 tokens (100 TSDT) for Msig everWallet
    - Deploy Flex client (100 EVER)
    - Generate pub/priv keys for Trader Id
    - Deploy Trader wallets (Native 100 EVER & Wrapped 50 TSDT & Wrapped 50 EVER)

*** Test Cases ***
# Flex client
    Test client deploy
    call Client.deploy
    Verify client exists

# Trader
    Test trader deploy
    call Trader.dploy
    Verify trader exists

    Test deployEverWallet
    [after] deploy trader
    call Trader.deployEverWallet
    Verify wallet value

    Test deployTip31Wallet
    [after] deploy trader
    call Trader.deployEverWallet
    Verify wallet value

    Test topUp
    call Trader.deployEverWalletopUp
    Verify wallet value
