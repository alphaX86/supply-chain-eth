var HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "0x254819bd5887f5ca78053302fc51ec556b84f4e8a71f65d915fe6c73c60b653a";

module.exports = {
  plugins: ["truffle-security"],
  contracts_directory: "./contracts",
  contracts_build_directory: "./build",
  migrations_directory: "./migrations",
  networks: {
    test1: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [mnemonic],
          providerOrUrl: "https://eth-goerli.g.alchemy.com/v2/wcgTff7edMioNR2amK4y-vfZUsmBsl6a",
          numberOfAddresses: 1,
        }),
      network_id: 5,
      gas: 30000000, // Max is 10000000
      confirmations: 4,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 5000000,
      // maxFeePerGas: 10,
      // maxPriorityFeePerGas: 10,
    },
    dev: {
      provider: () => new HDWalletProvider({
        privateKeys: [mnemonic],
        providerOrUrl: "http://127.0.0.1:8545/",
        numberOfAddresses: 1,
      }),
      network_id: "*", // Match any network id
      //gas: 30000000, // Use `gas` & `gasPrice` only if creating type 0 transactions
      gasPrice: 20000000000, // (20 Gwei) All gas values specified in wei
      //maxFeePerGas: 10, // Use only if creating type 2 transactions
      //maxPriorityFeePerGas: 10, // Use only if creating type 2 transactions
      // from: "", // From which we account we have to deploy
      // websockets: true,
      // skipDryRun: false,
      // timeoutBlocks: 25, // If a transaction is not mined, keep waiting for this number of blocks
      // confirmations: 0, // No.of confirmations to wait between deployments
      // provider: function () {
      //   // Use host, port for Web3 HttpProvider
      //   // Use only provider for any other like ropsten, HDWalletProvider
      //   // return new Web3.providers.HttpProvider("https://127.0.0.1:7545");
      //   // return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/");
      // },
      // networkCheckTimeout: 30000,
      // amount of time for Truffle to wait for a response from the node when testing the provider (in milliseconds)
      // increase this number if you have a slow internet connection to avoid connection errors
    },
    // live: {
    //   host: "128.199.20.138", // Random ID, Don't use
    //   port: 90,
    //   network_id: "1",
    //   production: true,
    //   confirmations: 2,
    // },
  },
  compilers: {
    solc: {
      version: "^0.8.12", // native, pragma, ^0.8.12
      // docker: false, // To use a version obtained through docker
      // parser: "solcjs", // Leverages solc-js purely for speedy parsing
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "istanbul", // homestead, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul or berlin
      },
      // modelCheckerSettings: {
      // contains options for SMTChecker
      // },
    },
    // vyper: {
    //   settings: {
    //     evmVersion: "",
    //     optimize: true,
    //   },
    // },
  },
  // environments: {
  //   development: {
  //     ipfs: {
  //       address: "http://localhost:5001",
  //     },
  //   },
  //   live: {
  //     ipfs: {
  //       address: "https://ipfs.infura.io:5001",
  //     },
  //   },
  // },
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db",
  //     },
  //   },
  // },
};
