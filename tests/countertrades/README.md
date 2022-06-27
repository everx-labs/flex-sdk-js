# Send counter trades using pre-deployed traders contracts.
This test uses 40 pre-deployed contracts. see [traders.config.json](src/traders.config.json).\
The balance (in evers) of these contracts is always kept positive thanks to a script running on sdk2.dev.tonlabs.io.
## Run test
```
npm i ../..
npm i
npm run build
npm run trades -- --help

> node dist/tests/countertrades/src/index.js trades "--help"

Usage: index trades [options]

Options:
  -n, --num-traders <number>        Number of traders. Must be even (default: 1)
  -m, --ms-between-orders <number>  Trader sends new order every m milliseconds (default: 5000)
  -c, --num-cycles <number>         Number of trade cycles to be performed (default: 1)
  -h, --help                        display help for command
```

Example: Run counter trades for 5 pair of traders. Each pair of traders sends 2 orders every 5000 milliseconds
```
npm run trades -- -n 20 -m 5000
```
## See results in Grafana
Open link: https://grafana.services.tonlabs.io/d/jhhSruC7k/flex-trades?orgId=1&from=now-30m&to=now&refresh=30s

## Detailed test description
https://www.notion.so/tonlabs/Ensure-a-stable-flow-of-Flex-trades-or-find-a-bottleneck-f9f67f1b27b846c39b8fafaa99f7212b#0c1b7ac4411a4d1cb060c227f76ffd84
