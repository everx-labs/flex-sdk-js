*** Settings ***
# Prerequisite
    - Deploy Msig everWallet (1000 EVER)
    - Mint TIP3.2 tokens (100 TSDT) for Msig everWallet
    - Deploy Flex client (100 EVER)
    - Generate pub/priv keys for Trader Id
    - Deploy Trader wallets (Native 100 EVER & Wrapped 50 TSDT & Wrapped 50 EVER)
    - makeOrder(priceA)
    - makeOrder(priceZ)
    - create another Trader and his wallets
    - makeOrder(priceX buys priceZ)

*** Test Cases ***
# API
    Test query
    call flex.query(generated from FLEX.mm.md#FLEX.API.query.flex)

# API
    Test subscription
    call flex.query(generated from FLEX.mm.md#FLEX.API.subscription)
