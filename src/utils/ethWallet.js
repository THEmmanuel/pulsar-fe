import {
	ethers
} from 'ethers';
import USDTWallet from '../pages/Wallet/USDTWallet/USDTWallet';
import erc20ABI from '../contracts/erc20ABI.json';

const network = 'goerli';
window.ethersProvider = new ethers.providers.InfuraProvider(network);let balance = 0
const USDTContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

export const getETHBalance = async (address) => {
	balance = await window.ethersProvider.getBalance(address);
	const EthBalance = ethers.utils.formatEther(balance);
	return EthBalance;
}

export const getUSDTBalance = async (address) => {
	const contract = new ethers.Contract(USDTContractAddress, erc20ABI, window.ethersProvider)
	return balance = await contract.balanceOf(address).toString()
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

export const sendUSDT = async (
	sendAddress,
	toAddress,
	amount,
	key,
) => {

}

export const getETHHistory = async (address) => {
	let etherscanProvider = new ethers.providers.EtherscanProvider('goerli');

	try {
		// Wait for the Promise to resolve
		const history = await etherscanProvider.getHistory(address);

		// Do something with the history
		history.forEach((tx) => tx);

		// Return the history
		return history;
	} catch (error) {
		// Catch any errors that might occur
		console.error(error);
	}
};