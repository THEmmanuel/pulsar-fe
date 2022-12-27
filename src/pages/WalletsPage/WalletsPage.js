import React, { useEffect, useState } from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA.js';
import axios from 'axios';
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:9000/'

const WalletsPage = () => {
	const [userWallets, setUserWallets] = useState([])

	console.log(userWallets)

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
					{
						userWallets.map(
							userWallet =>
								<Link to={`/wallet}`}>
									<WalletCoin
										walletName={userWallet.walletName}
									/>
								</Link>
						)
					}

				</div>
				<PrimaryCTA />
			</div>
		</div>
	);
}

export default WalletsPage;