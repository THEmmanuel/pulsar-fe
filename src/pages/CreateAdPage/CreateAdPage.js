import React from 'react';
import style from './CreateAdPage.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import FormInput from '../../components/FormInput/FormInput';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import MainDropdown from '../../components/MainDropdown/MainDropdown';

const CreateAdPage = () => {
	return (
		<div>
			<span>Create Ad page</span>
			<div className={style.FormInputContainer}>
				<div className={style.FormInputWrapper}>
					<MainDropdown
						DropdownHeading='Ad Type'
						PrimaryText = 'Buy'
					/>

					<FormInput
						title='Rate'
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
				</div>

				<div className={style.AdPreviewWrapper}>
					<span className={style.AdPreviewHeading}>Here's what your ad will look like</span>
					<PeerToPeerAd />
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