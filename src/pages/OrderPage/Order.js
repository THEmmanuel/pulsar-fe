import React, { useEffect, useState } from 'react';
import style from './Order.module.css';
import BuyPage from '../Buy/BuyPage';
import SellPage from '../Sell/SellPage';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:9000';
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
				Order page
				<span>{id}</span>
				<span>{adInfo.adType}</span>
				{CurrentOrderPage}
			</div>
			:
			<span>Loading</span>
	)
}

export default Order;