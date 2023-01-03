import React from 'react';
import EthereumWallet from './EthereumWallet/EthereumWallet';
import BitcoinWallet from './BitcoinWallet/BitcoinWallet';
import { useParams } from 'react-router-dom';


const Wallet = () => {
	let { walletName } = useParams();
	console.log(walletName)
	if (walletName === 'ethereum') {
		return <EthereumWallet />
	}

	if (walletName === 'bitcoin') {
		return <BitcoinWallet />
	}
}

export default Wallet;