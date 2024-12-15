import React, { useEffect, useState } from 'react';
import style from './Order.module.css';
import BuyPage from '../Buy/BuyPage';
import SellPage from '../Sell/SellPage';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import starIcon from '../../assets/star.svg'
import BankPayment from '../BankPayment/BankPayment';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import DialogueBox from '../../components/DialogueBox/DialogueBox';
import Overlay from '../../containers/Overlay/Overlay';
import toast, { toastConfig } from 'react-simple-toasts';
import ChainSwitcher from '../../components/ChainSwitcher/ChainSwitcher';
import Loader from '../../components/Spinner/Spinner';


toastConfig({ theme: 'dark' });


const API_URL = process.env.REACT_APP_API_URL;

const Order = (props) => {
	const [adInfo, setAdInfo] = useState({});
	const [amount, setAmount] = useState(0);

	const { id } = useParams();

	const getAdInfo = () => {
		axios.get(`${API_URL}/p2p/${id}`)
			.then(res => setAdInfo(res.data))
	}

	useEffect(() => {
		getAdInfo()
	}, [])

	let CurrentOrderPage;

	if (adInfo && adInfo.adType === 'buy') {
		CurrentOrderPage = <BuyPage
			amount={amount}
		/>
	}
	if (adInfo && adInfo.adType === 'sell') {
		CurrentOrderPage = <SellPage />
	}


	// logic state to activate the confirmation when the bank payment is confirmed.

	// removes input and chain switcher.

	return (
		adInfo ?
			<div className={style.OrderPage}>
				<div className={style.OrderInfo}>
					<div className={style.TraderInfoWrapper}>
						<div className={style.TraderInfo}>
							<img
								src=""
								alt=""
								className={style.TraderInfoImage}
							/>

							<div className={style.TraderInfoDetails}>
								<div className={style.TraderName}>
									<span>{adInfo.username}</span>
									<div>
										<span>5</span>

										<img
											src={starIcon}
											alt=""
											className={style.StarIcon}
										/>
									</div>
								</div>

								<span>{`Limit: ${adInfo.lowestOrder} - ${adInfo.highestOrder}`}</span>
							</div>
						</div>

						<PrimaryCTA
							ButtonText='Message'
						/>
					</div>

					<div className={style.OrderInput}>
						<input
							type="text"
							title="Amount"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className={style.AmountInput}
							placeholder="Enter amount"
						/>

						{/* <ChainSwitcher/> */}


						{/* <Overlay>
							<DialogueBox
								HeadingText="jdhfjdshjdsf"
								AdditionalText="jdhfjdshjdsf"
								MoreText="jdhfjdshjdsf"
							/>
						</Overlay> */}

					</div>

					{/* <button onClick={() => toast('Your toast is ready! 🍞')}>Show Chains</button> */}



				</div>


				{/* Order page
				<span>{id}</span>
				<span>{adInfo.adType}</span> */}


				{CurrentOrderPage}

				{/* <BankPayment/> */}

				{/* <ConfirmationPage/> */}

			</div>
			:
			<span>Loading</span>
	)
}

export default Order;