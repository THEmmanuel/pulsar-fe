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
		<div className={style.TransferModalWrapper}>
			<span className={style.TransferHeading}>Sending ETH</span>

			<div className={style.TransferInputWrapper}>
				<div className={style.TransferInputContainer}>
					<span className={style.TransferInputText}>Amount</span>
					<input
						type="text"
						className={style.TransferInput}
						onChange={(e) => setAmount(e.target.value)} />
				</div>

				<div className={style.TransferInputContainer}>
					<span className={style.TransferInputText}>Recipient Wallet Address</span>
					<input
						type="text"
						className={style.TransferInput}
						onChange={(e) => setRecipientAddress(e.target.value)} />
				</div>

				<div>
					<button
						onClick={
							() => sendETH(sendAddress, recipientAddress, amount, privateKey, contractAddress)
						}>
						Send
					</button>

					<button>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default TransferModal;