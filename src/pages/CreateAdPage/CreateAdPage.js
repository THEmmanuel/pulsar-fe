import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useUser } from '@clerk/clerk-react';

import style from './CreateAdPage.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import FormInput from '../../components/FormInput/FormInput';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import MainDropdown from '../../components/MainDropdown/MainDropdown';
import toast, { toastConfig } from 'react-simple-toasts';
toastConfig({ theme: 'dark' });





// I want this rewritten in a way such that the value of "token to buy" or "sell" text depends on if its a buy or sell adType, if adtype is buy and 'pulsar' is included in the paymentMethods, set sellToken to 'pulsar'. leave buyToken as it is.

// if its a sell adType, token to buy is token to sell. if adType is sell and 'pulsar' is included in the paymentMethods, set 'pulsar' as the value of buyToken.


// determine ad type. buy or sell.
// check ad object. if adType is buy.
// if payment methods array has the word 'pulsar included. set it as the value of'




const CreateAdPage = () => {
	const API_URL = process.env.REACT_APP_API_URL;
	const { user } = useUser();


	const [ad, setAd] = useState({
		adType: 'buy',
		username: '',
		buyToken: 'eth',
		sellToken: '',
		fiatCurrency: 'usd',
		rate: 0,
		available: 0,
		lowestOrder: 0,
		highestOrder: 0,
		paymentMethods: [], // Initialize as an empty array for multiple methods
		bankName: '',
		bankAccountNumber: '',
		bankAccountName: '',
		paypalID: ''
	});

	const [pulsarSelected, setPulsarSelected] = useState(false)

	const options = [
		{ value: 'pulsar', label: '$PULSR' },
		{ value: 'bank transfer', label: 'Bank Transfer' },
		{ value: 'paypal', label: 'PayPal' },
	];

	useEffect(() => {
		if (user) {
			setAd({
				...ad,
				username: user.username
			})
		}
	}, user)

	const tokens = [
		{ value: 'pulsar', label: 'Pulsar' },
		{ value: 'btc', label: 'Bitcoin' },
		{ value: 'eth', label: 'Ethereum' },
		{ value: 'usdt', label: 'USDT' },
	]

	const addPulsar = (ad) => {
		console.log('function runs')
		if (pulsarSelected && ad.adType === 'buy') {
			setAd({
				...ad,
				sellToken: 'pulsar'
			})
		}

		if (pulsarSelected && ad.adType === 'sell') {
			setAd({
				...ad,
				buyToken: 'pulsar'
			})
		}
	}

	const handleChange = e => {
		const updatedAd = {
			...ad,
			[e.name]: e.value,
		};
		setAd(updatedAd);
		addPulsar(updatedAd); // Pass the updated ad state here
	};

	const handleTextChange = e => {
		const updatedAd = {
			...ad,
			[e.target.name]: e.target.value,
		};
		setAd(updatedAd);
		addPulsar(updatedAd); // Pass the updated ad state here
	};

	const handleCheckboxChange = (value) => {
		setAd((prev) => {
			const updatedPaymentMethods = prev.paymentMethods.includes(value)
				? prev.paymentMethods.filter((method) => method !== value) // Remove if already selected
				: [...prev.paymentMethods, value]; // Add if not selected

			// Update pulsarSelected based on whether 'pulsar' is in the array
			const isPulsarSelected = updatedPaymentMethods.includes('pulsar');
			setPulsarSelected(isPulsarSelected); // Set pulsarSelected to true or false

			const updatedAd = {
				...prev,
				paymentMethods: updatedPaymentMethods, // Update paymentMethods in state
			};
			addPulsar(updatedAd); // Pass the updated ad state here
			return updatedAd; // Return the updated ad for setAd
		});
	};



	const addPeerToPeerAd = () => {
		toast("Creating ad...");

		axios.post(`${API_URL}/p2p`, ad)
			.then(res => {
				if (res.status === 200) {
					toast("Ad created successfully!");
				}
			})
			.catch(err => {
				toast("Failed to create ad. Please try again.");
				console.error(err); // Optional: Log error details
			});
	};

	return (
		!user ? <span>Not logged in</span>
			:
			<div>
				<span>Create Ad page</span>
				<div className={style.FormInputContainer}>
					<div className={style.FormInputWrapper}>
						<MainDropdown
							DropdownHeading='Ad Type'
							PrimaryText='Buy'
							options={
								[
									{ value: 'buy', label: 'Buy' },
									{ value: 'sell', label: 'Sell' },
								]}
							onSelect={handleChange}
							name='adType'
						/>

						<MainDropdown
							DropdownHeading='Fiat Currency'
							PrimaryText='NGN'
							options={
								[
									{ value: 'NGN', label: 'Nigerian Naira' },
									{ value: 'USD', label: 'United States Dollar' },
								]}
							onSelect={handleChange}
							name='fiatCurrency'
						/>

						<MainDropdown
							DropdownHeading='Chain'
							PrimaryText='Etherum Mainnet'
							options={
								[
									{ value: 'ethereum-mainnet', label: 'Etherum Mainnet' },
									{ value: 'ethereum-sepolia', label: 'Etherum Sepolia' },
								]}
							onSelect={handleChange}
							name='chain'
						/>

						{ad.adType === 'buy' ?
							<MainDropdown
								DropdownHeading='Token to buy'
								PrimaryText={ad.buyToken}
								options={tokens}
								onSelect={handleChange}
								name='buyToken'
							/>

							:
							<MainDropdown
								DropdownHeading='Token to sell'
								PrimaryText={ad.sellToken}
								options={tokens}
								onSelect={handleChange}
								name='sellToken'
							/>
						}

						<FormInput
							title='Rate'
							name='rate'
							value={ad.rate}
							change={handleTextChange}
						/>

						<FormInput
							title={`Available ${ad.adType ? ad.sellToken : ad.buyToken}`}
							name="available"
							value={ad.available || ""}
							change={handleTextChange}
						/>


						<FormInput
							title='Lowest Order Limit'
							name='lowestOrder'
							value={ad.lowestOrder}
							change={handleTextChange}
						/>

						<FormInput
							title='Highest Order Limit'
							name='highestOrder'
							value={ad.highestOrder}
							change={handleTextChange}
						/>

						{
							ad.adType === 'buy' ?
								<div className={style.BankInfo}>
									<span>
										Bank Details
									</span>

									<div className={style.BankInfoForms}>
										<FormInput
											title='Bank'
											name='bankName'
											value={ad.bankName}
											change={handleTextChange}
										/>

										<FormInput
											title='Bank Account Number'
											name='bankAccountNumber'
											value={ad.bankAccountNumber}
											change={handleTextChange}
										/>

										<FormInput
											title='Bank Account Name'
											name='bankAccountName'
											value={ad.bankAccountName}
											change={handleTextChange}
										/>

										<FormInput
											title='Paypal ID'
											name='paypalID'
											value={ad.paypalID}
											change={handleTextChange}
										/>
									</div>
								</div>
								: null
						}

						<div className={style.PaymentMethodWrapper}>
							<span>Payment Method</span>
							<div className={style.PaymentMethods}>
								{options.map((option) => (
									<label key={option.value}>
										<input
											type="checkbox"
											value={option.value}
											checked={ad.paymentMethods.includes(option.value)}
											onChange={() => handleCheckboxChange(option.value)}
										/>
										{option.label}
									</label>
								))}
							</div>
						</div>
					</div>

					buyer is paying.
					seller is recieving payments.

					add bank details.
					add this in db too.

					<div className={style.AdPreviewWrapper}>
						<span className={style.AdPreviewHeading}>Here's what your ad will look like</span>
						<PeerToPeerAd
							adType={ad.adType}
							sellToken={ad.sellToken}
							buyToken={ad.buyToken}
							fiatCurrency={ad.fiatCurrency}
							username={user.username}
							rate={ad.rate}
							available={ad.available}
							lowestOrder={ad.lowestOrder}
							highestOrder={ad.highestOrder}
							paymentMethod={ad.paymentMethods}
						/>
					</div>

					<div>
						<PrimaryCTA
							ButtonText='Confirm'
							click={addPeerToPeerAd}
						/>
					</div>
				</div>
			</div>
	)
}

export default CreateAdPage;


















































// if the user is selling with pulsar. set it as sellToken automatically.

// 						if the user is buying with pulsar. set it as the buy token automatically.

// 						{/* if token to buy, pulsar acts as fiat sell and is token to be sold. */}
// 						automatically set pulsar to token to buy or sell depending on if user chooses it as a means of payment and if its buy ir sell.

// 						its either token to buy or sell now.

// 						if i have sell and pulsar selected in the options.

// 						it means i have fiat and I want to buy crypto.

// 						if i have that selected, it means im recieving money too. show my aza if i have bank payments.