# kusa token

the KUSA token and MasterChief are both in KUSA_Chief.sol

## how to deploy

### 1. set up deploy environment

in hardhat.config.js, there is a setting for binance test net

```
binance_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: ["......"]
}
```
- url is network's end-point.
- accouts are list of private keys, please DELETE it after deployment if you want to deply in mainnet

you can add your owner network.

### 2. deploy

to deploy in binance_test net, run script
```
hardhat run scripts/binance_test/depoly.js --network binance_test
```

- Do not forget to DELETE accounts after you are done

## about total supply

- owner can mint any number of token
- owner can let other mint fixed upperbound token amount using addPartner(partner_address, bound), this function can be called again if you decide to move to a new bound
