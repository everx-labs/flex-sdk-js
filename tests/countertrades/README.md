## Send counter trades using pre-deployed traders contracts.

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
 
