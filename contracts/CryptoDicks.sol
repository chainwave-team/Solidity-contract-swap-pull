// SPDX-License-Identifier: MIT

pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./UniqueMetadata.sol";

/// @title The CryptoDicks ERC721 smart contract.
/// @author juliencrn
contract CryptoDicks is ERC721, UniqueMetadata, Ownable {
    using Counters for Counters.Counter;

    string internal _currentBaseURI =
        "https://cryptodicks-api.herokuapp.com/token/";
    uint256 public claimFee = 0.001 ether;

    // Supply
    uint256 public totalSupply = 10_000;
    Counters.Counter internal _currentSupply;

    // Mapping token ID to Metadata
    mapping(uint256 => Metadata) idToMetadata;

    constructor() ERC721("CryptoDicks", "DICK") {
        // Mint my own NFT tokens.
        for (uint256 i = 0; i < 5; i++) {
            mint();
        }
    }

    /// Allow to mint a token
    function claim() external payable {
        // No fee for the Artist
        if (owner() == msg.sender) {
            mint();
        } else {
            require(msg.value == claimFee, "Claiming a NFT costs ether");

            mint();

            // Give ether to the contract owner
            payable(owner()).transfer(claimFee);
        }
    }

    /// For a a given token ID, returns its metadata
    function get(uint256 _tokenId) external view returns (Metadata memory) {
        require(_exists(_tokenId), "Token does not exists");
        return idToMetadata[_tokenId];
    }

    /// @return the current supply
    function currentSupply() external view returns (uint256) {
        return _currentSupply.current();
    }

    /// Mint a new NFT
    /// @return Created token id
    function mint() internal returns (uint256) {
        require(_currentSupply.current() < totalSupply);

        // Increment the token supply.
        _currentSupply.increment();
        uint256 newTokenId = _currentSupply.current();

        // Generate and save metadata
        idToMetadata[newTokenId] = _createUniqueMetadata();

        // Finally, mint!
        _safeMint(msg.sender, newTokenId);

        return newTokenId;
    }

    /// Return the good baseURI overriding the ERC721 method
    function _baseURI() internal view virtual override returns (string memory) {
        return _currentBaseURI;
    }

    /// Allow owner to set new baseURI
    function setBaseURI(string memory _baseUri) public onlyOwner {
        _currentBaseURI = _baseUri;
    }

    /// Allow owner to set new mint fee price, ether price will change.
    function setClaimFee(uint256 _newPrice) external onlyOwner {
        claimFee = _newPrice;
    }
}
