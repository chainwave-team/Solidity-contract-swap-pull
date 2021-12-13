require('dotenv/config')

const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env["MNEMONIC"];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];
const ownerWalletAddress = process.env["OWNER_WALLET"];
const polygonScanApiKey = process.env["POLYGON_SCAN_API_KEY"];

module.exports = {
  // truffle test --network <network-name>
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    //polygon Infura mainnet
    polygon: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl:
          "https://polygon-mainnet.infura.io/v3/" + infuraProjectId
      }),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137
    },
    //polygon Infura testnet
    mumbai: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl:
          "https://polygon-mumbai.infura.io/v3/" + infuraProjectId
      }),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80001,
      from: ownerWalletAddress // Test MetaMask
    }
  },

  plugins: [
    "truffle-plugin-verify"
  ],

  api_keys: {
    etherscan: polygonScanApiKey
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000,
    useColors: true,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",
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
  }
};
