import React, { useState, useEffect } from 'react';
import style from './TransferModal.module.css';
import { sendETH, getETHGasPrice, isValidEthereumAddress, estimateGasOfTx } from '../../utils/ethWallet';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import {
	ethers
} from 'ethers';

const TransferModal = (props) => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState("");
	const [estimatedGas, setEstimatedGas] = useState(0)
	const privateKey = props.privateKey;
	const contractAddress = ''; // Not used in this case
	const sendAddress = props.ETHAddress;


	useEffect(() => {
		setEstimatedGas(estimateGasOfTx('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'))
		console.log('running' + estimateGasOfTx('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'))
	}, [])


	// Validate the wallet address
	const isValidAddress = ethers.utils.isAddress(recipientAddress);

	// Validate the amount
	const isValidAmount = !isNaN(amount) && +amount > 0;

	return (
		<div className={style.TransferModalWrapper}>
			<div className={style.TransferOverlay}>
				<div className={style.TransferModal}>
					<span className={style.TransferHeading}>Sending ETH</span>

					<div className={style.TransferInputWrapper}>
						{/* Amount Input */}
						<div className={style.TransferInputContainer}>
							<FormInput
								title='Amount in $'
								change={(e) => setAmount(e.target.value)}
							/>
							<span
								style={{
									textAlign: 'left',
									color: isValidAmount ? '#4ECB71' : '#FF4E42', // Green for valid, red for invalid
									fontWeight: 700,
									fontSize: '0.8em',
								}}
							>
								Amount is {isValidAmount ? 'valid' : 'invalid'}
							</span>
						</div>

						{/* Recipient Wallet Address Input */}
						<div className={style.TransferInputContainer}>
							<FormInput
								title='Recipient Wallet Address'
								change={(e) => setRecipientAddress(e.target.value)}
							/>
							<span
								style={{
									textAlign: 'left',
									color: isValidAddress ? '#4ECB71' : '#FF4E42', // Green for valid, red for invalid
									fontWeight: 700,
									fontSize: '0.8em',
								}}
							>
								Wallet address is {isValidAddress ? 'valid' : 'invalid'}
							</span>
						</div>

						{/* Transaction Details */}
						<div className={style.TransactionDetailsContainer}>
							<div className={style.TransactionDetails}>
								<span className={style.TransactionDetailsText}>Gas fees:</span>
								{/* <span className={style.TransactionDetailsValue}>${estimatedGas || 0.98}</span> */}
							</div>

							<div className={style.TransactionDetails}>
								<span className={style.TransactionDetailsText}>Total:</span>
								{/* <span className={style.TransactionDetailsValue}>${(estimatedGas)}</span> */}
							</div>
						</div>

						{/* Action Buttons */}
						<div className={style.TransferButtons}>
							<PrimaryCTA ButtonText='Send' />
							<PrimaryCTA ButtonText='Cancel' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransferModal;

{/* <button
	className={style.TransferSendButton}
	onClick={
		() => sendETH(sendAddress, recipientAddress, amount, privateKey, contractAddress)
	}>
	Send
</button>

<button
	className={style.TransferCancelButton}
	onClick={checkAddress(recipientAddress)}>
	Cancel
</button> */}