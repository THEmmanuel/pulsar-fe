import React, { useState } from 'react';
import style from './TransferModal.module.css';
import { sendETH } from '../../utils/ethWallet';

const TransferModal = props => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState("");
	const [privateKey, setPrivateKey] = useState("");
	const contractAddress = '';
	const sendAddress = '0xbB0581307673918fDf9442e37a06c364837a15D6';

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

				<button
					onClick={
						() => sendETH(sendAddress, recipientAddress, amount, privateKey, contractAddress)
					}>
					Send
				</button>
			</div>
		</div>
	)
}

export default TransferModal;