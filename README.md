# NFT Collectible CryptoDicks (DICK)

> 🚧 This is a WIP learning project, you can fork it but keep in mind that isn't production ready.

## Generate crypto NFT collectible. 

The project has (will have) different sub-projects: 
- A ERC-721 smart contract written using truffle (EVM + Solidity).
- A PixelArt image generator served on a REST API (Node.js).
- A Dapp client to discover the collection and mint NFTs (React).

## Install

```sh
git clone https://github.com/juliencrn/ntf-collectible
cd ntf-collectible
```

Then start the **Ganache** blockchain. I use the default macOS client on the default port (`8545`), but you can also use `ganache-cli` and change port in the `truffle-config.js` file.

Launch Truffle in console mode, and deploy contract:
```bash
truffle console

# type the following inside the truffle console
# truffle(development)>
> test
> compile
> migrate --reset
```

## Collection attributes

To begin, we start with only one kind of penis.
Then with have attributes:
- Background color
- Special effect
- Hat
- Clothes
- Dick color
- Balls color