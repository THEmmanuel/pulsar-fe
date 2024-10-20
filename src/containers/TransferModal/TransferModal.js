import React, { useState, useEffect } from 'react';
import style from './TransferModal.module.css';
import { sendETH, estimateGasOfTx } from '../../utils/ethWallet';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import { ethers } from 'ethers';

const TransferModal = (props) => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState("");
	const [estimatedGas, setEstimatedGas] = useState(0);
	const [loading, setLoading] = useState(true);
	const [timeLeft, setTimeLeft] = useState(15); // Timer for refresh

	const privateKey = props.privateKey;
	const sendAddress = props.ETHAddress;

	// Function to fetch and update gas estimate
	const updateGasEstimate = async () => {
		setLoading(true);
		try {
			const gas = await estimateGasOfTx('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
			setEstimatedGas(parseFloat(gas));
		} catch (error) {
			console.error('Error estimating gas:', error);
		} finally {
			setLoading(false);
		}
	};

	// Timer effect to update gas estimate every 15 seconds
	useEffect(() => {
		// Initial fetch of the gas estimate
		updateGasEstimate();

		// Set an interval to refresh gas estimate every 15 seconds
		const intervalId = setInterval(() => {
			updateGasEstimate();
			setTimeLeft(15); // Reset the countdown every time it refreshes
		}, 15000);

		// Countdown timer for the next refresh
		const countdownId = setInterval(() => {
			setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 15));
		}, 1000);

		// Cleanup intervals on component unmount
		return () => {
			clearInterval(intervalId);
			clearInterval(countdownId);
		};
	}, []);

	// Validate the wallet address
	const isValidAddress = ethers.utils.isAddress(recipientAddress);

	// Validate the amount
	const isValidAmount = !isNaN(amount) && +amount > 0;

	// Convert `estimatedGas` to a number and calculate the total
	const gasInUSD = parseFloat(estimatedGas) * 2517.3; // Gas price in USD
	const totalCost = isValidAmount ? (parseFloat(amount) + estimatedGas).toFixed(2) : 0; // Total = amount + gas fees



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
								<span className={style.TransactionDetailsValue}>
									{loading ? 'Loading...' : `$${estimatedGas}`}
								</span>
								<span className={style.Timer}>
									(Next refresh in {timeLeft}s)
								</span>
							</div>

							<div className={style.TransactionDetails}>
								<span className={style.TransactionDetailsText}>Total:</span>
								<span className={style.TransactionDetailsValue}>
									{isValidAmount ? `$${totalCost}` : 'Enter a valid amount'}
								</span>
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
