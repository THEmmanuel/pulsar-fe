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
	const { user } = useUser();

	const [adType, setAdType] = useState('buy');
	const [token, setToken] = useState('USDT');
	const [rate, setRate] = useState();
	const [availableAmount, setAvailableAmount] = useState();
	const [lowestAmount, setLowestAmount] = useState();
	const [highestAmount, setHighestAmount] = useState();
	const [paymentMethod, setPaymentMethod] = useState('Bank Transfer');

	const tokens = [
		{ value: 'ETH', label: 'Ethereum' },
		{ value: 'USDT', label: 'USDT' },
		{ value: 'BTC', label: 'Bitcoin' }
	]

	const handleTokenChange = selected => {
		setToken(selected)
	}

	const handleAdTypeChange = selected => {
		setAdType(selected)
	}

	const addPeerToPeerAd = () => {
		// axios.post()
		// Send a post reequst with the data passed to the input fields here.
	}

	return (
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
						onSelect={handleAdTypeChange}
					/>

					<MainDropdown
						DropdownHeading='Token'
						PrimaryText={token}
						options={tokens}
						onSelect={handleTokenChange}
					/>

					<FormInput
						title='Rate'
						change={e => setRate(e.target.value)}
					/>

					<FormInput
						title={`Available ${token}`}
						change={e => setAvailableAmount(e.target.value)}
					/>

					<FormInput
						title='Lowest Order Limit'
						change={e => setLowestAmount(e.target.value)}
					/>

					<FormInput
						title='Highest Order Limit'
						change={e => setHighestAmount(e.target.value)}
					/>

					<MainDropdown
						DropdownHeading='Payment method'
						PrimaryText='Bank transfer'
					/>
				</div>

				<div className={style.AdPreviewWrapper}>
					<span className={style.AdPreviewHeading}>Here's what your ad will look like</span>
					<PeerToPeerAd
						username = {user.username}
						adType={adType}
						rate={rate}
						available={availableAmount}
						lowest={lowestAmount}
						highest={highestAmount}
						token={token}
						paymentMethod={paymentMethod}
					/>
				</div>

				<div>
					<PrimaryCTA
						ButtonText='Confirm'
					/>
				</div>
			</div>
		</div>
	)
}

export default CreateAdPage;