import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import WaitIcon from '../../assets/waitIcon.svg';
import style from './SellPage.module.css';

import UserInformation from '../../components/UserInformation/UserInformation';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import CountdownTimer from '../../components/Timer/Timer';
import TransactionStatus from '../../components/TransactionStatus/TransactionStatus';
import TradeMethodCard from '../../components/TradeMethodCard/TradeMethodCard';
import DialogueBox from '../../components/DialogueBox/DialogueBox';
import Overlay from '../../containers/Overlay/Overlay';



const API_URL = process.env.REACT_APP_API_URL;

const SellPage = (props) => {
	const [adInfo, setAdInfo] = useState('');
	const { id, amount } = useParams();
	const [orderCreated, setOrderCreated] = useState(false);
	const [paymentConfirmed, setPaymentConfirmed] = useState(false)

	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
	}

	useEffect(() => {
		getAdInfo()
	}, [])

	const createOrderHandler = () => {
		setOrderCreated(true)
	}

	const processOrderHandler = () => {
		setPaymentConfirmed(true)
	}

	return (
		<div>
			might need to add a wallets system

			<TradeMethodCard
				amount={props.amount}
				token={adInfo.token}
				paymentMethodText='Pay with $PULSR (automated and safer) balance: 1200000'
				click={() => setShowDialogueBox(true)}
				limit={adInfo.highestOrder}
			/>

			<TradeMethodCard
				amount={props.amount}
				token={adInfo.token}
				paymentMethodText='Pay with $PULSR (automated and safer) balance: 1200000'
				click={() => setShowDialogueBox(true)}
				limit={adInfo.highestOrder}
			/>

			<TradeMethodCard
				amount={props.amount}
				token={adInfo.token}
				paymentMethodText='Pay with $PULSR (automated and safer) balance: 1200000'
				click={() => setShowDialogueBox(true)}
				limit={adInfo.highestOrder}
			/>
		</div>
	)
}

export default SellPage;