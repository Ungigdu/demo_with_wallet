require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const { kovan_settings, binance_test, binance_main, mainnet_settings, matic_settings, rinkeby_settings} = require("./network.config")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      },
      {
        version: "0.7.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      },
      {
        version: "0.5.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      },
      {
        version: "0.4.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      gasPrice : 0,
    },
    kovan: kovan_settings,
    binance_test: binance_test,
    binance_main: binance_main,
    mainnet: mainnet_settings,
    matic: matic_settings,
    rinkeby: rinkeby_settings,
  }
};
