import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './SellPage.module.css';

import UserInformation from '../../components/UserInformation/UserInformation';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import CountdownTimer from '../../components/Timer/Timer';
import TransactionStatus from '../../components/TransactionStatus/TransactionStatus';

const API_URL = 'http://localhost:9000';

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
		paymentConfirmed ? <TransactionStatus/> :
			<div className={style.SellPageWrapper}>
				{
					orderCreated ?
						<div>
							<span>pending buyer's payment</span>
							<CountdownTimer initialTime={1800} />
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

				<div className={style.ButtonContainer}>
					<div className={style.ButtonWrapper}>
						{!orderCreated ? <button
							className={style.ButtomButtonProceed}
							onClick={createOrderHandler}>
							Sell {adInfo.token}
						</button>

							:

							<button
								className={style.ButtomButtonProceed}
								onClick={processOrderHandler}>
								Confirm reciept
							</button>
						}

						<button className={style.ButtomButtonCancel}>Cancel</button>
					</div>
				</div>
			</div>
	)
}

export default SellPage;