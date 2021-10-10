const INFURA_PROJECT_ID = "d6c0e163784741cfb36cc7ec5526c6b0"
const fs = require("fs");

function loadNetworkConfig(url, file, keyNames) {
  let settings = {
    url: url,
    accounts: []
  }
  try{
    let file_content = fs.readFileSync(file)
    keys = JSON.parse(file_content);
    for(let k of keyNames){
      settings.accounts.push(keys[k].pri)
    }
  }catch (e){
    console.log(e)
  }
  return settings
}

module.exports = {
    kovan_settings: loadNetworkConfig(`https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
                        "/Users/sunzy/workspace/.key/keyFile_kovan.json",
                        ["KovanDefault", "Kovan2"] ),
    binance_test: loadNetworkConfig(`https://data-seed-prebsc-1-s1.binance.org:8545/`,
                        "/Users/sunzy/workspace/.key/keyFile_binance_test.json",
                        ["BinanceTest01","BinanceTest02"]),
    binance_main: loadNetworkConfig("https://bsc-dataseed.binance.org/",
                        "/Users/sunzy/workspace/.key/keyFile_binance_main.json",
                        ["BinanceMain"]),
    mainnet_settings: loadNetworkConfig(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
                        "/Users/sunzy/workspace/.key/keyFile_main.json",
                        ["NFTCreator", "SixTaxedRouter","MainnetBusiness","MainnetDefault"], null),
    matic_settings: loadNetworkConfig("https://polygon-mainnet.infura.io/v3/611c1a94e16b49269e327fea45dfa4bb",
                        "/Users/sunzy/workspace/.key/keyFile_matic.json",
                        ["matic_default"], null),
    rinkeby_settings: loadNetworkConfig(`https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
                        "/Users/sunzy/workspace/.key/keyFile_rinkeby.json",
                        ["NFTCreator", "rinkebyNFT01"], null),
}
