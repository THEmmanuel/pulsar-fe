import React, { useEffect, useState } from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { Link, useSubmit } from 'react-router-dom'
import WalletCard from '../../components/WalletCard/WalletCard.js';
import WalletSwitcher from '../../components/WalletSwitcher/WalletSwitcher.js';
import ChainSwitcher from '../../components/ChainSwitcher/ChainSwitcher.js';
import ChainSwitcherButton from '../../components/ChainSwitcher/ChainSwitcherButton.js';
import usdcIcon from '../../assets/usdc-icon.svg'


const API_URL = process.env.REACT_APP_API_URL;


const WalletsPage = () => {
	const { wallets } = useContext(UserContext)
	const [showEthereumChains, setShowEthereumChains] = useState(false)

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
							{/* <ChainSwitcher /> */}
						</div>


						<div className={style.WalletsCardContainer}>
							<Link to='/wallet/tnl'>
								<WalletCard
									CoinName='Bitcoin - $BTC'
									CoinText='View your TNL on the Ethereum chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link>
						</div>
					</div>


					<div className={style.WalletCardWrapper}>
						<div className={style.WalletsPageBalance}>
							<span className={style.WalletsPageChainType}>Ethereum</span>

							<ChainSwitcherButton
								click={() => setShowEthereumChains(true)}
							/>

							{showEthereumChains ? <ChainSwitcher /> : null}
						</div>

						<div className={style.WalletsCardContainer}>
							<Link to='/wallet/tnl'>
								<WalletCard
									CoinName='Pulsar Token - $PULSR'
									CoinText='View your TNL on the Ethereum chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link>


							<Link to='/wallet/ethereum'>
								<WalletCard
									CoinName='Ether - $ETH'
									CoinText='View your ETH on the Ethereum chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link>

							<Link to='/wallet/ethereum'>
								<WalletCard
									CoinName='USD Coin - $USDC'
									CoinText='View your ETH on the Ethereum chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link>

							<Link to='/wallet/bnb'>
								<WalletCard
									CoinName='Binance Coin - $BNB'
									CoinText='View your BNB on the Ethereum chain'
									CoinBalance=''
									WalletIcon={usdcIcon}
								/>
							</Link>
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