const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "425042e77d5e4163904578bd0e191ee6";

const mnemonic = "expand salt solid burden sunny walnut brown embrace science cruise topic bus";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      websockets: true,
      network_id: "*" // Match any network id
    },
      // Useful for deploying to a public network.
      // NB: It's important to wrap the provider as a function.
      rinkeby: {
        provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/425042e77d5e4163904578bd0e191ee6`),
          network_id: 4,       // rinkeby's id
          gas: 4500000,        // rinkeby has a lower block limit than mainnet
          gasPrice: 10000000000
      },
  }
};