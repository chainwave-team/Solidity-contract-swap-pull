const { expect } = require("chai");
const { expectRevert } = require('@openzeppelin/test-helpers');

const SpaceDicks = artifacts.require("SpaceDicks.sol");

const fromBN = bn => web3.utils.toNumber(bn)
let feesPrice = web3.utils.toBN(web3.utils.toWei('0.01', 'ether'))

contract('SpaceDicks', accounts => {
    let contract
    before(async () => {
        contract = await SpaceDicks.deployed()
    })

    describe("Deployed SpaceDicks Contract", () => {
        it("has an owner", async () => {
            let owner = await contract.owner()
            expect(owner).to.equal(accounts[0])
        })

        it("has a name", async () => {
            let name = await contract.name()
            expect(name).to.equal("SpaceDicks")
        })

        it("has a symbol", async () => {
            let symbol = await contract.symbol()
            expect(symbol).to.equal("DICK")
        })

        it("has correct tokenURI", async () => {
            let tokenURI = await contract.tokenURI(1)
            expect(tokenURI).to.equal("https://spacedicks.herokuapp.com/token/1")
        })

        it("has correct total supply", async () => {
            let totalSupply = await contract.totalSupply()
            expect(fromBN(totalSupply)).to.equal(10_000)
        })

        it("has correct claim fee", async () => {
            let claimFee = await contract.claimFee()
            expect(web3.utils.fromWei(claimFee)).to.equal("0.01")
        })

        it("gifts the owner the 5 first NFTs", async () => {
            const propertyNames = ["background", "skin", "hat", "eye", "mouth", "clothe", "arm", "special"];

            const tokens = new Map()
            // For each 10 first tokens
            for (let i = 1; i <= 5; i++) {
                // Check owner
                let owner = await contract.ownerOf(i)
                expect(owner).to.equal(accounts[0])

                // Check metadata
                let metadata = await contract.get(i)
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

            expect(tokens.size).to.equal(5)
        })

        it("the owner balance should have 5 NTFs", async () => {
            const balance = await contract.balanceOf(accounts[0])
            expect(web3.utils.toNumber(balance)).to.equal(5)
        })
    })



    describe("Minting a NFT", () => {
        let supplyBefore

        before(async () => {
            supplyBefore = await contract.currentSupply();
            supplyBefore = fromBN(supplyBefore);
        })

        describe("During the pre-sales", () => {
            it("creates a token for free", async () => {
                await contract.claim({ from: accounts[1] })
            })

            it("increments the supply", async () => {
                let supply = await contract.currentSupply()
                expect(fromBN(supply)).to.equal(supplyBefore + 1)
            })

            it("transfers ownership to the caller", async () => {
                let owner = await contract.ownerOf(6)
                expect(owner).to.equal(accounts[1])
            })

            it("Mints until 3 tokens should works", async () => {
                await contract.claim({ from: accounts[1] })
                await contract.claim({ from: accounts[1] })

                const balance = await contract.balanceOf(accounts[1])
                expect(fromBN(balance)).to.equal(3)
            })

            it("Mints the 4th token should revert", async () => {
                await expectRevert(
                    contract.claim({ from: accounts[1] }),
                    "During the pre-sales, only 3 mints by account are authorized"
                )
            })

            it("Mints more than 3 tokens should works for the artist", async () => {
                await contract.claim({ from: accounts[0] })
                await contract.claim({ from: accounts[0] })
                await contract.claim({ from: accounts[0] })
                await contract.claim({ from: accounts[0] })
                await contract.claim({ from: accounts[0] })

                const balance = await contract.balanceOf(accounts[0])
                // 5 are minted at deploy, more 5 just before
                expect(fromBN(balance)).to.equal(10)
            })
        })

        describe("After the pre-sales", () => {
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

            it("creates a token for free", async () => {
                receipt = await contract.claim({ from: accounts[1], value: feesPrice })
                transaction = await web3.eth.getTransaction(receipt.tx);
            })

            it("the supply must be greater than 10 to close the pre-sales", async () => {
                const supplyBN = await contract.currentSupply();
                const supply = fromBN(supplyBN)
                expect(fromBN(supply)).to.be.greaterThanOrEqual(10)
            })

            it("costs 0.01 ether plus gas to mint", async () => {
                let buyerBalanceAfter = await web3.eth.getBalance(accounts[1])
                buyerBalanceAfter = web3.utils.toBN(buyerBalanceAfter)
                let gasCost = web3.utils.toBN(transaction.gasPrice * receipt.receipt.gasUsed)
                let expectedBuyerBalance = buyerBalanceBefore.sub(feesPrice).sub(gasCost)
                expect(buyerBalanceAfter.toString()).to.equal(expectedBuyerBalance.toString())
            })

            it("0.01 ether are transferred to the owners account", async () => {
                let ownerBalanceAfter = await web3.eth.getBalance(accounts[0])
                ownerBalanceAfter = web3.utils.toBN(ownerBalanceAfter)
                let expectedOwnerBalance = ownerBalanceBefore.add(feesPrice)
                expect(ownerBalanceAfter.toString()).to.equal(expectedOwnerBalance.toString())
            })

            describe("Trying to mint without paying", async () => {
                it("fails", async () => {
                    await expectRevert(
                        contract.claim({ from: accounts[1] }),
                        "Claiming a NFT costs ether"
                    )
                })

                it("excepts if is the owner claiming", async () => {
                    await contract.claim({ from: accounts[0] })
                })
            })
        })
    })

    describe("Contract management", () => {
        describe("Changing the BaseURI", async () => {
            it("works if you are the owner of the contract", async () => {
                await contract.setBaseURI("https://www.test.io/")
                let tokenURI = await contract.tokenURI(1)
                expect(tokenURI).to.equal("https://www.test.io/1")
            })

            it("reverts if you are not the owner of the contract", async () => {
                await expectRevert(
                    contract.setBaseURI("https://www.test.com/", { from: accounts[1] }),
                    "caller is not the owner"
                )

                let tokenURI = await contract.tokenURI(1)
                expect(tokenURI).to.equal("https://www.test.io/1")
            })
        })

        describe("Changing the Claim fee", async () => {
            it("works if you are the owner of the contract", async () => {
                await contract.setClaimFee(web3.utils.toWei("0.02", "ether"))
                let claimFee = await contract.claimFee()
                expect(web3.utils.fromWei(claimFee)).to.equal("0.02")
            })

            it("reverts if you are not the owner of the contract", async () => {
                await expectRevert(
                    contract.setClaimFee(web3.utils.toWei("0.03", "ether"), { from: accounts[1] }),
                    "caller is not the owner"
                )

                let claimFee = await contract.claimFee()
                expect(web3.utils.fromWei(claimFee)).to.equal("0.02")
            })
        })

        describe("Changing the Pre-sales limit", async () => {
            it("works if you are the owner of the contract", async () => {
                await contract.setPreSalesLimit(100)
                let preSalesLimit = await contract.preSalesLimit()
                expect(fromBN(preSalesLimit)).to.equal(100)
            })

            it("reverts if you are not the owner of the contract", async () => {
                await expectRevert(
                    contract.setPreSalesLimit(200, { from: accounts[1] }),
                    "caller is not the owner"
                )

                let preSalesLimit = await contract.preSalesLimit()
                expect(fromBN(preSalesLimit)).to.equal(100)
            })
        })

        describe("Changing the mint count limit", async () => {
            it("works if you are the owner of the contract", async () => {
                await contract.setMintCountLimit(10)
                let mintCountLimit = await contract.mintCountLimit()
                expect(fromBN(mintCountLimit)).to.equal(10)
            })

            it("reverts if you are not the owner of the contract", async () => {
                await expectRevert(
                    contract.setMintCountLimit(20, { from: accounts[1] }),
                    "caller is not the owner"
                )

                let mintCountLimit = await contract.mintCountLimit()
                expect(fromBN(mintCountLimit)).to.equal(10)
            })
        })
    })
});