import React from 'react';
import style from './CreateAdPage.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import FormInput from '../../components/FormInput/FormInput';

const CreateAdPage = () => {
	return (
		<div>
			<span>Create Ad page</span>

			<div>
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
			<PrimaryCTA />
		</div>
	)
}

export default CreateAdPage;