import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import WaitIcon from '../../assets/waitIcon.svg';
import style from '../Buy/BuyPage.module.css'

import UserInformation from '../../components/UserInformation/UserInformation';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import CountdownTimer from '../../components/Timer/Timer';
import TransactionStatus from '../../components/TransactionStatus/TransactionStatus';
import TradeMethodCard from '../../components/TradeMethodCard/TradeMethodCard';
import DialogueBox from '../../components/DialogueBox/DialogueBox';
import Overlay from '../../containers/Overlay/Overlay';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import toast, { toastConfig } from 'react-simple-toasts';
toastConfig({ theme: 'dark' });


const API_URL = process.env.REACT_APP_API_URL;



const SellPage = (props) => {
	const { id, amount } = useParams();
	const [orderCreated, setOrderCreated] = useState(false);
	const [paymentConfirmed, setPaymentConfirmed] = useState(false)
	const [showDialogueBox, setShowDialogueBox] = useState(false)
	const [showDialogueBox2, setShowDialogueBox2] = useState(false)
	const { user } = useUser();
	const navigate = useNavigate();
	const tokenUSDPrices = {
		tokenOneName: '',
		tokenTwo: ''
	}


	const [adInfo, setAdInfo] = useState({});
	const [tokenToBuy, setTokenToBuy] = useState({ tokenName: '', tokenPrice: 1 });
	const [tokenToSell, setTokenToSell] = useState({ tokenName: '', tokenPrice: 1 });

	const { walletBalances } = useContext(UserContext);

	const setTokenData = (info) => {
		if (!info.token) return; // Ensure `token` exists before proceeding

		// Find the wallet balance object matching the token name
		const buyToken = walletBalances.find((wallet) => wallet.token === info.token);
		const sellToken = walletBalances.find((wallet) => wallet.token === info.token); // Adjust logic for selling if different

		// Extract the price or default to 1
		const buyTokenPrice = buyToken ? buyToken.tokenPrice : 1;
		const sellTokenPrice = sellToken ? sellToken.tokenPrice : 1;

		// Update the state
		setTokenToBuy({ tokenName: info.token, tokenPrice: buyTokenPrice });
		setTokenToSell({ tokenName: info.token, tokenPrice: sellTokenPrice });
	};

	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
			.catch(err => console.error('Error fetching ad info:', err));
	};

	useEffect(() => {
		getAdInfo();
	}, []); // Runs once on component mount


	const AcceptAction = async () => {
		const requestData = {
			USDAmount: '1', // Example value
			tokenToBuy: adInfo.buyToken,
			tokenToSell: adInfo.sellToken,
			buyerUsername: adInfo.username, // Example value
			sellerUsername: user.username, // Example value
			buyWalletName: 'ethereum',
			sellWalletName: 'ethereum',
			chain: 'erc20' // Set this up to use actual info now
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
			// Close the dialog box
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
				sellerHash: '0xhash'
			};

			// Log orderData for debugging
			console.log('Sending orderData:', orderData);

			// Make Axios POST request
			await axios.post(`${API_URL}/orders`, orderData);

			// Navigate to /bank-payments upon success
			navigate('/transaction-page');
		} catch (error) {
			// Log the error for debugging
			console.error('Error setting up bank trade:', error);
		}
	}




	useEffect(() => {
		// Run only if adInfo has been fetched and is non-empty
		if (Object.keys(adInfo).length > 0) {
			setTokenData(adInfo);
		}
	}, [adInfo, walletBalances]); // Dependencies: `adInfo` and `walletBalances`



	// determine token to buy and sell.
	// looks like its going to have to be in the value specified by the user that they have it for sale.
	// just add identifiers.

	if (walletBalances.length > 0) {
		console.log('token price: ' + walletBalances[0].tokenPrice);
	} else {
		console.log('walletBalances is empty');
	}


	const createOrderHandler = () => {
		setOrderCreated(true)
	}

	const processOrderHandler = () => {
		setPaymentConfirmed(true)
	}

	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPaymentMethod}>
					<span>
						Payment Method
						{/* 
							add useful info here.
						 */}
					</span>

					<div className={style.PaymentMethodWrapper}>
						<div className={style.TradeMethodContainer}>
							<TradeMethodCard
								amount={props.amount}
								token={adInfo.token}
								paymentMethodText='Sell with $PULSR (automated and safer) balance: 1200000'
								click={() => setShowDialogueBox(true)}
								limit={adInfo.highestOrder}
								action='Selling'
								AcceptAction={() => AcceptAction()}
								CancelAction={() => setShowDialogueBox(false)}
							/>

							<TradeMethodCard
								amount={props.amount}
								token={adInfo.token}
								click={() => setShowDialogueBox2(true)}
								paymentMethodText='Pay via Bank Transfer'
								limit={adInfo.highestOrder}
								action='Selling'
								AcceptAction={() => setUpBankTrade()}
								CancelAction={() => setShowDialogueBox2(false)}
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


						{showDialogueBox2 ?
							<Overlay>
								<DialogueBox
									HeadingText={`You’re about to open a trade to [buyyyy or sell] x token for x fiat. Chain: Chain name`}

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

			</div>
		</div>
	)
}

export default SellPage;