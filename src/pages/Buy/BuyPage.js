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
import toast, { toastConfig } from 'react-simple-toasts';

import DialogueBox from '../../components/DialogueBox/DialogueBox';
import Overlay from '../../containers/Overlay/Overlay';

toastConfig({ theme: 'dark' });


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
	const [adInfo, setAdInfo] = useState({});
	const [cryptoAmount, setCryptoAmount] = useState(amount);
	const [orderToken, setOrderToken] = useState('');
	const [orderCreated, setOrderCreated] = useState(false);
	const [orderStatus, setOrderStatus] = useState('')
	const [sellerConfirmedOrder, setSellerConfirmedOrder] = useState(false)
	const [buyerPaid, setBuyerPaid] = useState(false)
	const [timer, setTimer] = useState(1800)
	const [showDialogueBox, setShowDialogueBox] = useState(false)


	const orderData = {
		adType: adInfo.adType, // Example value
		token: adInfo.token, // Example value
		tokenAmount: cryptoAmount, // Example value
		fiatAmount: '2000', // Example value
		buyerUsername: 'buyer123', // Example value
		sellerUsername: 'seller456', // Example value
		buyerAddress: '0xBuyerAddress12345', // Example value
		sellerAddress: '0xSellerAddress67890', // Example value
		timestamp: new Date().toISOString(), // Current timestamp
		tradeExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Expire in 24 hours
		status: 'pending', // Initial status
		orderTradePaymentMethod: 'bank_transfer', // Example value
		orderTradeAdID: 'ad12345' // Example value
	  };



	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
	}

	useEffect(() => {
		getAdInfo()
	}, [])

	const AcceptAction = async () => {
		const requestData = {
			USDAmount: 100,
			tokenToBuy: 'BTC',
			tokenToSell: 'ETH',
			buyerUsername: 'buyer123',
			sellerUsername: 'seller456',
			buyWalletName: 'buyerWallet',
			sellWalletName: 'sellerWallet',
			wallet: '0x123456789abcdef',
			chain: 'Ethereum'
		};

		try {
			const response = await axios.post('http://localhost:3000/exchange-tokens', requestData);
			toast('Tokens exchanged successfully! 🎉'); // Success toast
			console.log('Response:', response.data);
		} catch (error) {
			toast('An error occurred while exchanging tokens. ❌'); // Error toast
			console.error('Error:', error.response?.data || error.message);
		}
	};

	// sendTransaction


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

						calculate prices for the tokens being swapped against the current prices.

						<div className={style.PaymentMethodWrapper}>
							<div className={style.TradeMethodContainer}>
								<TradeMethodCard
									amount={props.amount}
									token={adInfo.token}
									paymentMethodText='Pay with $PULSR (automated and safer) balance: 1200000'
									click={() => setShowDialogueBox(true)}
									limit={adInfo.highestOrder}
									action='Buying'
								/>

								<TradeMethodCard
									amount={props.amount}
									token={adInfo.token}
									paymentMethodText='Pay via Bank Transfer'
									limit={adInfo.highestOrder}
									action='Buying'
									// call create order here.
								/>
							</div>

							{showDialogueBox ?
								<Overlay>
									<DialogueBox
										HeadingText={`You’re about to send ${props.amount} PULSR to p4nther for X ${adInfo.token}.`}

										AdditionalText="Chain: Ethereum Mainnet"

										MoreText="Unaccepted trades will be automatically declined in 5 hrs, please confirm you have the right chain. Funds transferred to the wrong chains can't be recovered"
										AcceptAction={() => AcceptAction()}
										CancelAction={() => setShowDialogueBox(false)}
									/>
									{/* here */}

								</Overlay>
								: null}
						</div>
					</div>

					<div>
						<div className={style.TradeTermsWrapper}>
							<span>Seller's terms</span>
							<span>Our terms</span>
						</div>

						<PrimaryCTA
							ButtonText='Cancel'
						/>
					</div>

					{/* <button onClick={() => toast('Your toast is ready! 🍞')}>Show Toast</button> */}

					{/* call api-url/order/exchange-tokens with body deets */}
				</div>
			</div>
	)
}


export default BuyPage;