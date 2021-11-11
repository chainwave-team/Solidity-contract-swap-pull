const Collectible = artifacts.require("Collectible");

module.exports = function (deployer) {
  deployer.deploy(Collectible);
};
