import React from 'react';
import { useParams } from 'react-router-dom';

import EthereumWallet from './EthereumWallet/EthereumWallet';
import BitcoinWallet from './BitcoinWallet/BitcoinWallet';
import USDTWallet from './USDTWallet/USDTWallet';


const Wallet = () => {
	let { walletName } = useParams();
	console.log(walletName)
	// if (walletName === 'usdt') {
	// 	return <USDTWallet/>
	// }

	if (walletName === 'ethereum') {
		return <EthereumWallet />
	}

	// if (walletName === 'bitcoin') {
	// 	return <BitcoinWallet />
	// }
}

export default Wallet;