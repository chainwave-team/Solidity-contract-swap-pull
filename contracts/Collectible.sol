pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Collectible is ERC721 {
    constructor() ERC721("Collectible", "CLTB") {}
}
