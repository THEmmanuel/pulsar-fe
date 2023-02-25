import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TransactionIcon from '../../assets/transactionIcon.svg';

import style from './BuyPage.module.css';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformation from '../../components/UserInformation/UserInformation';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import UserAccountDetails from '../../components/UserAccountDetails/UserAccountDetails';
import CountdownTimer from '../../components/Timer/Timer';

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

const BuyPage = (props) => {
	const { id, amount } = useParams();

	const [adInfo, setAdInfo] = useState('');
	const [cryptoAmount, setCryptoAmount] = useState(amount);
	const [orderToken, setOrderToken] = useState('');
	const [orderCreated, setOrderCreated] = useState(false);
	const [orderStatus, setOrderStatus] = useState('')
	const [sellerConfirmedOrder, setSellerConfirmedOrder] = useState(false)
	const [buyerPaid, setBuyerPaid] = useState(false)
	const [timer, setTimer] = useState(1800)

	const createOrderHandler = (adType) => {
		//generate a unique transaction id and time stamp
		setOrderToken(generateOrderToken());
		setOrderCreated(true);
		setOrderStatus('pending')

		// start a timer, end and cancel if the payment isn't made in 30 mins
		// if time === 0, cancle trade and return crypto to sellers wallet

		// make a post request to the backend, create and API route there. Store the new order and it's details...
		// axios.post(order details)

		// escrow the crypto from the user's account...
		// const escrow = (crypto amount) => {
		// Maybe a smart contract interaction here or something... idk
		// }

		// if it's a sell ad, when the buyer has made payment, display a confirm reciept button for the seller
		// display a success page for the buyer if the seller confirms the paymenr.
		// display a success page for the seller if they confirm the reciept

		// maybe allow the user to create a tarnsfer pin before the transaction is completed and the funds in escrow are released to the buyer

		// Mark the order as completed if all goes well
		// If the seller appeals the trade, keep crypto in escrow while dispute is resolved
		// if the seller wins the case, return the crypto back to their account

		// if the buyer appeals the trade, still hold the crypto in escrow
		// if the buyer wins the case, release the crypto to their account and let admin decide to ban or suspend seller from creating ads and make their ads invisible
	}

	const processOrderHandler = () => {
		if (adInfo.adType === 'buy') {
			setBuyerPaid(true)
		}

		if (adInfo.adType === 'sell') {
			setSellerConfirmedOrder(true)
		}
	}

	const confirmOrderHandler = () => {
		setSellerConfirmedOrder(true)
	}

	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
	}

	useEffect(() => {
		getAdInfo()
	}, [])

	return (
		sellerConfirmedOrder ?
			<TransactionStatus />
			:
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
									adType={adInfo.adType}
								/>

								{
									orderCreated ?
										<div className={style.OrderInfo}>
											<span>Your order {orderToken} has been created</span>


											<span>Pay the Seller</span>

											<CountdownTimer
												initialTime={timer}
												onTimerEnd={() => {
													alert('timer elapsed')
												}}
											/>

										</div>
										: null
								}

								{
									buyerPaid ?
										<div className={style.BuyerPaymentWrapper}>
											<img src={TransactionIcon} alt="" className={style.BuyerPaidImage}/>
											<h2>Notified seller</h2>
											<span>The crypto is in escrow and will be released to your wallet as soon as the seller confirms the recipt of your transfer.</span>
											<button onClick={() => setSellerConfirmedOrder(true)}>Confirm order</button>
										</div>
										:
										<div className={style.UserDetailsWrapper}>
											{
												orderCreated ?
													<UserAccountDetails
														adType={adInfo.adType}
													/> : null
											}

											<UserInformationContent
												amount={cryptoAmount}
												token={adInfo.token}
												orderToken={orderToken}
												adType={adInfo.adType}
											/>

											<UserTerms />
										</div>
								}
							</div>
							: <span>Loading</span>
					}
				</div>

				<div className={style.ButtonContainer}>
					<div className={style.ButtonWrapper}>
						{
							orderCreated ?

								<button
									className={style.ButtomButtonProceed}
									onClick={() => {
										processOrderHandler()
									}}>
									Paid, Notify Seller
								</button>
								:
								<button
									className={style.ButtomButtonProceed}
									onClick={() => {
										createOrderHandler()
									}}>
									{
										`Buy ${adInfo.token}`
									}
								</button>
						}
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


export default BuyPage;