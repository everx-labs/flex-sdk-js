*** Settings ***
# Prerequisite
    - same as in trading
    - makeOrder(priceA)
    - makeOrder(priceB)
    - makeOrder(priceC)
    - makeOrder(priceD)
    - makeOrder(priceE)
    - makeOrder(priceF)
    - makeOrder(priceG)
    - makeOrder(priceH)
    - makeOrder(priceZ)
    - create another Trader and his wallets
    - makeOrder(priceX buys priceZ)
    [Teardown] cancelAllOrders

*** Test Cases ***
# Market
    Test queryOrderBook 
    Verify order list of priceA ... priceH

    Test queryPrice 
    Verify priceScale and other

    Test queryMarkets 
    Verify EVER/TSDT exists

# Token
    Test queryTokens 
    Verify TSDT exists

# Trader
    Test queryOrders 
    Verify order list of priceA ... priceH

    Test queryTrades 
    Verify 1 trade priceX buys priceZ

    Test queryWallets 
    Verify 2 wallets for this trader

    Test getTopUpInfo
    call Trader.getTopUpInfo
    Verify wallet value
