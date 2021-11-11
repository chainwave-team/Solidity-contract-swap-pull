const Collectible = artifacts.require("Collectible.sol");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');

// Test helpers - https://docs.openzeppelin.com/test-helpers/0.5/api
// const { expectRevert, expectEvent, time } = require('@openzeppelin/test-helpers');

contract('Election', accounts => {
    describe("Test the contract", () => {
        // beforeEach(() => {})
        // beforeAll(() => {})

        it("should test", async () => {
            const collectible = await Collectible.deployed()

            // Tests...
        })
    })
});