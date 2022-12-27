import React, { useEffect, useState } from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:9000/'

const WalletsPage = () => {
	const { wallets } = useContext(UserContext)
	console.log(wallets)

	return (
		<div className={style.WalletsPage}>
			<div className={style.WalletCoinContainer}>
				<div className={style.WalletPortfolioValue}>
					<span>Portfolio balance:</span>
					<span className={style.WalletTotalValue}>$90,876.78</span>
				</div>

				<div className={style.WalletsContainer}>
					{
						wallets.map(
							wallet =>
								<Link key={wallet._id} to={`/wallet/${wallet.walletName}`}>
									<WalletCoin
										walletName={wallet.walletName}
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