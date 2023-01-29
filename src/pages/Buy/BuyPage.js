import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import style from './BuyPage.module.css';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformation from '../../components/UserInformation/UserInformation';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import UserAccountDetails from '../../components/UserAccountDetails/UserAccountDetails';
import TransactionStatus from '../../components/TransactionStatus/TransactionStatus';
import TransactionCTAButtons from '../../components/TransactionCTAButtons/TransactionCTAButtons';

// <UserInformation />
// <UserInformationContent />
// <UserAccountDetails />
// <UserTerms />
// <TransactionStatus />

const API_URL = 'http://localhost:9000';

const BuyPage = props => {
	const peerToPeerID = useParams()
	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${peerToPeerID.id}`)
			.then(res => console.log(res.data))
	}

	useEffect(() => {
		getAdInfo()
	}, [])

	// console.log(peerToPeerID.id)

	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPageContent}>
					<UserInformation />
					<UserInformationContent />
					<UserTerms />
				</div>
			</div>

			<div className={style.ButtonContainer}>
				<div className={style.ButtonWrapper}>
					<button
						className={style.ButtomButtonProceed}
						onClick={() => props.proceed()}>
						Buy USDT
					</button>
					<button className={style.ButtomButtonCancel}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

const BuyPageConfirm = props => {
	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPageContent}>
					<UserInformation />
					<UserInformationContent />
					<UserAccountDetails />
					<UserTerms />
				</div>
			</div>

			<div className={style.ButtonContainer}>
				<div className={style.ButtonWrapper}>
					<button
						className={style.ButtomButtonProceed}
						onClick={() => props.proceed()}>
						Buy USDT
					</button>
					<button className={style.ButtomButtonCancel}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

const BuyPageStatus = props => {
	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPageContent}>
					<TransactionStatus />
				</div>
			</div>
		</div>
	)
}

const BuyPageContent = () => {
	const [activePage, setActivePage] = useState('buy')
	const buyCoinHandler = () => setActivePage('confirm');
	const confirmTransactionHandler = () => setActivePage('status')

	if (activePage === 'buy') {
		return <BuyPage proceed={buyCoinHandler} />
	}

	if (activePage === 'confirm') {
		return <BuyPageConfirm proceed={confirmTransactionHandler} />
	}

	if (activePage === 'status') {
		return <BuyPageStatus />
	}
};


export default BuyPageContent;