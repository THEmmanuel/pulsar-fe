import React, { useState } from 'react';
import style from './TokenFaucet.module.css'
import FormInput from '../../components/FormInput/FormInput';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import { PaystackButton } from 'react-paystack'


const TokenFaucet = () => {
	const publicKey = "pk_test_6dbc146a6553071ae3e3adacd412351e580fdd4f"
	const amount = 1000000
	const [email, setEmail] = useState("test@test.com")
	const [name, setName] = useState("Emmanuel")
	const [phone, setPhone] = useState("11111111")


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