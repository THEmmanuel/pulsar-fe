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

import TradeMethodCard from '../../components/TradeMethodCard/TradeMethodCard';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';

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

const API_URL = process.env.REACT_APP_API_URL;
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
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	const processOrderHandler = () => {
		scrollToTop()
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
			<TransactionStatus
				amount={cryptoAmount}
				token={adInfo.token}
			/>
			:
			<div className={style.BuyPageWrapper}>
				<div className={style.BuyPageContainer}>
					<div className={style.BuyPaymentMethod}>
						<span>
							Payment Method
						</span>

						<div className={style.PaymentMethodWrapper}>
							<div className={style.TradeMethodContainer}>
								<TradeMethodCard
									amount={props.amount}
									paymentMethodText='Pay with $TNL (automated and safer) balance: 1200000'
								/>

								<TradeMethodCard
									amount={props.amount}
									paymentMethodText='Pay via Card (automated)'
								/>

								<TradeMethodCard
									amount={props.amount}
									paymentMethodText='Pay via Bank Transfer'
								/>
							</div>
						</div>
					</div>

					<div className={style.TradeTermsWrapper}>
						<span>Seller's terms</span>
						<span>Our terms</span>
					</div>

					<PrimaryCTA
						ButtonText='Cancel'
					/>
				</div>
			</div>
	)
}


export default BuyPage;