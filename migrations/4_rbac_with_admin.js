var RBACWithAdmin = artifacts.require("./RBACWithAdmin.sol");

module.exports = function(deployer) {
  deployer.deploy(RBACWithAdmin);
};
