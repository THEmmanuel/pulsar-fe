import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TransactionIcon from '../../assets/transactionIcon.svg';
import { useUser } from '@clerk/clerk-react';

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
import { UserContext } from '../../contexts/UserContext';

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
	const [cryptoAmount, setCryptoAmount] = useState(0);
	const [usdAmount, setUsdAmount] = useState(amount)
	const [orderToken, setOrderToken] = useState('');
	const [orderCreated, setOrderCreated] = useState(false);
	const [orderStatus, setOrderStatus] = useState('')
	const [sellerConfirmedOrder, setSellerConfirmedOrder] = useState(false)
	const [buyerPaid, setBuyerPaid] = useState(false)
	const [timer, setTimer] = useState(1800)
	const [showDialogueBox, setShowDialogueBox] = useState(false)
	const [showDialogueBox2, setShowDialogueBox2] = useState(false)
	const { user } = useUser();
	const navigate = useNavigate();
	const { coinData, setCoinData, selectedChain } = useContext(UserContext);




	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
	}

	const coinGeckoAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Csolana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'

	// useEffect(() => {
	// 	console.log('fectching coin prices from coingecko')
	// 	axios.get(coinGeckoAPI)
	// 		.then(res => setCoinData(res.data))
	// 		.catch(err => console.log(err))
	// }, [])

	useEffect(() => {
		getAdInfo()
	}, [])

	const AcceptAction = async () => {
		const requestData = {
			USDAmount: props.amount, // Example value
			tokenToBuy: adInfo.buyToken,
			tokenToSell: adInfo.sellToken,
			buyerUsername: user.username,
			sellerUsername: adInfo.username,
			buyWalletName: 'ethereum',
			sellWalletName: 'ethereum',
			chain: selectedChain
		};

		try {
			setShowDialogueBox(false);
			// Toast indicating the process has started
			toast('Exchanging tokens... 🔄');


			// Send the POST request
			const response = await axios.post('http://localhost:9000/orders/exchange-tokens', requestData);

			// Log request data for debugging
			console.log('Request Data:', requestData);

			// Toast for success
			toast('Tokens exchanged successfully! 🎉');

			// Log response data for debugging
			console.log('Response:', response.data);

		} catch (error) {
			// Toast for error
			toast('An error occurred while exchanging tokens. ❌');

			// Log the error for debugging
			console.error('Error:', error.response?.data || error.message);
		} finally {
			// Close the dialogue box
		}
	};



	const setUpBankTrade = async () => {
		try {
			const orderData = {
				adType: adInfo.adType,
				tokenToBuy: adInfo.buyToken,
				tokenToSell: adInfo.sellToken,
				fiatAmount: props.amount,
				buyerUsername: 'leunamme222',
				sellerUsername: user.username,
				buyerAddress: '0xbuyeraddress',
				sellerAddress: '0xSellerAddress',
				timestamp: new Date().toISOString(),
				tradeExpiresAt: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
				status: 'order_created',
				orderPaymentMethod: 'Bank Transfer',
				orderTradeAdID: adInfo._id,
				buyerHash: '0xhash',
				sellerHash: '0xhash',
			};

			// Log orderData for debugging
			console.log('Sending orderData:', orderData);

			// Make Axios POST request and extract response
			const response = await axios.post(`${API_URL}/orders`, orderData);

			// Extract the returned _id from the response
			const orderId = response.data._id;

			// Log the received order ID for debugging
			console.log('Order created with ID:', orderId);

			// Display a success toast notification
			toast('Order created successfully');

			// Navigate to the transaction page with the order ID
			navigate(`/transaction-page/${orderId}`);
		} catch (error) {
			// Log the error for debugging
			console.error('Error setting up bank trade:', error);
			toast.error('Failed to create order. Please try again.');
		}
	};




	// localhost/orders

	// this function does the following.
	// it makes a request to open a new trade with the details here. show a toast to say opening a new trade initially.
	// - to-do



	// it then navigates the user to the bank details page.
	// order shows page based on order status.
	// 		pending,
	// 		bank-payment
	// 		sellerMarkPaid, 
	// 		BuyerMarkPaid, 
	// 		BuyerMarkRecieved, 
	// 		SellerMarkRecieved,
	// 		successful
	// 		timedout
	// 		failed

	// can then set up conditions based on this.

	// orderpage updates the info as stuff progresses.

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

						<div className={style.PaymentMethodWrapper}>
							<div className={style.TradeMethodContainer}>
								<TradeMethodCard
									amount={props.amount}
									token={adInfo.buyToken}
									paymentMethodText='Pay with $PULSR (automated and safer) balance: 1200000'
									click={() => setShowDialogueBox(true)}
									limit={adInfo.highestOrder}
									action='Buying'
									AcceptAction={() => AcceptAction()}
									// AcceptAction={() => console.log(coinData)}
									CancelAction={() => setShowDialogueBox(false)}
								/>

								<TradeMethodCard
									amount={props.amount}
									token={adInfo.token}
									paymentMethodText='Pay via Bank Transfer'
									click={() => setShowDialogueBox2(true)}
									limit={adInfo.highestOrder}
									action='Buying'
									AcceptAction={() => setUpBankTrade()}
									// show toast that just says work in progress here.
									CancelAction={() => setShowDialogueBox2(false)}
								/>
							</div>

							{showDialogueBox ?
								<Overlay>
									<DialogueBox
										HeadingText={`You’re about to send $${props.amount} in ${props.amount / 100} $PULSR to ${adInfo.username} for ${props.amount / coinData.ethereum.usd} ${adInfo.buyToken}.`}

										AdditionalText={`Chain: ${selectedChain}`}

										MoreText="Unaccepted trades will be automatically declined in 2 hrs, please confirm you have the right chain. Funds transferred to the wrong chains can't be recovered"
										AcceptAction={() => AcceptAction()}
										// AcceptAction={() => console.log(coinData)}
										CancelAction={() => setShowDialogueBox(false)}
									/>
								</Overlay>
								: null}


							{showDialogueBox2 ?
								<Overlay>
									<DialogueBox
										HeadingText={`You’re about to open a trade to buy ${props.amount / coinData.ethereum.usd} ${adInfo.buyToken} for $${props.amount}. Chain: Chain name`}

										AdditionalText="Payment Method: Bank Transfer"

										MoreText="Please open a dispute if there are any issues."
										AcceptAction={() => setUpBankTrade()}
										CancelAction={() => setShowDialogueBox2(false)}
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