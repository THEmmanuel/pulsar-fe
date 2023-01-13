import React, { useState } from 'react';
import style from './TransferModal.module.css';
import { sendETH, getETHGasPrice } from '../../utils/ethWallet';

const TransferModal = props => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState(0);
	const [gasPrice, setGasPrice] = useState(0)
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

							<span className={style.WalletCheckText}>Wallet address is valid</span>
						</div>

						<div className={style.TransactionDetailsContainer}>
							<div className={style.TransactionDetails}>
								<span className={style.TransactionDetailsText}>Gas fees:</span>
								<span className={style.TransactionDetailsValue}>$0.98</span>
							</div>

							<div className={style.TransactionDetails}>
								<span className={style.TransactionDetailsText}>Total:</span>
								<span className={style.TransactionDetailsValue}>${+amount + 0.98}</span>
							</div>
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