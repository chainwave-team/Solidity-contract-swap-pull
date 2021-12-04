// trufflesuite.com/docs/advanced/configuration

require('dotenv/config')

const HDWalletProvider = require('@truffle/hdwallet-provider');
const path = require('path');

const RPC_URL = `https://${process.env.NETWORK}.infura.io/v3/${process.env.INFURA_TOKEN}`

module.exports = {
  contracts_build_directory: path.join(__dirname, "abis"),

  // truffle test --network <network-name>
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, RPC_URL)
      },
      network_id: '4',
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      from: process.env.OWNER_WALLET // Test MetaMask
    }
  },

  plugins: [
    "truffle-plugin-verify"
  ],

  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000,
    useColors: true,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  db: {
    enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
  }
  // }
};
