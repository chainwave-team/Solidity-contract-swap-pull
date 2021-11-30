// SPDX-License-Identifier: MIT

pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Managable is Ownable {
    // Mutable variables
    string internal _currentBaseURI = "http://localhost:5000/";
    uint256 public claimFee = 0.01 ether;

    /// Allow owner to set new baseURI
    function setBaseURI(string memory _baseUri) public onlyOwner {
        _currentBaseURI = _baseUri;
    }

    /// Allow owner to set new mint fee price, ether price will change.
    function setClaimFee(uint256 _newPrice) external onlyOwner {
        claimFee = _newPrice;
    }

    /// Allow owner to withdraw contract balance.
    /// @dev Ether are stored in the contract when "payable->transfer" is invoked.
    /// TODO Add unit test
    function withdraw() external payable onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
