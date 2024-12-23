import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useParams } from 'react-router-dom';
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
							/>

							<TradeMethodCard
								amount={props.amount}
								token={adInfo.token}
								paymentMethodText='Pay via Bank Transfer'
								limit={adInfo.highestOrder}
								action='Selling'
							/>
						</div>

						{showDialogueBox ?
							<Overlay>
								<DialogueBox
									HeadingText={`You’re about to send ${props.amount} TNL to p4nther for X ${adInfo.token}.`}

									AdditionalText="Chain: Ethereum Mainnet"

									MoreText="Unaccepted trades will be automatically declined in 5 hrs, please confirm you have the right chain. Funds transferred to the wrong chains can't be recovered"
									AcceptAction={() => toast('Your toast is ready! 🍞')}
									CancelAction={() => setShowDialogueBox(false)}
								/>
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