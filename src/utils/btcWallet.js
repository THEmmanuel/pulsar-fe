//Import dependencies
// const bip32 = require('bip32')
// const bip39 = require('bip39')
// const { BIP32Factory } = require('bip32')
// const ecc = require('tiny-secp256k1')
import axios from 'axios';
// const bitcoin = require('bitcoinjs-lib')
import bitcore from 'bitcore-lib';

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
	try {
		const network = 'BTCTEST';
		const amountInSatoshi = amount * 100000000;
		let fee = 0;
		let inputCount = 0;
		let outputCount = 2;

		console.log(sendAddress)
		console.log(toAddress)
		console.log(amount)
		console.log(key)

		const response = await axios.get(
			`https://sochain.com/api/v2/get_tx_unspent/${network}/${sendAddress}`
		);

		console.log(response)

		const recommededFee = await axios.get(
			"https://bitcoinfees.earn.com/api/v1/fees/recommended"
		)

		const transaction = new bitcore.Transaction();
		let totalAmountAvailable = 0;

		let inputs = [];
		let utxos = response.data.data.txs;

		for (const element of utxos) {
			let utxo = {};
			utxo.satoshis = Math.floor(Number(element.value) * 100000000);
			utxo.script = element.script_hex;
			utxo.address = element.address;
			utxo.txId = element.txid;
			utxo.outputIndex = element.output_no;
			totalAmountAvailable += utxo.satoshis;
			inputCount += 1;
			inputs.push(utxo);
		}

		const transactionSize = inputCount * 100 * outputCount * 34 + 10 - inputCount;
		fee = transactionSize * recommededFee.data.hourFee / 3;
		if (totalAmountAvailable - amountInSatoshi - fee < 0) {
			throw new Error('Not enough BTC for this transaction');
		}

		transaction.from(inputs);
		transaction.to(toAddress, amountInSatoshi);
		transaction.change(sendAddress);
		transaction.fee(Math.round(fee));
		transaction.sign(key);

		const serializedTransaction = transaction.serialize();
		const result = await axios({
			method: 'POST',
			url: `https://cors-anywhere.herokuapp.com/https://sochain.com/api/v2/send_tx/${network}`,
			data: {
				tx_hex: serializedTransaction,
			},
		});
		return result.data.data;

	} catch (error) {
		return error
	}
}





// console.log(`
// Wallet generated:
//  - Address  : ${btcAddress},
//  - Key : ${node.toWIF()}, 
//  - Mnemonic : ${mnemonic}
// `)