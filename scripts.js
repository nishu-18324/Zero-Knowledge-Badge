let web3;
let contract;
const contractAddress = "0x8d5F548D83C259D6e89D2F81b375925f23a55d65";
const contractABI = [
        [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "mintNFT",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "verifyUser",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "tokenOwners",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "verifiedUsers",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
];

async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        document.getElementById("walletAddress").innerText = "Connected: " + accounts[0];
        contract = new web3.eth.Contract(contractABI, contractAddress);
    } else {
        alert("Please install MetaMask!");
    }
}

async function verifyUser() {
    const accounts = await web3.eth.getAccounts();
    contract.methods.verifyUser(accounts[0]).send({ from: accounts[0] })
        .then(() => document.getElementById("verifyStatus").innerText = "✅ User Verified!")
        .catch(() => document.getElementById("verifyStatus").innerText = "❌ Verification Failed!");
}

async function mintNFT() {
    const accounts = await web3.eth.getAccounts();
    contract.methods.mintNFT().send({ from: accounts[0] })
        .then(() => document.getElementById("mintStatus").innerText = "🎉 NFT Minted!")
        .catch(() => document.getElementById("mintStatus").innerText = "❌ Minting Failed!");
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Background Image Transition
let currentIndex = 0;
const images = document.querySelectorAll('.background-image');

function changeBackground() {
    images.forEach((img, index) => img.classList.remove('active'));
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeBackground, 5000); // Change image every 5 seconds


