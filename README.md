# Zero-Knowledge-Badge
# ZKP-Based NFT for Verified Users

## Overview
This project is a simple Solidity smart contract that enables the minting of NFTs only for verified users using a Zero-Knowledge Proof (ZKP) mechanism. The contract ensures that only pre-verified addresses can mint NFTs, enhancing security and authentication in the NFT ecosystem.

## Features
- **Zero-Knowledge Proof Verification**: Only verified users can mint NFTs.
- **No Imports & Constructors**: The contract is lightweight, with no unnecessary dependencies.
- **Simple Verification Process**: Admin can verify users manually through the contract.
- **Secure & Transparent**: All verified users and NFT ownership records are stored on-chain.

## Deployed Address
This contract has been successfully deployed on the Edu Chain at the following address:
```
0x8d5F548D83C259D6e89D2F81b375925f23a55d65
```

## How It Works
1. **Verify User**: An address must be verified using the `verifyUser` function before minting an NFT.
2. **Mint NFT**: Verified users can call the `mintNFT` function to obtain an NFT.
3. **Track Ownership**: The contract maintains a record of token ownership and total supply.

## Usage
Deploy the contract and use the following functions:
- `verifyUser(address user)`: Adds an address to the verified users list.
- `mintNFT()`: Mints an NFT for the sender if they are verified.
- `tokenOwners(uint256 tokenId)`: Retrieves the owner of a given token ID.

## License
This project is open-source and available under the MIT License.

