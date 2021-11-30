// SPDX-License-Identifier: MIT

pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "./libraries/RandomNumber.sol";

/// @title Generate unique Metadata randomly
/// @author juliencrn
contract UniqueMetadata {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter internal _randomNonce;

    // NFT properties
    struct Metadata {
        uint8 background;
        uint8 skin;
        uint8 hat;
        uint8 eye;
    }

    // Mapping metadata dna to boolean
    mapping(uint256 => bool) private _dnaExists;

    /// @dev Max value for defining probabilities
    uint256 internal constant MAX = 100_000;

    // 12 choices
    uint256[] internal BACKGROUND = [
        80000,
        60000,
        40000,
        28000,
        20000,
        13000,
        8000,
        5000,
        2900,
        1000,
        100,
        30,
        0
    ];

    // 13 choices
    uint256[] internal SKIN = [
        80000,
        63000,
        48000,
        36000,
        27000,
        19000,
        12000,
        7000,
        4000,
        2000,
        1000,
        500,
        50,
        0
    ];

    // 16 choice
    uint256[] internal HAT = [
        94000,
        88000,
        82000,
        76000,
        70000,
        64000,
        58000,
        52000,
        46000,
        40000,
        34000,
        28000,
        22000,
        16000,
        10000,
        1000,
        0
    ];

    // 5 choices
    uint256[] internal EYE = [65000, 40000, 20000, 10000, 4000, 0];

    /// Create unique metadata combination
    /// TODO: Test algos part
    /// @dev this function is the algo part entry point
    /// @dev exec a infinite loop
    /// @dev check and mute the _dnaExists mapping
    /// @return Metadata
    function _createUniqueMetadata(uint256 _tokenId)
        internal
        returns (Metadata memory)
    {
        uint256 dna;
        uint8 background;
        uint8 skin;
        uint8 hat;
        uint8 eye;

        while (true) {
            // Generate random metadata
            (background, skin, hat, eye) = _generateRandomMetadata(_tokenId);

            // Calc the dna
            dna = uint256(
                keccak256(abi.encodePacked(background, skin, hat, eye))
            );

            // If the new dna is unique, save it and leave the loop
            if (_dnaExists[dna] != true) {
                _dnaExists[dna] = true;
                break;
            }
        }

        return Metadata(background, skin, hat, eye);
    }

    function _generateRandomMetadata(uint256 _tokenId)
        internal
        returns (
            uint8,
            uint8,
            uint8,
            uint8
        )
    {
        return (
            _generateBackgroundId(_tokenId),
            _generateSkinId(_tokenId),
            _generateHatId(_tokenId),
            _generateEyeId(_tokenId)
        );
    }

    function _generateBackgroundId(uint256 _tokenId) internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                BACKGROUND,
                bytes4("back"),
                _tokenId
            );
    }

    function _generateSkinId(uint256 _tokenId) internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                SKIN,
                bytes4("skin"),
                _tokenId
            );
    }

    function _generateHatId(uint256 _tokenId) internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                HAT,
                bytes4("hat"),
                _tokenId
            );
    }

    function _generateEyeId(uint256 _tokenId) internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                EYE,
                bytes4("eye"),
                _tokenId
            );
    }
}
