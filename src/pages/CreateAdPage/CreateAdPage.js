import React, { useState, useEffect } from 'react';
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
		available: 0,
		lowestOrder: 0,
		highestOrder: 0,
		paymentMethod: 'Bank Transfer'
	})

	useEffect(() => {
		if (user) {
			setAd({
				...ad,
				username: user.username
			})
		}
	}, user)

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

	const addPeerToPeerAd = () => {
		axios.post(`${API_URL}/p2p`, ad)
			.then(res => console.log(res))
			.catch(err => console.log(err))
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
							name='available'
							value={ad.available}
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

						<MainDropdown
							DropdownHeading='Payment method'
							PrimaryText='Bank transfer'
						/>
					</div>

					<div className={style.AdPreviewWrapper}>
						<span className={style.AdPreviewHeading}>Here's what your ad will look like</span>
						<PeerToPeerAd
							adType={ad.adType}
							token={ad.token}
							username={user.username}
							rate={ad.rate}
							available={ad.available}
							lowest={ad.lowestOrder}
							highest={ad.highestOrder}
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