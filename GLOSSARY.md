# flex-sdk-js

# Glossary

- `super root` – the exchange

- `global config` – focus point of the exchange.
  All exchange tasks performs on global config.
  Each exchange at any time has two global configs: release and beta.
  Release config is a config where current trades are performed.
  Beta config is a config that will become the release soon.

- `token` – A cryptocurrency or crypto token used in trading operations.
  Each token has a value pool that it spend to the token wallets.
  Each global config has a registered list of tokens (listed tokens).
  Controlled by token issuer.

- `pair` – is a market for trades for specified two tokens. One token is a `major`, other is a `minor`.
  all prices on market are represented in amount of minor tokens for 1 major token.
  Each global config has a registered list of pair (listed pairs).
  Controlled by pair issuer.

- `token wallet` (or `wallet`) – exchange account that holds some amount of some token.
  Used in trades.
  Controlled by user.


- `client` – person or organization who performs several operations on exchange.

- `user` – act like broker for client.

 
# Tasks

- `deploy super root`
- `deploy global config`
- `enlist token`
- `enlist pair`
- `deploy wallet`
- 
``
