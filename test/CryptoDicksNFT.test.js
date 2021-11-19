const assert = require("chai").assert;
const expect = require("chai").expect;
const truffleAssert = require('truffle-assertions');

const NFT = artifacts.require("CryptoDicksNFT.sol");

// Test helpers - https://docs.openzeppelin.com/test-helpers/0.5/api
const { expectRevert } = require('@openzeppelin/test-helpers');

const fromBN = bn => web3.utils.toNumber(bn)

contract('CryptoDicksNFT', accounts => {
    let nftContract
    before(async () => {
        nftContract = await NFT.deployed()
    })

    describe("Deployed CryptoDicksNFT Contract", () => {
        it("has an owner", async () => {
            let owner = await nftContract.owner()
            expect(owner).to.equal(accounts[0])
        })

        it("has a name", async () => {
            let name = await nftContract.name()
            expect(name).to.equal("CryptoDicks")
        })

        it("has a symbol", async () => {
            let symbol = await nftContract.symbol()
            expect(symbol).to.equal("DICK")
        })

        it("has correct tokenURI", async () => {
            let tokenURI = await nftContract.tokenURI(1)
            expect(tokenURI).to.equal("http://localhost:5000/1")
        })

        it("has correct total supply", async () => {
            let totalSupply = await nftContract.totalSupply()
            expect(fromBN(totalSupply)).to.equal(10_000)
        })

        it("has correct claim fee", async () => {
            let claimFee = await nftContract.claimFee()
            expect(web3.utils.fromWei(claimFee)).to.equal("0.01")
        })

        it("gifts the owner the 10 first NFTs", async () => {
            const propertyNames = ["bgColor", "dickColor", "hat", "clothe", "skin"];

            const tokens = new Map()
            // For each 10 first tokens
            for (let i = 1; i <= 10; i++) {
                // Check owner
                let owner = await nftContract.ownerOf(i)
                expect(owner).to.equal(accounts[0])

                // Check metadata
                let metadata = await nftContract.get(i)
                let values = ''
                for (let j = 0; j < propertyNames.length; j++) {
                    const propertyName = propertyNames[j];
                    expect(metadata).haveOwnProperty(propertyName);

                    const value = fromBN(metadata[propertyName]);
                    if (j > 0) {
                        values += ","
                    }
                    values += value
                    expect(!Number.isNaN(value) && value < 99).equal(true);
                }

                tokens.set(i, values)
                delete values
            }

            // console.log(tokens);
            expect(tokens.size).to.equal(10)
        })

        it("the owner balance should have 10 NTFs", async () => {
            const balance = await nftContract.balanceOf(accounts[0])
            expect(web3.utils.toNumber(balance)).to.equal(10)
        })
    })

    let price = web3.utils.toBN(web3.utils.toWei('0.01', 'ether'))

    describe("Minting a NFT", () => {
        let ownerBalanceBefore
        let buyerBalanceBefore
        let supplyBefore

        before(async () => {
            ownerBalanceBefore = await web3.eth.getBalance(accounts[0]);
            ownerBalanceBefore = web3.utils.toBN(ownerBalanceBefore)

            buyerBalanceBefore = await web3.eth.getBalance(accounts[1]);
            buyerBalanceBefore = web3.utils.toBN(buyerBalanceBefore)

            supplyBefore = await nftContract.currentSupply();
            supplyBefore = fromBN(supplyBefore);
        })

        let receipt
        let transaction

        it("creates a token", async () => {
            receipt = await nftContract.claim({ from: accounts[1], value: price })
            transaction = await web3.eth.getTransaction(receipt.tx);
        })

        it("increments the supply", async () => {
            let supply = await nftContract.currentSupply()
            expect(fromBN(supply)).to.equal(supplyBefore + 1)
        })

        it("transfers ownership to the caller", async () => {
            let owner = await nftContract.ownerOf(11)
            expect(owner).to.equal(accounts[1])
        })

        it("costs 0.01 ether plus gas to mint", async () => {
            let buyerBalanceAfter = await web3.eth.getBalance(accounts[1])
            buyerBalanceAfter = web3.utils.toBN(buyerBalanceAfter)
            let gasCost = web3.utils.toBN(transaction.gasPrice * receipt.receipt.gasUsed)
            let expectedBuyerBalance = buyerBalanceBefore.sub(price).sub(gasCost)
            expect(buyerBalanceAfter.toString()).to.equal(expectedBuyerBalance.toString())
        })

        it("0.01 ether are transferred to the owners account", async () => {
            let ownerBalanceAfter = await web3.eth.getBalance(accounts[0])
            ownerBalanceAfter = web3.utils.toBN(ownerBalanceAfter)
            let expectedOwnerBalance = ownerBalanceBefore.add(price)
            expect(ownerBalanceAfter.toString()).to.equal(expectedOwnerBalance.toString())
        })
    })

    describe("Trying to mint a date without paying", async () => {
        it("fails", async () => {
            await expectRevert(
                nftContract.claim(),
                "Claiming a NFT costs ether"
            )
        })
    })
});