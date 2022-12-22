import {ethers} from 'ethers';
const wallet = ethers.Wallet.createRandom()

export let walletAddress = wallet.address;
export let mnemonic = wallet.mnemonic.phrase;
export let privateKey = wallet.privateKey;