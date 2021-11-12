pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CryptoDicks is Ownable, ERC721 {
    // Collection options
    uint256 public totalSupply;
    uint256 public nextCollectibleId;
    string private _currentBaseURI;

    // Store NFT properties
    struct NFTProperties {
        // TODO: Can I use a enum instead? [red, blue, etc]
        uint8 color;
        // TODO: If it's unnecessary, remove string prop, it takes memory.
        string text;
    }
    mapping(uint256 => NFTProperties) idToProperties;

    constructor() ERC721("CryptoDicks", "DICK") {
        totalSupply = 10_000;
        nextCollectibleId = 0;

        // TODO: Replace by API URI when available using ENV variable
        setBaseURI("http://localhost:5000/");

        // Mint my own NFT tokens.
        mint(5, "First NFT");
        mint(1, "Second NFT");
    }

    // Claim is the public function to mint an NFT, it uses mint() internaly.
    function claim(uint8 _color, string memory _text) external payable {
        require(
            msg.value == 0.01 ether,
            "Claiming a Collectible costs 0.01 ether"
        );

        mint(_color, _text);

        // Give 0.01 ether to the contract owner
        payable(owner()).transfer(0.01 ether);
    }

    function mint(uint8 _color, string memory _text) internal {
        require(nextCollectibleId < totalSupply);

        uint256 tokenId = nextCollectibleId;
        nextCollectibleId++;

        idToProperties[tokenId] = NFTProperties(_color, _text);
        _safeMint(msg.sender, tokenId);
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _currentBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _currentBaseURI;
    }

    function get(uint256 _tokenId)
        external
        view
        returns (
            uint256 id,
            uint8 color,
            string memory text
        )
    {
        require(_exists(_tokenId), "Token not minted yet");
        NFTProperties memory properties = idToProperties[_tokenId];
        id = _tokenId;
        color = properties.color;
        text = properties.text;
    }

    // Example of update NFT property
    function changeText(uint256 _tokenId, string memory _newText) public {
        require(_exists(_tokenId), "Token not minted yet");
        require(
            ownerOf(_tokenId) == msg.sender,
            "Only the owner of this NFT can change its text"
        );

        idToProperties[_tokenId].text = _newText;
    }

    function getText(uint256 _tokenId) external view returns (string memory) {
        require(_exists(_tokenId), "Token not minted yet");

        NFTProperties memory properties = idToProperties[_tokenId];
        return properties.text;
    }
}
