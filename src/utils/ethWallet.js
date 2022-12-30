import {
	ethers
} from 'ethers';

const network = 'goerli';
const provider = ethers.getDefaultProvider(network);
let balance = 0

export const getETHBalance = async (address) => {
	balance = await provider.getBalance(address);
	const EthBalance = ethers.utils.formatEther(balance);
	return EthBalance;
}

export const sendETH = async (address, amount, key) => {
	const wallet = new ethers.Wallet(key, provider);
	balance = await provider.getBalance()

	if (balance.lt(amount)) {
		throw new Error(`Insufficient balance. Required: ${amount.toString()}, available: ${balance.toString()}`);
	}

	const tx = {
		to: address,
		value: ethers.utils.parseEther(amount.toString())
	};

	const gasEstimate = await provider.estimateGas(tx);
	const gasCostInEther = ethers.utils.formatEther(gasEstimate);
	console.log(`Estimated gas cost: ${gasCostInEther} ETH`);

	const signedTx = await wallet.sign(tx);
	const response = await provider.sendTransaction(signedTx);
	return response;
}


// import { ethers } from 'ethers';

// const network = 'goerli';
// const provider = ethers.getDefaultProvider(network);

// export const getETHBalance = async (address) => {
// 	const balance = await provider.getBalance(address);
// 	const EthBalance = ethers.utils.formatEther(balance);
// 	return EthBalance;
// }

// export const SendETH = async (address, amount, key) => {
// 	const wallet = new ethers.Wallet(key, provider);
// 	const balance = await wallet.getBalance();

// 	if (balance.lt(amount)) {
// 		throw new Error(`Insufficient balance. Required: ${amount.toString()}, available: ${balance.toString()}`);
// 	}

// 	const tx = {
// 		to: address,
// 		value: ethers.utils.parseEther(amount.toString())
// 	};

// 	const gasEstimate = await provider.estimateGas(tx);
// 	const gasCostInEther = ethers.utils.formatEther(gasEstimate);
// 	console.log(`Estimated gas cost: ${gasCostInEther} ETH`);

// 	const signedTx = await wallet.sign(tx);
// 	const response = await provider.sendTransaction(signedTx);

// 	return response;
// }