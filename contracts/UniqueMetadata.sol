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
        uint8 mouth;
        uint8 clothe;
        uint8 arm;
        uint8 special;
    }

    // Mapping metadata dna to boolean
    mapping(uint256 => bool) private _dnaExists;

    /// @dev Max value for defining probabilities
    uint256 internal constant MAX = 100_000;

    uint256[] internal BACKGROUNDS = [
        90000,
        80000,
        70000,
        60000,
        50000,
        40000,
        30000,
        23000,
        16000,
        11000,
        7000,
        4000,
        3000,
        2000,
        1000,
        0
    ];

    uint256[] internal SKINS = [
        90000,
        80000,
        70000,
        60000,
        50000,
        40000,
        30000,
        20000,
        15000,
        10000,
        5000,
        1000,
        0
    ];

    uint256[] internal HATS = [
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
        5000,
        3000,
        1500,
        500,
        0
    ];

    uint256[] internal EYES = [35000, 22000, 10000, 6000, 3000, 1000, 0];

    uint256[] internal MOUTHS = [10000, 6000, 3500, 2000, 1000, 500, 0];

    uint256[] internal CLOTHES = [12000, 5000, 0];

    uint256[] internal ARMS = [8000, 0];

    uint256[] internal SPECIALS = [2000, 1000, 0];

    /// Create unique metadata combination
    /// @dev this function is the algo part entry point
    /// @dev exec a infinite loop
    /// @dev check and mute the _dnaExists mapping
    /// @return Metadata
    function _createUniqueMetadata() internal returns (Metadata memory) {
        Metadata memory metadata;
        uint256 dna;

        while (true) {
            metadata = _generateMetadata();
            dna = _generateDna(metadata);

            if (_dnaExists[dna] != true) {
                _dnaExists[dna] = true;
                break;
            }

            delete metadata;
        }

        return metadata;
    }

    /// Generate Dna by encoding metadata
    /// @return uint dna
    function _generateDna(Metadata memory metadata)
        internal
        pure
        returns (uint256)
    {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        metadata.background,
                        metadata.skin,
                        metadata.hat,
                        metadata.eye,
                        metadata.mouth,
                        metadata.clothe,
                        metadata.arm,
                        metadata.special
                    )
                )
            );
    }

    /// Randomly generate metadata
    /// @dev This function doesn't check in the metadata is unique
    /// @dev This function apply business logic
    /// @return Metadata
    function _generateMetadata() internal returns (Metadata memory) {
        uint8 bg;
        uint8 skin;
        uint8 hat;
        uint8 eye;
        uint8 mouth;
        uint8 clothe;
        uint8 arm;
        uint8 special;

        // Generate random metadata
        special = _generateSpecialId();

        // It's a little tricky.
        // It's reducing the gas consumption by spliting logic between functions
        if (special < 1) {
            (bg, skin, hat, eye, mouth, clothe, arm) = _generateIfNotSpecial();
        } else {
            (bg, skin, hat, eye, mouth, clothe, arm) = _generateIfSpecial();
        }

        return Metadata(bg, skin, hat, eye, mouth, clothe, arm, special);
    }

    /// If the cryptoDick has a cape, it can't have any others accessories
    /// So, randomly generate the background and the skin
    /// And returns 0 for the 5 next values (the eighth is the special trait itself)
    function _generateIfSpecial()
        internal
        returns (
            uint8,
            uint8,
            uint8,
            uint8,
            uint8,
            uint8,
            uint8
        )
    {
        uint8 bg = _generateBackgroundId();
        uint8 skin = _generateSkinId();
        return (bg, skin, 0, 0, 0, 0, 0);
    }

    /// Generate the seven first values of Metadata
    /// Including some business logic
    function _generateIfNotSpecial()
        internal
        returns (
            uint8,
            uint8,
            uint8,
            uint8,
            uint8,
            uint8,
            uint8
        )
    {
        uint8 bg = _generateBackgroundId();
        uint8 skin = _generateSkinId();
        uint8 hat = _generateHatId();
        uint8 eye = _generateEyeId();
        uint8 clothe = _generateClotheId();
        uint8 arm = _generateArmId();

        // If we have the blanket clothe, don't append mouse
        if (clothe == 1) {
            return (bg, skin, hat, eye, 0, clothe, arm);
        }

        // If we have the cosmonaut helmet clothe, don't append mouse
        if (hat == 15) {
            return (bg, skin, hat, eye, 0, clothe, arm);
        }

        uint8 mouth = _generateMouthId();

        return (bg, skin, hat, eye, mouth, clothe, arm);
    }

    function _generateBackgroundId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                BACKGROUNDS,
                bytes4("back")
            );
    }

    function _generateSkinId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                SKINS,
                bytes4("skin")
            );
    }

    function _generateHatId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                HATS,
                bytes4("hat")
            );
    }

    function _generateEyeId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                EYES,
                bytes4("eye")
            );
    }

    function _generateMouthId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                MOUTHS,
                bytes4("mous")
            );
    }

    function _generateClotheId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                CLOTHES,
                bytes4("clot")
            );
    }

    function _generateArmId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                ARMS,
                bytes4("arms")
            );
    }

    function _generateSpecialId() internal returns (uint8) {
        _randomNonce.increment();
        return
            RandomNumber.generate(
                MAX,
                _randomNonce.current(),
                SPECIALS,
                bytes4("spec")
            );
    }
}
