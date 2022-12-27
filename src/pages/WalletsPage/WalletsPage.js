import React, { useEffect, useState } from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA.js';
import axios from 'axios';
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:9000/'

const WalletsPage = () => {
	const [userObject, setUserObject] = useState([])

	const getWalletDetails = () => {
		axios.get(`${API_URL}users`)
			.then(res => setUserObject(res.data.users))
			.catch(err => console.log(err))
		console.log('////get wallet details')
	}

	console.log(userObject)

	useEffect(() => {
		getWalletDetails()
	}, []);

	return (
		<div className={style.WalletsPage}>
			<div className={style.WalletCoinContainer}>
				<div className={style.WalletPortfolioValue}>
					<span>Portfolio balance:</span>
					<span className={style.WalletTotalValue}>$90,876.78</span>
				</div>

				<div className={style.WalletsContainer}>
					<Link to='/wallet'>
						<WalletCoin />
					</Link>

					<WalletCoin />
					<WalletCoin />
					<WalletCoin />
					<WalletCoin />
				</div>
				<PrimaryCTA />
			</div>
		</div>
	);
}

export default WalletsPage;