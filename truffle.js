module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,  // ganache
      network_id: "*", // Match any network id
      gasPrice: 10000000000,  // 1 gwei
      gas: 4600000
    }
  }
};