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
    [Teardown] cancelAllOrders

*** Test Cases ***
# cancelOrder
    Test orderId field number
    call flex.canelOrder(orderId, priceA as DecimalNumber, ...params)
    Verify flex.queryOrders().filter(orderId).count == 0

    Test price field tokens
    call flex.canelOrder(orderId, priceB as {tokens: DecimalNumber}, ...params)
    Verify flex.queryOrders().filter(orderId).count == 0

    Test price field units
    call flex.canelOrder(orderId, priceC as {units: DecimalNumber}, ...params)
    Verify flex.queryOrders().filter(orderId).count == 0

    Test orderId field string
    call flex.canelOrder("orderId", priceD as DecimalNumber, ...params)
    Verify flex.queryOrders().filter(orderId).count == 0
    [Teardown] cancelOrder(priceB)

    Test waitForOrderbookUpdate field undefined
    call flex.canelOrder(orderId, priceE as {units: DecimalNumber}, ...params)
    Verify flex.queryOrders().filter(orderId).count == 1
    call flex.waitForCancelOrder(orderId)
    Verify flex.queryOrders().filter(orderId).count == 0

    Test waitForOrderbookUpdate field false
    call flex.canelOrder(orderId, priceE as {units: DecimalNumber}, ...params)
    Verify flex.queryOrders().filter(orderId).count == 1
    call flex.waitForCancelOrder(orderId)
    Verify flex.queryOrders().filter(orderId).count == 0

# cancelAllOrders
    Test cancelAll
    call flex.canelAllOrders(...params)
    Verify flex.queryOrders().filter(orderId[priceA ... priceX]).count == 0
