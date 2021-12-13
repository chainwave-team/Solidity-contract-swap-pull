# SpaceDicks - Contract

10,000 unique NTFs with proof of ownership living on the Polygon blockchain and following the ERC-721 standard, but yeah, these are DICKs.

## Repositories

This project is composed with different pieces:
- [Contract](https://github.com/juliencrn/spacedicks-contract) (this): Solidity ERC-721 smart-contracts that is responsible to create the NFT tokens with random metadata with rarity rules.
- [API](https://github.com/juliencrn/spacedicks-api): Build and upload SVG on IPFS. Return token Metadata for Opensea marketplace.
- [Website](https://github.com/juliencrn/spacedicks-website): Frontend React application using web3 and Truffle that provides an user interface to interact with the smart-contract.

## Install

Require Node.js, npm, the ganache local blockchain.

```sh
git clone https://github.com/juliencrn/spacedicks-contract
cd spacedicks-contract
```

Then see the `package.json` in the `script` section, you can `test`, `compile`, `migrate` and `verify` the smart-contracts.

## Notes for testing

The real pre-sale is for the 1000 first SpaceDicks.
But for testing simplicity purpose, we set it manually to 10
