import React, { useState } from 'react';
import style from './TokenFaucet.module.css'
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import { PaystackButton } from 'react-paystack'


const TokenFaucet = () => {
	const publicKey = "pk_test_6dbc146a6553071ae3e3adacd412351e580fdd4f"
	const amount = 1000000
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');


	const componentProps = {
		email,
		amount,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: "Pay Now",
		onSuccess: () =>
			alert("Thanks for doing business with us! Come back soon!!"),
		onClose: () => alert("Wait! Don't leave :("),
	}



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
				ButtonText='Buy Token'
			/>

			<PaystackButton {...componentProps} />



		</div>
	)
}

export default TokenFaucet