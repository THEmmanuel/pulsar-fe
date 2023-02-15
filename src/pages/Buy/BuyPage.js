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
import { generateOrderToken } from '../../utils/generateOrderToken';

// <UserInformation />
// <UserInformationContent />
// <UserAccountDetails />
// <UserTerms />
// <TransactionStatus />

// const uniqueId = () => {
//   const dateString = Date.now().toString(36);
//   const randomness = Math.random().toString(36).substr(2);
//   return dateString + randomness;
// };

// console.log(uniqueId())

//need to update this based on if the ad is a buy or sell ad

const API_URL = 'http://localhost:9000';
// Set up logic based on adType, buy or sell

const OrderPage = (props) => {
	const { id, amount } = useParams()

	const [adInfo, setAdInfo] = useState('')
	const [cryptoAmount, setCryptoAmount] = useState(amount)
	const [orderToken, setOrderToken] = useState('');
	const [orderStatus, setOrderStatus] = useState('')

	const createOrderHandler = () => {
		//generate a unique transaction id and time stamp
		// generateOrderToken()
		// make a apost request to the backend, create and API route there. Store the new order and it's details...
		setOrderToken(generateOrderToken())
	}

	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
	}

	useEffect(() => {
		getAdInfo()
	}, [])

	// console.log(peerToPeerID.id)

	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				{
					adInfo ?
						<div className={style.BuyPageContent}>
							<UserInformation
								username={adInfo.username}
								lowestOrder={adInfo.lowestOrder}
								highestOrder={adInfo.highestOrder}
								available={adInfo.available}
								paymentMethod={adInfo.paymentMethod}
							/>
							<UserInformationContent
								amount={cryptoAmount}
								token={adInfo.token}
								orderToken={orderToken}
							/>
							<UserTerms />
						</div>
						: <span>Loading</span>
				}
			</div>

			<div className={style.ButtonContainer}>
				<div className={style.ButtonWrapper}>
					<button
						className={style.ButtomButtonProceed}
						onClick={() => {
							createOrderHandler()
						}}>

						Buy {adInfo.token}
					</button>
					<button className={style.ButtomButtonCancel}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

// const BuyPageContent = () => {
// 	const [activePage, setActivePage] = useState('buy');




// 	const buyCoinHandler = () => {
// 		createOrderHandler()
// 		setActivePage('confirm');
// 	}
// 	const confirmTransactionHandler = () => setActivePage('status')

// 	if (activePage === 'buy') {
// 		return <BuyPage
// 			orderToken={orderToken}
// 			proceed={buyCoinHandler} />
// 	}

// 	// if (activePage === 'confirm') {
// 	// 	return <BuyPageConfirm
// 	// 		orderToken={orderToken}
// 	// 		proceed={confirmTransactionHandler}
// 	// 	/>
// 	// }

// 	// if (activePage === 'status') {
// 	// 	return <BuyPageStatus />
// 	// }
// };


export default OrderPage;