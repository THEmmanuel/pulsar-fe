import React from 'react';
import EthereumWallet from './EthereumWallet/EthereumWallet';
import { useParams } from 'react-router-dom';


const Wallet = () => {
	let { walletName } = useParams();
	console.log(walletName)
	if (walletName === 'ethereum') {
		return <EthereumWallet/>
	}
}

export default Wallet;