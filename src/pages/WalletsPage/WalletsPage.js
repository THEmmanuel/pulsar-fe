import React, { useEffect, useState } from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom'
import WalletCard from '../../components/WalletCard/WalletCard.js';


const API_URL = 'http://localhost:9000/'

const WalletsPage = () => {
	const { wallets } = useContext(UserContext)
	console.log(wallets)

	return (
		<div className={style.WalletsPage}>
			<div>
				all wallets, kjdkdd ,d,d,
			</div>

			<div className={style.WalletCoinContainer}>
				<div className={style.WalletsPageBalance}>
					<span>Total Wallet Value</span>
					<span>$25,897.768</span>
				</div>

				<div className={style.WalletsContainer}>
					<div>
						<div className={style.WalletsPageBalance}>
							<span>token</span>
							<span>chain</span>
						</div>

						<div>
							<WalletCard />
						</div>
					</div>


					<div>
						<div className={style.WalletsPageBalance}>
							<span>token</span>
							<span>chain</span>
						</div>

						<div>
							<WalletCard />
							<WalletCard />
							<WalletCard />
						</div>
					</div>

					{/* {
						wallets.map(
							wallet => 
								<Link key={wallet._id} to={`/wallet/${wallet.walletName}`}>
									<WalletCoin
										walletImage = {wallet.walletName}
										walletName={wallet.walletName}
									/>
								</Link>
						)
					} */}

				</div>
				{/* <PrimaryCTA /> */}
			</div>
		</div>
	);
}

export default WalletsPage;