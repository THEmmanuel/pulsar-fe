//Import dependencies
// const bip32 = require('bip32')
// const bip39 = require('bip39')
// const { BIP32Factory } = require('bip32')
// const ecc = require('tiny-secp256k1')
// const bitcoin = require('bitcoinjs-lib')
import axios from 'axios';

export const getBTCBalance = async address => {
	const blockchainAPI = 'https://api.blockcypher.com/v1/btc/main/addrs/';
	axios.get(`${blockchainAPI}${address}/balance`)
	.then(res => res.json)
}

// console.log(`
// Wallet generated:
//  - Address  : ${btcAddress},
//  - Key : ${node.toWIF()}, 
//  - Mnemonic : ${mnemonic}
// `)