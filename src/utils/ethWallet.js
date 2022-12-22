import {
	ethers
} from 'ethers';

export const createEthWallet = () => {
	const wallet = ethers.Wallet.createRandom()
	return {
		walletAddress: wallet.address,
		mnemonic: wallet.mnemonic.phrase,
		privateKey: wallet.privateKey
	}
}