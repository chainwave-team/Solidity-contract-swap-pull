# CryptoDicks (DICK) - Contract

10,000 unique NTFs with proof of ownership living on the Polygon blockchain and following the ERC-721 standard, but yeah, these are DICKs.

## Repositories

This project is composed with different pieces:
- [Contract](https://github.com/juliencrn/cryptodicks-contract) (this): Solidity ERC-721 smart-contracts that is responsible to create the NFT tokens with random metadata with rarity rules.
- [API](https://github.com/juliencrn/cryptodicks-api): Build and upload SVG on IPFS. Return token Metadata for Opensea marketplace.
- [Website](https://github.com/juliencrn/cryptodicks-api): Frontend React application using web3 and Truffle that provides an user interface to interact with the smart-contract.



## Install

Require Node.js, npm, the ganache local blockchain.

```sh
git clone https://github.com/juliencrn/cryptodicks-contract
cd contract
```

Then see the `package.json` in the `script` section.

## Notes for testing

The real pre-sale is for the 1000 first CryptoDicks.
But for testing simplicity purpose, we set it manually to 10

