import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './TransactionPage.module.css';
import { useParams } from 'react-router-dom';
import BankPayment from '../BankPayment/BankPayment';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';

const TransactionPage = () => {
	const API_URL = process.env.REACT_APP_API_URL; // Ensure this environment variable is set correctly
	const [orderInfo, setOrderInfo] = useState(null);
	const [tradeAdInfo, setTradeAdInfo] = useState(null);
	const [loadingOrder, setLoadingOrder] = useState(true);
	const [loadingTradeAd, setLoadingTradeAd] = useState(false);
	const [error, setError] = useState(null);
	const { id } = useParams();
	const [timeLeft, setTimeLeft] = useState(0); // State to hold remaining time in milliseconds
	const [intervalId, setIntervalId] = useState(null); // To clear interval after countdown ends

	useEffect(() => {
		// Fetch order info
		const fetchOrderInfo = async () => {
			try {
				setLoadingOrder(true);
				const response = await axios.get(`${API_URL}/orders/${id}`);
				setOrderInfo(response.data);
			} catch (err) {
				setError(err.message);
				console.error('Error fetching order info:', err);
			} finally {
				setLoadingOrder(false);
			}
		};

		fetchOrderInfo();
	}, [API_URL, id]);

	useEffect(() => {
		// Fetch trade ad info if orderTradeAdID exists
		const fetchTradeAdInfo = async () => {
			if (orderInfo?.orderTradeAdID) {
				try {
					setLoadingTradeAd(true);
					const response = await axios.get(`${API_URL}/p2p/${orderInfo.orderTradeAdID}`);
					setTradeAdInfo(response.data);
				} catch (err) {
					setError(err.message);
					console.error('Error fetching trade ad info:', err);
				} finally {
					setLoadingTradeAd(false);
				}
			}
		};

		fetchTradeAdInfo();
	}, [API_URL, orderInfo]);

	// Function to format time left in hh:mm:ss.ms format
	const formatTime = (timeInMillis) => {
		const hours = Math.floor(timeInMillis / 3600000);
		const minutes = Math.floor((timeInMillis % 3600000) / 60000);
		const seconds = Math.floor((timeInMillis % 60000) / 1000);
		const milliseconds = timeInMillis % 1000;

		return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
	};

	useEffect(() => {
		// Initialize countdown if orderInfo and tradeAdInfo are available
		if (orderInfo && tradeAdInfo) {
			const tradeExpiresAt = new Date(orderInfo.tradeExpiresAt);
			const now = new Date();
			let timeRemaining = tradeExpiresAt - now;

			// Function to update countdown every 100 milliseconds
			const countdown = setInterval(() => {
				timeRemaining = tradeExpiresAt - new Date(); // Update time remaining
				if (timeRemaining <= 0) {
					clearInterval(intervalId); // Stop the countdown once time is up
					setTimeLeft(0); // Set time to 0 when countdown ends
				} else {
					setTimeLeft(timeRemaining); // Update state with remaining time
				}
			}, 100);

			// Save interval ID to clear it later
			setIntervalId(countdown);

			// Cleanup interval on component unmount or when order info changes
			return () => clearInterval(countdown);
		}
	}, [orderInfo, tradeAdInfo]);

	if (error) {
		return <div className={style.error}>Error: {error}</div>;
	}

	const isLoading = loadingOrder || loadingTradeAd;

	return (
		<div className={style.transactionPage}>
			{isLoading ? (
				<div className={style.loading}>Loading...</div>
			) : (
				<>
					{
						orderInfo && (orderInfo.status === 'order_created' || orderInfo.status === 'pending') && tradeAdInfo && (
							<div className={style.OrderTimesWrapper}>
								<div className={style.OrderTime}>
									<span>Order Created: {new Date(orderInfo.timestamp).toLocaleString()}</span>
								</div>
								<div className={style.OrderTime}>
									<span>Trade Expiration Time: {new Date(orderInfo.tradeExpiresAt).toLocaleString()}</span>
								</div>
								<div className={style.OrderTime}>
									<span>Time Left before Trade Timeout:
									</span>

									<span>
										{formatTime(timeLeft)}
									</span>
								</div>

								<BankPayment
									orderInfo={orderInfo}
									tradeAdInfo={tradeAdInfo}
								/>

								<ConfirmationPage
									orderInfo={orderInfo}
									tradeAdInfo={tradeAdInfo}
								/>


								{/* Order details page here and status */}

							</div>
						)
					}

				</>
			)}
		</div>
	);
};

export default TransactionPage;
