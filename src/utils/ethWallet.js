import { ethers } from 'ethers';

export const getETHBalance = async (address) => {
	const network = 'goerli';
	const provider = ethers.getDefaultProvider(network);
	const balance = await provider.getBalance(address);
	const EthBalance = ethers.utils.formatEther(balance);
	return EthBalance;
}