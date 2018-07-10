var MultiSigWalletWithDailyLimit = artifacts.require("./MultiSigWalletWithDailyLimit.sol");

module.exports = function(deployer) {
  deployer.deploy(MultiSigWalletWithDailyLimit, [web3.eth.accounts[1], web3.eth.accounts[2], web3.eth.accounts[3]], 3, 1000000000000000000);
};
