import React from 'react';
import {
	useParams
} from 'react-router-dom';

import EthereumWallet from './EthereumWallet/EthereumWallet';
import TunnelWallet from './TunnelWallet/TunnelWallet';
import BitcoinWallet from './BitcoinWallet/BitcoinWallet';
import USDTWallet from './USDTWallet/USDTWallet';


const Wallet = () => {
	let {
		walletName
	} = useParams();
	console.log(walletName)
	// if (walletName === 'usdt') {
	// 	return <USDTWallet/>
	// }

	if (walletName === 'ethereum') {
		return <EthereumWallet / >
	}

	if (walletName === 'tnl') {
		return <TunnelWallet / >
	}

	if (walletName === 'bnb') {
		return <TunnelWallet / >
	}
}

export default Wallet;