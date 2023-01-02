import React, { useState } from 'react';
import style from './TransferModal.module.css';
import { sendETH } from '../../utils/ethWallet';

const TransferModal = props => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState("");
	const privateKey = props.privateKey;
	const contractAddress = '';
	const sendAddress = props.ETHAddress;

	return (
		<div className={style.TransferModalWrapper}>
			<div className={style.TransferOverlay}>
				<div className={style.TransferModal}>
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

						<div className={style.TransferButtons}>
							<button
								className={style.TransferSendButton}
								onClick={
									() => sendETH(sendAddress, recipientAddress, amount, privateKey, contractAddress)
								}>
								Send
							</button>

							<button
								className={style.TransferCancelButton}
								onClick={props.cancel}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default TransferModal;