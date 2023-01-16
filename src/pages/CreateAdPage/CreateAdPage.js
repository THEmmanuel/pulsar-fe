import React, { useState } from 'react';
import style from './CreateAdPage.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import FormInput from '../../components/FormInput/FormInput';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import MainDropdown from '../../components/MainDropdown/MainDropdown';

const CreateAdPage = () => {
	const [adType, setAdType] = useState('buy');
	const [token, setToken] = useState('USDT');
	const [rate, setRate] = useState();
	const [availableAmount, setAvailableAmount] = useState();
	const [lowestAmount, setLowestAmount] = useState();
	const [highestAmount, setHighestAmount] = useState();
	const [paymentMethod, setPaymentMethod] = useState();

	return (
		<div>
			<span>Create Ad page</span>
			<div className={style.FormInputContainer}>
				<div className={style.FormInputWrapper}>
					<MainDropdown
						DropdownHeading='Ad Type'
						PrimaryText='Buy'
					/>

					<MainDropdown
						DropdownHeading='Token'
						PrimaryText='USDT'
					/>

					<FormInput
						title='Rate'
						change = {e => setRate(e.target.value)}
					/>

					<FormInput
						title='Available USDT'
					/>

					<FormInput
						title='Lowest Order Limit'
					/>

					<FormInput
						title='Highest Order Limit'
					/>

					<MainDropdown
						DropdownHeading='Payment method'
						PrimaryText='Bank transfer'
					/>
				</div>

				<div className={style.AdPreviewWrapper}>
					<span className={style.AdPreviewHeading}>Here's what your ad will look like</span>
					<PeerToPeerAd
						adType = {adType}
						rate = {rate}
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