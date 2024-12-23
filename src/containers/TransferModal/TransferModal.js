import React, { useState, useEffect, useContext } from 'react';
import style from './TransferModal.module.css';
import { sendETH, estimateGasOfTx, sendToken } from '../../utils/ethWallet';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import { ethers } from 'ethers';
import toast, { toastConfig } from 'react-simple-toasts';
import axios from 'axios';

import { UserContext } from '../../contexts/UserContext';

toastConfig({ theme: 'dark' });

const API_URL = process.env.REACT_APP_API_URL;
const ETHERSCAN_KEY = process.env.REACT_APP_ETHERSCAN_KEY;


const TransferModal = (props) => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState(0);
	const [gasPriceData, setGasPriceData] = useState({});
	const [loading, setLoading] = useState(true);
	const [timeLeft, setTimeLeft] = useState(30); // Timer for refresh
	const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Timer for refresh

	const { coinData, setCoinData } = useContext(UserContext)


	const coinGeckoAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Csolana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'

	useEffect(() => {
		axios.get(coinGeckoAPI)
			.then(res => setCoinData(res.data))
			.catch(err => console.log(err))
	}, [])


	const fetchGasPrices = async () => {
		try {
			const response = await axios.get('https://api.etherscan.io/api', {
				params: {
					module: 'gastracker',
					action: 'gasoracle',
					apikey: 'HU3E6FBNA9KRV755H4UQ5DN3AWUEJKCWMU'
				}
			});

			// Set the gasPriceData to the result
			const gasPriceObject = response.data.result;
			setGasPriceData(gasPriceObject)
			setLoading(false)
			console.log('Gas Price Data:', gasPriceObject);

			return gasPriceObject; // Return the data if needed elsewhere
		} catch (error) {
			console.error('Error fetching gas prices:', error.message);
			throw error;
		}
	};

	const convertGweiToUSD = (gweiAmount, ethPriceInUSD) => {
		// Convert Gwei to ETH (1 Gwei = 1e-9 ETH)
		const ethAmount = gweiAmount * 1e-9;

		// Calculate the USD equivalent
		const usdValue = ethAmount * ethPriceInUSD;

		return usdValue;
	};
	// Function to fetch and update gas estimate


	// Timer effect to update gas estimate every 30 seconds
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		// Initial fetch of the gas estimate
		fetchGasPrices();

		// Set an interval to refresh gas estimate every 15 seconds
		const intervalId = setInterval(() => {
			fetchGasPrices();
			setTimeLeft(30); // Reset the countdown every time it refreshes
		}, 30000);

		// Countdown timer for the next refresh
		const countdownId = setInterval(() => {
			setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 30));
		}, 1000);

		// Cleanup intervals on component unmount
		return () => {
			clearInterval(intervalId);
			clearInterval(countdownId);
		};
	}, []);

	const data = {
		amount: amount,  // Replace with the desired amount
		walletAddress: recipientAddress,  // Replace with the actual wallet address
		tokenToSend: 'eth',  // Replace with the token name or symbol
		senderUsername: 'leunamme',  // Use a secure method to handle this!
		walletName: 'ethereum'
	};

	// Validate the wallet address
	const isValidAddress = ethers.utils.isAddress(recipientAddress);
	// Validate the amount
	const isValidAmount = !isNaN(amount) && +amount > 0;



	// Function to handle amount change based on selected currency
	const handleAmountChange = (value) => {
		if (selectedCurrency === 'USD') {
			setAmount(value); // Store USD value directly
		} else {
			setAmount(value); // Store ETH value directly
		}
	};

	// Function to switch currencies
	const handleCurrencySwitch = (currency) => {
		if (currency === 'USD') {
			// Convert ETH to USD if switching to USD
			setAmount((prevAmount) => prevAmount * 3500);
		} else {
			// Convert USD to ETH if switching to ETH
			setAmount((prevAmount) => prevAmount / 3500);
		}
		setSelectedCurrency(currency);
	};

	return (
		<div className={style.TransferModalWrapper}>
			<div className={style.TransferOverlay}>
				<div className={style.TransferModal}>
					<span className={style.TransferHeading}>Sending ETH</span>

					<div className={style.TransferInputWrapper}>
						{/* Amount Input */}
						<div className={style.TransferInputContainer}>
							<FormInput
								title={`Amount in ${selectedCurrency}`}
								change={(e) => handleAmountChange(e.target.value)}
								value={amount}  // Controlled input value
							/>

							<div className={style.CurrencySwitcherWrapper}>
								<button
									className={style.CurrencySwitcher}
									onClick={() => handleCurrencySwitch('USD')}
								>
									USD
								</button>

								<button
									className={style.CurrencySwitcher}
									onClick={() => handleCurrencySwitch('ETH')}
								>
									ETH
								</button>
							</div>

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
									{loading || !gasPriceData?.ProposeGasPrice || !coinData?.ethereum?.usd
										? 'Loading...'
										: `$${convertGweiToUSD(gasPriceData.ProposeGasPrice, coinData.ethereum.usd).toFixed(8)}`
									}
								</span>

								<span className={style.Timer}>
									(Next refresh in {timeLeft}s)
								</span>
							</div>

							<div className={style.TransactionDetails}>
								<span className={style.TransactionDetailsText}>Total:</span>
								<span className={style.TransactionDetailsValue}>
									{/* {isValidAmount ? `$${totalCost}` : 'Enter a valid amount'} */}
								</span>
							</div>
						</div>

						{/* Action Buttons */}
						<div className={style.TransferButtons}>
							<PrimaryCTA
								ButtonText='Send'
								click={() => sendToken(data)}
							/>
							<PrimaryCTA
								ButtonText='Close'
								click={() => props.cancel()}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransferModal;
