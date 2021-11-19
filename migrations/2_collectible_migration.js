const NFT = artifacts.require("CryptoDicksNFT");

module.exports = function (deployer) {
  deployer.deploy(NFT);
};
