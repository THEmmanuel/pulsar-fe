import React, { useState, useEffect } from 'react';
import style from './TokenFaucet.module.css'
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import { PaystackButton } from 'react-paystack'
import axios from 'axios';


const TokenFaucet = () => {
	const [amount, setAmount] = useState(1000000); // Default amount set to 1000000
	const [walletAddress, setWalletAddress] = useState('');
	const API_URL = process.env.REACT_APP_API_URL;

	// Deposit tokens function to send a POST request to /token-faucet
	const depositTokens = async () => {
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

	return (
		<div className={style.FaucetPageWrapper}>
			<h2>Token Faucet</h2>

			{/* Input field for Amount */}
			<div>
				<div className={style.FaucetInputWrapper}>
					<input
						type="text"
						title="Amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter token amount"
						className='mainInput'
					/>

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