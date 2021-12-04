const { expect } = require("chai");
const truffleAssert = require('truffle-assertions');

const CryptoDicks = artifacts.require("CryptoDicks.sol");

// Test helpers - https://docs.openzeppelin.com/test-helpers/0.5/api
const { expectRevert } = require('@openzeppelin/test-helpers');

const fromBN = bn => web3.utils.toNumber(bn)

contract('CryptoDicks', accounts => {
    let nftContract
    before(async () => {
        nftContract = await CryptoDicks.deployed()
    })

    describe("Deployed CryptoDicks Contract", () => {
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
            expect(tokenURI).to.equal("https://cryptodicks-api.herokuapp.com/token/1")
        })

        it("has correct total supply", async () => {
            let totalSupply = await nftContract.totalSupply()
            expect(fromBN(totalSupply)).to.equal(10_000)
        })

        it("has correct claim fee", async () => {
            let claimFee = await nftContract.claimFee()
            expect(web3.utils.fromWei(claimFee)).to.equal("0.01")
        })

        it("gifts the owner the 5 first NFTs", async () => {
            const propertyNames = ["background", "skin", "hat", "eye", "mouse", "clothe", "arm", "special"];

            const tokens = new Map()
            // For each 10 first tokens
            for (let i = 1; i <= 5; i++) {
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
            expect(tokens.size).to.equal(5)
        })

        it("the owner balance should have 5 NTFs", async () => {
            const balance = await nftContract.balanceOf(accounts[0])
            expect(web3.utils.toNumber(balance)).to.equal(5)
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
            let owner = await nftContract.ownerOf(6)
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

    describe("Contract management", () => {
        describe("Changing the BaseURI", async () => {
            it("works if you are the owner of the contract", async () => {
                await nftContract.setBaseURI("https://www.test.io/")
                let tokenURI = await nftContract.tokenURI(1)
                expect(tokenURI).to.equal("https://www.test.io/1")
            })

            it("reverts if you are not the owner of the contract", async () => {
                await expectRevert(
                    nftContract.setBaseURI("https://www.test.com/", { from: accounts[1] }),
                    "caller is not the owner"
                )

                let tokenURI = await nftContract.tokenURI(1)
                expect(tokenURI).to.equal("https://www.test.io/1")
            })
        })

        describe("Changing the Claim fee", async () => {
            it("works if you are the owner of the contract", async () => {
                await nftContract.setClaimFee(web3.utils.toWei("0.02", "ether"))
                let claimFee = await nftContract.claimFee()
                expect(web3.utils.fromWei(claimFee)).to.equal("0.02")
            })

            it("reverts if you are not the owner of the contract", async () => {
                await expectRevert(
                    nftContract.setClaimFee(web3.utils.toWei("0.03", "ether"), { from: accounts[1] }),
                    "caller is not the owner"
                )

                let claimFee = await nftContract.claimFee()
                expect(web3.utils.fromWei(claimFee)).to.equal("0.02")
            })
        })
    })
});