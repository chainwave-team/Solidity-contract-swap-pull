// SPDX-License-Identifier: MIT

pragma solidity >=0.8.3 <0.9.0;

import "./CryptoDicks.sol";

/// @title Extends CryptoDicks addind getters & setters.
/// @author juliencrn
/// @dev Work in progress, not production ready yet.
contract CryptoDicksHelper is CryptoDicks {
    /// Allow owner to set new baseURI
    function setBaseURI(string memory _baseURI) public onlyOwner {
        _currentBaseURI = _baseURI;
    }

    /// Allow owner to set new mint fee price, ether price will change.
    function setClaimFee(uint256 _newPrice) external onlyOwner {
        claimFee = _newPrice;
    }

    /// Allow owner to withdraw contract balance.
    /// @dev Ether are stored in the contract when "payable->transfer" is invoked.
    /// TODO Add unit test
    // function withdraw() external view onlyOwner returns (address payable) {
    //     payable(owner).transfer(address(this).balance);
    // }
}
