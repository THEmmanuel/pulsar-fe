import React from 'react';
import style from './TokenFaucet.module.css'
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';


const TokenFaucet = () => {
	return (
		<div>
			Token Faucet
			<FormInput
				title='Amount'
			/>

			<FormInput
				title='Wallet Address'
			/>

			<PrimaryCTA
				ButtonText = 'Buy Token'
			/>

			

		</div>
	)
}

export default TokenFaucet