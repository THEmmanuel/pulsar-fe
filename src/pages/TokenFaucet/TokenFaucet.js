import React, { useState, useEffect } from 'react';
import style from './TokenFaucet.module.css'
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import { PaystackButton } from 'react-paystack'
import axios from 'axios';

import toast, { toastConfig } from 'react-simple-toasts';
toastConfig({ theme: 'dark' });


const TokenFaucet = () => {
	const [amount, setAmount] = useState(1000000); // Default amount set to 1000000
	const [walletAddress, setWalletAddress] = useState('');
	const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Timer for refresh
	const API_URL = process.env.REACT_APP_API_URL;

	// Deposit tokens function to send a POST request to /token-faucet
	const depositTokens = async () => {
		toast('submitting transaction')
		try {
			const response = await axios.post(`${API_URL}/token-faucet`, {
				tokenAmount: amount,
				recieversWalletAddress: walletAddress,
			});

			console.log('Tokens deposited successfully:', response.data);
		} catch (error) {
			console.error('There was an error depositing the tokens:', error);
		}
	};

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
			setAmount((prevAmount) => prevAmount * 100);
		} else {
			// Convert USD to ETH if switching to ETH
			setAmount((prevAmount) => prevAmount / 100);
		}
		setSelectedCurrency(currency);
	};

	return (
		<div className={style.FaucetPageWrapper}>
			<h2>Token Faucet</h2>

			{/* Input field for Amount */}
			<div>
				<div className={style.FaucetInputWrapper}>
					<div>
						<input
							type="text"
							title="Amount"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							placeholder="Enter token amount"
							className='mainInput'
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
								onClick={() => handleCurrencySwitch('ETH')}>
								$PULSR
							</button>
						</div>
					</div>

					{/* Input field for Wallet Address */}
					<input
						type="text"
						title="Wallet Address"
						value={walletAddress}
						onChange={(e) => setWalletAddress(e.target.value)}
						placeholder="Enter wallet address"
						className='mainInput'
					/>
				</div>

				{/* Button to trigger token deposit */}
				<PrimaryCTA
					ButtonText="Buy Token"
					click={depositTokens}
				/>
			</div>
		</div>
	);
};

export default TokenFaucet