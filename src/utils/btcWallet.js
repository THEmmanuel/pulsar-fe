//Import dependencies
// const bip32 = require('bip32')
// const bip39 = require('bip39')
// const { BIP32Factory } = require('bip32')
// const ecc = require('tiny-secp256k1')
import axios from 'axios';
// const bitcoin = require('bitcoinjs-lib')
// import { bitcore } from 'bitcore-lib';

const blockcypherToken = 'a7b3077dd70a47beb1edeaea116f2c60'

export const getBTCBalance = async address => {
	const blockchainAPI = `https://api.blockcypher.com/v1/btc/test3/addrs/`;
	try {
		const response = await axios.get(`${blockchainAPI}${address}/balance`);
		return response.data.balance;
	} catch (error) {
		console.error(error);
	}
};

export const sendBTC = async (sendAddress, toAddress, amount, key) => {
	const sochain_network = 'BTCTEST';
	const satoshiToSend = amount * 100000000;
	let fee = 0
}


// console.log(`
// Wallet generated:
//  - Address  : ${btcAddress},
//  - Key : ${node.toWIF()}, 
//  - Mnemonic : ${mnemonic}
// `)