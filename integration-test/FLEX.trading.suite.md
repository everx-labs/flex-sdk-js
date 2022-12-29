*** Settings ***
# Prerequisite
    - Deploy Msig everWallet (1000 EVER)
    - Mint TIP3.2 tokens (100 TSDT) for Msig everWallet
    - Deploy Flex client (100 EVER)
    - Generate pub/priv keys for Trader Id
    - Deploy Trader wallets (Native 100 EVER & Wrapped 50 TSDT & Wrapped 50 EVER)

*** Test Cases ***
# makeOrder
    Test price field default
    call flex.makeOrder(price: DecimalNumber, ...params)
    Verify flex.queryOrders().filter(orderId) { priceNum / priceScale same as DecimalNumber }
    [Teardown] cancelOrder

    Test price field tokens
    call flex.makeOrder(price: { tokens: DecimalNumber }, ...params)
    Verify flex.queryOrders().filter(orderId) { priceNum / priceScale same as DecimalNumber }
    [Teardown] cancelOrder

    Test price field units
    call flex.makeOrder(price: { units: DecimalNumber }, ...params)
    Verify flex.queryOrders().filter(orderId) { priceNum / priceScaleDenom same as DecimalNumber }
    [Teardown] cancelOrder

    Test amount field default
    call flex.makeOrder(amount: DecimalNumber, ...params)
    Verify flex.queryOrders().filter(orderId) { amountLeft: DecimalNumber }
    [Teardown] cancelOrder

    Test amount field tokens
    call flex.makeOrder(amount: { tokens: DecimalNumber }, ...params)
    Verify flex.queryOrders().filter(orderId) { amountLeft: DecimalNumber }
    [Teardown] cancelOrder

    Test amount field units
    call flex.makeOrder(amount: { units: DecimalNumber }, ...params)
    Verify flex.queryOrders().filter(orderId) { amountLeft: DecimalNumber / TokenDecimals }
    [Teardown] cancelOrder

    Test evers field undefined
    call flex.makeOrder(evers: undefined, ...params)
    Verify Flex client Native Ever decreased on something
    [Teardown] cancelOrder

    Test evers field number
    call flex.makeOrder(evers: xxx, ...params)
    Verify Flex client Native Ever decreased on xxx
    [Teardown] cancelOrder

    Test evers field string
    call flex.makeOrder(evers: "xxx", ...params)
    Verify Flex client Native Ever decreased on xxx
    [Teardown] cancelOrder

    Test evers field BigInt
    call flex.makeOrder(evers: xxx as BigInt, ...params)
    Verify Flex client Native Ever decreased on xxx
    [Teardown] cancelOrder

    [skip] Test mode field undefined
    call flex.makeOrder(mode: undefined, ...params)
    Verify ?????
    [skip] Test mode field IOC

    [skip] Test mode field IOC
    call flex.makeOrder(mode: IOC, ...params)
    Verify ?????
    [Teardown] cancelOrder

    [skip] Test mode field IOP
    call flex.makeOrder(mode: IOP, ...params)
    Verify ?????
    [Teardown] cancelOrder

    [skip] Test mode field POST
    call flex.makeOrder(mode: POST, ...params)
    Verify ?????
    [Teardown] cancelOrder

    Test orderId field
    call flex.makeOrder(orderId: RandomNumber, ...params)
    Verify
        Result orderId should be same RandomNumber
        flex.queryOrders().filter(RandomNumber).count == 1
    [Teardown] cancelOrder

    Test sell field true
    call flex.makeOrder(sell: true, ...params)
    Verify flex.queryOrders().filter(orderId) { side: "SELL" }
    [Teardown] cancelOrder

    Test waitForOrderbookUpdate field undefined
    call flex.makeOrder(sell: true, ...params)
    Verify flex.queryOrders().filter(orderId) { side: "BUY" }
    call flex.makeOrder(sell: true, ...params)
    Verify flex.queryOrders().filter(orderId).count == 0
    call flex.waitForMakeOrderUpdate(orderId)
    Verify flex.queryOrders().filter(orderId).count == 1
    [Teardown] cancelOrder

    Test waitForOrderbookUpdate field false
    call flex.makeOrder(sell: true, ...params)
    Verify flex.queryOrders().filter(orderId).count == 0
    call flex.waitForMakeOrderUpdate(orderId)
    Verify flex.queryOrders().filter(orderId).count == 1
    [Teardown] cancelOrder
