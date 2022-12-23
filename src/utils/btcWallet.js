import {PrivateKey} from 'bitcore-lib';
import {mainnet, testnet} from 'bitcore-lib/lib/networks';
import {Mnemonic} from 'bitcore-mnemonic';

export const createWallet = (network = testnet) => {
	let privateKey = new PrivateKey();
	let address = privateKey.toAddress(network);
	return {
		privateKey: privateKey.toString(),
		address: address.toString(),
	}
}

export const createHDWallet = (network = testnet) => {
	let passPhrase = new Mnemonic(Mnemonic.Words.SPANISH);
	let xpriv = passPhrase.toHDPrivateKey(passPhrase.toString(), network);

	return {
		xpub: xpriv.xpubkey,
		privateKey: xpriv.privateKey.toString(),
		address: xpriv.publicKey.toAddress().toString(),
		mnemonic: passPhrase.toString()
	};
};