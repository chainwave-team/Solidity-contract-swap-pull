const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');

const Collectible = artifacts.require("Collectible.sol");

// Test helpers - https://docs.openzeppelin.com/test-helpers/0.5/api
const { expectRevert } = require('@openzeppelin/test-helpers');

contract('Collectible', accounts => {
    let collectible
    before(async () => {
        collectible = await Collectible.deployed()
    })

    describe("Deployed Collectible Contract", () => {
        it("has an owner", async () => {
            let owner = await collectible.owner()
            expect(owner).to.equal(accounts[0])
        })

        it("has a name", async () => {
            let name = await collectible.name()
            expect(name).to.equal("Collectible")
        })

        it("has a symbol", async () => {
            let symbol = await collectible.symbol()
            expect(symbol).to.equal("COLL")
        })

        it("has correct tokenURI", async () => {
            let tokenURI = await collectible.tokenURI(1)
            expect(tokenURI).to.equal("http://localhost:5000/1")
        })

        it("has correct total supply", async () => {
            let totalSupply = await collectible.totalSupply()
            expect(web3.utils.toNumber(totalSupply)).to.equal(10_000)
        })

        it("gifts the owner the origin of collectible at least", async () => {
            let owner = await collectible.ownerOf(0)
            expect(owner).to.equal(accounts[0])

            let properties = await collectible.get(0)
            expect(properties.id.toNumber()).to.equal(0)
            expect(properties.color.toNumber()).to.equal(5)
            expect(properties.text.toString()).to.equal("First NFT")
        })
    })

    let price = web3.utils.toBN(web3.utils.toWei('0.01', 'ether'))

    describe("Minting a collectible", () => {
        let ownerBalanceBefore
        let buyerBalanceBefore

        before(async () => {
            ownerBalanceBefore = await web3.eth.getBalance(accounts[0]);
            ownerBalanceBefore = web3.utils.toBN(ownerBalanceBefore)

            buyerBalanceBefore = await web3.eth.getBalance(accounts[1]);
            buyerBalanceBefore = web3.utils.toBN(buyerBalanceBefore)
        })

        let receipt
        let transaction

        it("creates a token", async () => {
            receipt = await collectible.claim(3, "Random text", { from: accounts[1], value: price })
            transaction = await web3.eth.getTransaction(receipt.tx);
        })

        it("transfers ownership to the caller", async () => {
            let owner = await collectible.ownerOf(2)
            expect(owner).to.equal(accounts[1])
        })

        it("sets the text property", async () => {
            let text = await collectible.getText(2)
            expect(text).to.equal("Random text")
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
                collectible.claim(6, "The hacker"),
                "Claiming a Collectible costs 0.01 ether"
            )
        })
    })

    describe("Changing the text of a collectible", async () => {
        it("works if you are the owner", async () => {
            await collectible.changeText(0, "First NFT edited", { from: accounts[0] })
            let text = await collectible.getText(0)
            expect(text).to.equal("First NFT edited")
        })

        it("reverts if you aren't the owner", async () => {
            await expectRevert(
                collectible.changeText(1, "Second NFT edited", { from: accounts[1] }),
                "Only the owner of this NFT can change its text"
            )

            let text = await collectible.getText(1)
            expect(text).to.equal("Second NFT")

        })
    })

    describe("Changing the BaseURI", async () => {
        it("works if you are the owner of the contract", async () => {
            await collectible.setBaseURI("https://www.test.io/")
            let tokenURI = await collectible.tokenURI(0)
            expect(tokenURI).to.equal("https://www.test.io/0")
        })

        it("reverts if you are not the owner of the contract", async () => {
            await expectRevert(
                collectible.setBaseURI("https://www.test.com/", { from: accounts[1] }),
                "caller is not the owner"
            )

            let tokenURI = await collectible.tokenURI(0)
            expect(tokenURI).to.equal("https://www.test.io/0")

        })
    })
});