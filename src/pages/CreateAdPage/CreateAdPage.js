import React from 'react';
import style from './CreateAdPage.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import FormInput from '../../components/FormInput/FormInput';

const CreateAdPage = () => {
	return (
		<div>
			<span>Create Ad page</span>
			<div className={style.FormInputContainer}>
				<div className={style.FormInputWrapper}>
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
				<PrimaryCTA 
					ButtonText = 'Preview'
				/>
			</div>
		</div>
	)
}

export default CreateAdPage;