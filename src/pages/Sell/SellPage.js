import React, { useState, useEffect } from 'react';
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
	const [adInfo, setAdInfo] = useState('');
	const { id, amount } = useParams();
	const [orderCreated, setOrderCreated] = useState(false);
	const [paymentConfirmed, setPaymentConfirmed] = useState(false)
	const [showDialogueBox, setShowDialogueBox] = useState(false)

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
								token={adInfo.token}
								paymentMethodText='Sell with $PULSR (automated and safer) balance: 1200000'
								click={() => setShowDialogueBox(true)}
								limit={adInfo.highestOrder}
							/>

							<TradeMethodCard
								amount={props.amount}
								token={adInfo.token}
								paymentMethodText='Pay via Bank Transfer'
								limit={adInfo.highestOrder}
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