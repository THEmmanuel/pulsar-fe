import React, { useState } from 'react';
import style from './TransferModal.module.css';
import { sendETH } from '../../utils/ethWallet';

const TransferModal = props => {
	const [recipientAddress, setRecipientAddress] = useState('');
	const [amount, setAmount] = useState('');
	const [privateKey, setPrivateKey] = useState('');

	const handleSubmit = () => {
		sendETH(recipientAddress, amount, privateKey)
			.then((response) => {
				console.log(`Transaction sent: ${response.hash}`);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<div>
			<span>Sending ETH</span>

			<div>
				<div>
					<span>Amount</span>
					<input type="text" onChange={(e) => setAmount(e.target.value)} />
				</div>

				<div>
					<span>Recipient Wallet Address</span>
					<input type="text" onChange={(e) => setRecipientAddress(e.target.value)} />
				</div>

				<div>
					<span>Private Key</span>
					<input type="text" onChange={(e) => setPrivateKey(e.target.value)} />
				</div>

				<button onClick={() => handleSubmit()}>
					Send
				</button>
			</div>
		</div>
	)
}

export default TransferModal;