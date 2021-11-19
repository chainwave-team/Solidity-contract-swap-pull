const expect = require("chai").expect;

const NFT = artifacts.require("CryptoDicksNFT.sol");

// Test helpers - https://docs.openzeppelin.com/test-helpers/0.5/api
const { expectRevert } = require('@openzeppelin/test-helpers');

contract('CryptoDicksHelper', accounts => {
    let nftContract
    before(async () => {
        nftContract = await NFT.deployed()
    })

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
});