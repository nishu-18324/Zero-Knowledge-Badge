pragma solidity ^0.8.0;

contract ZKPNFT {
    mapping(address => bool) public verifiedUsers;
    mapping(uint256 => address) public tokenOwners;
    uint256 public totalSupply;

    event Mint(address indexed user, uint256 tokenId);

    function verifyUser(address user) public {
        verifiedUsers[user] = true;
    }

    function mintNFT() public {
        require(verifiedUsers[msg.sender], "User not verified");
        uint256 tokenId = totalSupply + 1;
        tokenOwners[tokenId] = msg.sender;
        totalSupply = tokenId;
        emit Mint(msg.sender, tokenId);
    }
}
