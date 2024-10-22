import React, { useEffect, useState } from 'react';
import style from './Order.module.css';
import BuyPage from '../Buy/BuyPage';
import SellPage from '../Sell/SellPage';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import starIcon from '../../assets/star.svg'
import BankPayment from '../BankPayment/BankPayment';


const API_URL = process.env.REACT_APP_API_URL;

const Order = (props) => {
	const [adInfo, setAdInfo] = useState(null)
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
		CurrentOrderPage = <BuyPage />
	}
	if (adInfo && adInfo.adType === 'sell') {
		CurrentOrderPage = <SellPage />
	}

	return (
		adInfo ?
			<div>
				<div className={style.TraderInfoWrapper}>
					<div className={style.TraderInfo}>
						<img
							src=""
							alt=""
							className={style.TraderInfoImage}
						/>

						<div className={style.TraderInfoDetails}>
							<div className={style.TraderName}>
								<span>p4nther</span>
								<div>
								<span>5</span>

								<img
									src={starIcon}
									alt=""
								/>
								</div>
							</div>

							<span>Limit: 100 - 300k</span>
						</div>
					</div>

					<PrimaryCTA
						ButtonText='Message'
					/>
				</div>


				{/* Order page
				<span>{id}</span>
				<span>{adInfo.adType}</span> */}


				{/* {CurrentOrderPage} */}
				{/* <BankPayment/> */}

			</div>
			:
			<span>Loading</span>
	)
}

export default Order;