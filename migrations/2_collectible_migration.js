const Collectible = artifacts.require("CryptoDicks");

module.exports = function (deployer) {
  deployer.deploy(Collectible);
};
