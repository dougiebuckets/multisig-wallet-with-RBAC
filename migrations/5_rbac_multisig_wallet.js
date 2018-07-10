var RBACMultiSigWallet = artifacts.require("./RBACMultiSigWallet.sol");

module.exports = function(deployer) {
  deployer.deploy(RBACMultiSigWallet, [web3.eth.accounts[1], web3.eth.accounts[2]]);
};
