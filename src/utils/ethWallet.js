import {
	Alchemy,
	Network,
	Utils
} from 'alchemy-sdk';


import {
	ethers
} from 'ethers';

import USDTWallet from '../pages/Wallet/USDTWallet/USDTWallet';
import erc20ABI from '../contracts/erc20ABI.json';

import {
	isAddress
} from 'ethers/lib/utils';

const network = 'goerli';
window.ethersProvider = new ethers.providers.InfuraProvider(network);
let balance = 0
const USDTContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

export const getUSDTBalance = async (address) => {
	const contract = new ethers.Contract(USDTContractAddress, erc20ABI, window.ethersProvider)
	balance = await contract.balanceOf(address);
	return balance.toString();
}



// Setup: npm install alchemy-sdk
// Github: https://github.com/alchemyplatform/alchemy-sdk-js



// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
	apiKey: process.env.REACT_APP_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
	network: Network.ETH_SEPOLIA, // Replace with your network.
};
const alchemy = new Alchemy(settings);

alchemy.core.getBlock(15221026).then(console.log);




export const getETHBalance = async (walletAddress) => {
	const axios = require('axios');
	const ethers = require('ethers');

	// Set wallet address corresponding to vitalik.eth
	const address = walletAddress;

	// Alchemy API key
	const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;

	var data = JSON.stringify({
		"jsonrpc": "2.0",
		"id": 1,
		"method": "eth_getBalance",
		"params": [
			address, 'latest',
		]
	});

	var config = {
		method: 'post',
		url: `https://eth-sepolia.g.alchemy.com/v2/${apiKey}`,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		data: data
	};

	axios(config)
		.then(function (response) {
			let balance = response['data']['result'];
			balance = ethers.utils.formatEther(balance);
			console.log(`Balance of ${address}: ${balance} ETH`);
		})
		.catch(function (error) {
			console.log(error);
		});
}




export const sendETH = async (
	sendAddress,
	toAddress,
	amount,
	key,
	contractAddress
) => {
	window.ethersProvider = new ethers.providers.InfuraProvider(network);
	let gas_limit = '0x100000'
	let wallet = new ethers.Wallet(key);
	let walletSigner = wallet.connect(window.ethersProvider);
	let gas_price = window.ethersProvider.getGasPrice()

	const tx = {
		from: sendAddress,
		to: toAddress,
		value: ethers.utils.parseEther(amount),
		nonce: window.ethersProvider.getTransactionCount(sendAddress, 'latest'),
		gasLimit: ethers.utils.hexlify(gas_limit),
		gasPrice: gas_price
	}

	walletSigner.sendTransaction(tx).then((transaction) => {
		console.dir(transaction)
		alert('sent!')
	})
};

export const getETHGasPrice = async () => {
	let gas_price = window.ethersProvider.getGasPrice()
	return gas_price
}

export const sendUSDT = async (
	sendAddress,
	toAddress,
	amount,
	key,
) => {

}



export const estimateGasOfTx = async (sendAddress) => {
	const estimatedGasCostInHex = await alchemy.core.estimateGas({
		// Wrapped ETH address
		 // Wrapped ETH address
		 to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
		 // `function deposit() payable`
		 data: "0xd0e30db0",
		 // 1 ether
		 value: Utils.parseEther("1.0"),
		chainId: 11155111
	});

	return (
		Utils.formatUnits(estimatedGasCostInHex, 'ether')
	);
}


// export const getETHHistory = async (address) => {
// 	let etherscanProvider = new ethers.providers.EtherscanProvider('goerli');

// 	try {
// 		// Wait for the Promise to resolve
// 		const history = await etherscanProvider.getHistory(address);

// 		// Do something with the history
// 		history.forEach((tx) => tx);

// 		// Return the history
// 		return history;
// 	} catch (error) {
// 		// Catch any errors that might occur
// 		console.error(error);
// 	}
// };


export const isValidEthereumAddress = (address) => {
	return ethers.utils.isAddress(address);
}


// Optional Config object, but defaults to demo api-key and eth-mainnet.

// export const estimateGasOfTx = async (sendAddress) => {
// 	const estimatedGasCostInHex = await alchemy.core.estimateGas({
// 		// Wrapped ETH address
// 		to: sendAddress,
// 		// `function deposit() payable`
// 		data: '0xd0e30db0',
// 		// 1 ether
// 		value: Utils.parseEther('1.0'),
// 		chainId: 11155111
// 	});

// 	return (
// 		Utils.formatUnits(estimatedGasCostInHex)
// 	);
// }