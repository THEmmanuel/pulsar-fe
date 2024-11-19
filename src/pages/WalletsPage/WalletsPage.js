import React, { useEffect, useState } from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom'
import WalletCard from '../../components/WalletCard/WalletCard.js';
import WalletSwitcher from '../../components/WalletSwitcher/WalletSwitcher.js';
import ChainSwitcher from '../../components/ChainSwitcher/ChainSwitcher.js';
import usdcIcon from '../../assets/usdc-icon.svg'


const API_URL = process.env.REACT_APP_API_URL;


const WalletsPage = () => {
	const { wallets } = useContext(UserContext)
	console.log(wallets)

	return (
		<div className={style.WalletsPage}>
			<div className={style.WalletCoinContainer}>
				<WalletSwitcher />
				{/* <div className={style.WalletsPageBalance}>
					<span className={style.WalletsPageBalanceTitle}>
						Total Wallet Value
					</span>

					<span className={style.WalletsPageBalanceAmount}>
						$25,897.768
					</span>
				</div> */}

				<div className={style.WalletsContainer}>

					<div className={style.WalletCardWrapper}>
						<div className={style.WalletsPageBalance}>
							<span className={style.WalletsPageChainType}>Bitcoin</span>
							<ChainSwitcher />
						</div>

						<Link to='/wallet/tnl'>
							<WalletCard
								CoinName='Bitcoin - $BTC'
								CoinText='View your TNL on the Ethereum chain'
								CoinBalance=''
								WalletIcon={usdcIcon}
							/>
						</Link>
					</div>


					<div className={style.WalletCardWrapper}>
						<div className={style.WalletsPageBalance}>
							<span className={style.WalletsPageChainType}>Ethereum</span>
							<ChainSwitcher />
						</div>

						<div className={style.WalletsCardContainer}>
							<Link to='/wallet/tnl'>
								<WalletCard
									CoinName='Tunnel Token - $TNL'
									CoinText='View your TNL on the Ethereum chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link>


							<Link to='/wallet/ethereum'>
								<WalletCard
									CoinName='Ether - ETH'
									CoinText='View your ETH on the Ethereum chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link>

							{/* <Link to='/wallet/bitcoin'>
								<WalletCard
									CoinName='Bitcoin - $BTC'
									CoinText='View your BTC on the  BEP 32 chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link> */}
							{/* <Link>
								<WalletCard />
							</Link>

							<Link>
								<WalletCard />
							</Link> */}
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