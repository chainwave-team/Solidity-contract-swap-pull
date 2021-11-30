// SPDX-License-Identifier: MIT

pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./UniqueMetadata.sol";
import "./Managable.sol";

/// @title The main CryptoDicks ERC721 smart contract.
/// @author juliencrn
/// @dev Work in progress, not production ready yet.
contract CryptoDicks is ERC721, UniqueMetadata, Managable {
    using Counters for Counters.Counter;

    // Supply
    uint256 public totalSupply = 10_000;
    Counters.Counter internal _currentSupply;

    // Mapping token ID to Metadata
    mapping(uint256 => Metadata) idToMetadata;

    constructor() ERC721("CryptoDicks", "DICK") {
        // Mint my own NFT tokens.
        for (uint256 i = 0; i < 10; i++) {
            mint();
        }
    }

    /// Allow user to mint a token
    /// @dev takes fees then calls mint() internally.
    function claim() external payable {
        require(msg.value == claimFee, "Claiming a NFT costs ether");

        mint();

        // Give ether to the contract owner
        payable(owner()).transfer(claimFee);
    }

    /// For a a given token ID, returns its metadata
    function get(uint256 _tokenId)
        external
        view
        returns (
            uint8 background,
            uint8 skin,
            uint8 hat,
            uint8 eye
        )
    {
        require(_exists(_tokenId), "Token not minted yet");
        return (
            idToMetadata[_tokenId].background,
            idToMetadata[_tokenId].skin,
            idToMetadata[_tokenId].hat,
            idToMetadata[_tokenId].eye
        );
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
        idToMetadata[newTokenId] = _createUniqueMetadata(newTokenId);

        // Finally, mint!
        _safeMint(msg.sender, newTokenId);

        return newTokenId;
    }

    /// Return the good baseURI overriding the ERC721 method
    function _baseURI() internal view virtual override returns (string memory) {
        return _currentBaseURI;
    }
}
