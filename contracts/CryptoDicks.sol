// SPDX-License-Identifier: MIT

pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "./SafeMath8.sol";

/// @title The main CryptoDicks ERC721 smart contract.
/// @author juliencrn
/// @dev Work in progress, not production ready yet.
contract CryptoDicks is Ownable, ERC721 {
    // Libs
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    using SafeMath8 for uint8;
    using SafeCast for uint256;

    Counters.Counter internal _currentSupply;
    Counters.Counter internal _randomNonce;

    // Contract settings
    uint256 public totalSupply = 10_000;
    string internal _currentBaseURI = "http://localhost:5000/";
    uint256 public claimFee = 0.01 ether;

    // NFT properties
    struct Metadata {
        uint8 bgColor;
        uint8 dickColor;
        uint8 hat;
        uint8 clothe;
        uint8 skin;
    }

    // Mapping token ID to Metadata
    mapping(uint256 => Metadata) idToMetadata;

    // Mapping metadata dna to boolean
    mapping(uint256 => bool) private _dnaExists;

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

    /// Mint a new NFT
    /// @return Created token id
    function mint() internal returns (uint256) {
        require(_currentSupply.current() < totalSupply);

        // Increment the token supply.
        _currentSupply.increment();
        uint256 newTokenId = _currentSupply.current();

        // Generate and save metadata
        idToMetadata[newTokenId] = _createUniqueNFT();

        // Finally, mint!
        _safeMint(msg.sender, newTokenId);

        return newTokenId;
    }

    /// Return the good baseURI overriding the ERC721 method
    function _baseURI() internal view virtual override returns (string memory) {
        return _currentBaseURI;
    }

    /// For a a given token ID, returns its metadata
    function get(uint256 _tokenId)
        external
        view
        returns (
            uint8 bgColor,
            uint8 dickColor,
            uint8 hat,
            uint8 clothe,
            uint8 skin
        )
    {
        require(_exists(_tokenId), "Token not minted yet");
        Metadata memory metadata = idToMetadata[_tokenId];

        bgColor = metadata.bgColor;
        dickColor = metadata.dickColor;
        hat = metadata.hat;
        clothe = metadata.clothe;
        skin = metadata.skin;
    }

    /// @return the current supply
    function currentSupply() external view returns (uint256) {
        return _currentSupply.current();
    }

    ////////////////////////////////////////////////////////////
    // Random and Rarity algos
    ////////////////////////////////////////////////////////////

    /// Create unique metadata combination
    /// TODO: Test algos part
    /// @dev this function is the algo part entry point
    /// @dev exec a infinite loop
    /// @dev check and mute the _dnaExists mapping
    /// @return Metadata
    function _createUniqueNFT() internal returns (Metadata memory) {
        uint256 dna;
        uint8 bgColor;
        uint8 dickColor;
        uint8 hat;
        uint8 clothe;
        uint8 skin;

        while (true) {
            // Generate random metadata
            (bgColor, dickColor, hat, clothe, skin) = _generateRandomMetadata();

            // Calc the dna
            dna = uint256(
                keccak256(
                    abi.encodePacked(bgColor, dickColor, hat, clothe, skin)
                )
            );

            // If the new dna is unique, save it and leave the loop
            if (_dnaExists[dna] != true) {
                _dnaExists[dna] = true;
                break;
            }
        }

        return Metadata(bgColor, dickColor, hat, clothe, skin);
    }

    /// Generate a random number
    /// @dev random isn't perfect in Solidity, use Oracle in better approch.
    /// @return uint256 0-999_999
    function _getRandomNumber() internal returns (uint256) {
        _randomNonce.increment();

        bytes memory encoded2 = abi.encodePacked(
            block.difficulty,
            block.timestamp,
            _currentSupply.current(),
            msg.sender,
            _randomNonce.current()
        );
        uint256 rand = uint256(keccak256(encoded2));
        return rand % 1_000_000;
    }

    /// Just generate a Metadata and returns its entries
    /// @dev contains config per metadata attributes
    function _generateRandomMetadata()
        internal
        returns (
            uint8 bgColor,
            uint8 dickColor,
            uint8 hat,
            uint8 clothe,
            uint8 skin
        )
    {
        bgColor = _randomWithRarety();
        dickColor = _randomWithRarety();
        hat = _randomUntil(3);
        clothe = _randomUntil(3);
        skin = _randomUntil(3);
    }

    /// @return random uint8 between 0-7 with rarety level
    function _randomUntil(uint8 _optionsCount) internal returns (uint8) {
        return (_getRandomNumber() % _optionsCount).toUint8();
    }

    /// @return random uint8 between 0-7 with rarety level
    function _randomWithRarety() internal returns (uint8) {
        uint256 rand = _getRandomNumber();
        uint8 result;

        if (rand < 1_000) {
            result = 7; // 0.1%
        } else if (rand < 6_000) {
            result = 6;
        } else if (rand < 16_000) {
            result = 5;
        } else if (rand < 66_000) {
            result = 4;
        } else if (rand < 166_000) {
            result = 3;
        } else if (rand < 366_000) {
            result = 2;
        } else if (rand < 666_000) {
            result = 1;
        } else {
            result = 0;
        }

        return result;
    }
}
