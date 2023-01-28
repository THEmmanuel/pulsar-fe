import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useUser } from '@clerk/clerk-react';

import style from './CreateAdPage.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import FormInput from '../../components/FormInput/FormInput';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import MainDropdown from '../../components/MainDropdown/MainDropdown';

const CreateAdPage = () => {
	const API_URL = 'http://localhost:9000';
	const { user } = useUser();

	const [ad, setAd] = useState({
		adType: 'buy',
		username: '',
		token: 'ETH',
		rate: 0,
		availableAmount: 0,
		lowestAmount: 0,
		highestAmount: 0,
		paymentMethod: 'Bank Transfer'
	})

	// const [adType, setAdType] = useState('buy');
	// const [token, setToken] = useState('ETH');
	// const [rate, setRate] = useState();
	// const [availableAmount, setAvailableAmount] = useState();
	// const [lowestAmount, setLowestAmount] = useState();
	// const [highestAmount, setHighestAmount] = useState();
	// const [paymentMethod, setPaymentMethod] = useState('Bank Transfer');

	const tokens = [
		{ value: 'ETH', label: 'Ethereum' },
		{ value: 'USDT', label: 'USDT' },
		{ value: 'BTC', label: 'Bitcoin' }
	]

	const handleChange = e => {
		setAd({
			...ad,
			[e.name]: e.value,
		});
	}

	const handleTextChange = e => {
		setAd({
			...ad,
			[e.target.name]: e.target.value,
		});
	}


	// const handleTokenChange = selected => {
	// 	setToken(selected)
	// }

	// const handleAdTypeChange = selected => {
	// 	setAdType(selected)
	// }

	const addPeerToPeerAd = () => {
		// axios.post(`${API_URL}`)
		setAd({
			...ad,
			username: user.username
		})

		console.log('sup lol')
		// Send a post reequst with the data passed to the input fields here.
	}

	return (
		!user ? <span>Not looged in</span>
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
							DropdownHeading='Token'
							PrimaryText={ad.token}
							options={tokens}
							onSelect={handleChange}
							name='token'
						/>

						<FormInput
							title='Rate'
							name='rate'
							value={ad.rate}
							change={handleTextChange}
						/>

						<FormInput
							title={`Available ${ad.token}`}
							name='availableAmount'
							value={ad.availableAmount}
							change={handleTextChange}
						/>

						<FormInput
							title='Lowest Order Limit'
							name='lowestAmount'
							value={ad.lowestAmount}
							change={handleTextChange}
						/>

						<FormInput
							title='Highest Order Limit'
							name='highestAmount'
							value={ad.highestAmount}
							change={handleTextChange}
						/>

						<MainDropdown
							DropdownHeading='Payment method'
							PrimaryText='Bank transfer'
						/>
					</div>

					<div className={style.AdPreviewWrapper}>
						<span className={style.AdPreviewHeading}>Here's what your ad will look like</span>
						<PeerToPeerAd
							username={user.username}
							adType={ad.adType}
							rate={ad.rate}
							available={ad.availableAmount}
							lowest={ad.lowestAmount}
							highest={ad.highestAmount}
							token={ad.token}
							paymentMethod={ad.paymentMethod}
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