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

// export const sendETH = async (address, amount, key) => {
// }

export const sendETH = async (sendAddress,
	toAddress,
	amount,
	key,
	contractAddress) => {
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

export const sendUSDT = async () => {
	
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