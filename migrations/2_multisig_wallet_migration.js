var MultiSigWallet = artifacts.require("./MultiSigWallet.sol");

module.exports = function(deployer) {
  deployer.deploy(MultiSigWallet, [web3.eth.accounts[1], web3.eth.accounts[2], web3.eth.accounts[3]], 3);
};
