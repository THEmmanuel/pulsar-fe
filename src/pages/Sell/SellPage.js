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

const API_URL = process.env.REACT_APP_API_URL;

const SellPage = () => {
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
		paymentConfirmed ? <TransactionStatus /> :
			<div className={style.SellPageWrapper}>
				{
					orderCreated ?
						<div>
							<span>pending buyer's payment</span>
							<CountdownTimer initialTime={1800} />
							<img src={WaitIcon} alt="" />
						</div>
						:
						<div className={style.SellPageContainer}>
							<UserInformation
								username={adInfo.username}
								lowestOrder={adInfo.lowestOrder}
								highestOrder={adInfo.highestOrder}
								available={adInfo.available}
								paymentMethod={adInfo.paymentMethod}
								adType={adInfo.adType}
							/>
							<UserInformationContent />
							<UserTerms />
						</div>
				}
			</div>
	)
}

export default SellPage;