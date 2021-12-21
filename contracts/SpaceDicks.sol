// SPDX-License-Identifier: MIT

pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./UniqueMetadata.sol";

/// @title The SpaceDicks ERC721 smart contract.
/// @author juliencrn
contract SpaceDicks is ERC721, UniqueMetadata, Ownable {
    using Counters for Counters.Counter;

    string internal _currentBaseURI =
        "https://spacedicks-api.herokuapp.com/token/";
    // It's deployed on Polygon, so 1 "ether" = 1 MATIC
    uint256 public claimFee = 25 ether;

    /// Supply
    uint256 public totalSupply = 10_000;
    Counters.Counter internal _currentSupply;

    /// Pre-sale (100 for the artist, 1000 for the early adopters)
    uint256 public preSalesLimit = 1100;

    /// Mint count limit
    /// During the pre-sales only: Each user can mint 5 DICKs maximum
    uint256 public mintCountLimit = 5;

    /// Map token ID to Metadata
    mapping(uint256 => Metadata) idToMetadata;

    /// Map mint count by account
    mapping(address => uint256) mintCountByAddress;

    constructor() ERC721("SpaceDicks", "DICK") {
        // Mint my own NFT tokens.
        for (uint256 i = 0; i < 5; i++) {
            mint();
        }
    }

    /// Allow to mint a token
    function claim() external payable {
        // For the artist: Always free and limitless
        if (owner() == msg.sender) {
            mint();
        }
        // During the pre-sales: Free and mint count limit by accounts
        else if (_currentSupply.current() < preSalesLimit) {
            require(
                mintCountByAddress[msg.sender] < mintCountLimit,
                "During the pre-sales, only 5 mints by account are authorized"
            );
            mintCountByAddress[msg.sender]++;
            mint();
        }
        // Otherwise: Paid and limitless
        else {
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

    /// Allow owner to change the pre-sales limit.
    function setPreSalesLimit(uint256 _newLimit) external onlyOwner {
        preSalesLimit = _newLimit;
    }

    /// Allow owner to change to pre-sales limit.
    function setMintCountLimit(uint256 _newLimit) external onlyOwner {
        mintCountLimit = _newLimit;
    }
}
