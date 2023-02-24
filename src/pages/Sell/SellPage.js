import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './SellPage.module.css';

import UserInformation from '../../components/UserInformation/UserInformation';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';

const API_URL = 'http://localhost:9000';

const SellPage = () => {
	const [adInfo, setAdInfo] = useState('');
	const { id, amount } = useParams();

	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
	}

	useEffect(() => {
		getAdInfo()
	}, [])


	return (
		<div className={style.SellPageWrapper}>
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

			<div className={style.ButtonContainer}>
				<div className={style.ButtonWrapper}>
					<button className={style.ButtomButtonProceed}>Proceed to payment</button>
					<button className={style.ButtomButtonCancel}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default SellPage;