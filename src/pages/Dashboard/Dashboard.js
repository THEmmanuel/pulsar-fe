import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Dashboard.module.css';
import MarketCharts from '../../components/MarketCharts/MarketCharts';
import PeerToPeerHome from '../../containers/PeerToPeerHome/PeerToPeerHome';
import PortfolioHome from '../../containers/PortfolioHome/PortfolioHome';
import DropDown from '../../components/DropDown/DropDown';
import P2PCard from '../../components/P2PCard/P2PCard';
import buyImage from '../../assets/BuyCryptoImage.svg';
import sellImage from '../../assets/SellCryptoImage.svg';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';

import DashboardCard from '../../components/DashboardCard/DashboardCard';
import usdcIcon from '../../assets/usdc-icon.svg';
import buyIcon from '../../assets/buyIcon.svg';
import walletIcon from '../../assets/walletIcon.svg';
import accountIcon from '../../assets/accountIcon.svg';
import p2pIcon from '../../assets/ptopIcon.svg';
import helpIcon from '../../assets/helpIcon.svg';
import { UserContext } from '../../contexts/UserContext';
import addCommas from '../../utils/addCommas';

import ChainSwitcher from '../../components/ChainSwitcher/ChainSwitcher.js';
import ChainSwitcherButton from '../../components/ChainSwitcher/ChainSwitcherButton.js';



const tokens = [
	{ value: 'ETH', label: 'Ethereum' },
	{ value: 'USDT', label: 'USDT' },
	{ value: 'BTC', label: 'Bitcoin' }
]

const fiatCurrencies = [
	{ value: 'NGN', label: 'Nigerian Naira' },
	{ value: 'USD', label: 'US Dollar' },
]

const adTtype = [
	{ value: 'buy', label: 'Buy' },
	{ value: 'sell', label: 'Sell' },
]

const Dashboard = () => {
	const { totalUsdBalance } = useContext(UserContext)
	const [showEthereumChains, setShowEthereumChains] = useState(false)

	return (
		<div className={style.Dashboard}>
			<div className={style.DashboardContent}>
				<div className={style.DashboardBalanceWrapper}>
					<div className={style.DashboardBalance}>
						<div className={style.ChainSwitcherWrapper}>
							<ChainSwitcherButton
								click={() => setShowEthereumChains(true)}
							/>
						</div>

						{showEthereumChains ?
							<ChainSwitcher
								showSwitcher={showEthereumChains}
							/>
							: null}

						<span className={style.DashboardBalanceText}>
							Total wallet balance
						</span>

						<span className={style.DashboardBalanceAmount}>
							${addCommas(totalUsdBalance)}
						</span>
					</div>

					<Link to={`/wallets`}>
						<PrimaryCTA
							ButtonText='View Wallets'
						/>
					</Link>
				</div>

				<div className={style.DashboardCardsWrapper}>
					<Link to={`/p2p/buy`}>
						<DashboardCard
							icon={usdcIcon}
							title='Buy Crypto'
							description='Buy BTC, ETH, USDT, USDC.'
						/>
					</Link>

					<Link to={`/p2p/sell`}>
						<DashboardCard
							icon={buyIcon}
							title='Sell Crypto'
							description='Sell BTC, ETH, USDT, USDC.'
						/>
					</Link>

					<Link to={`/faucet`}>
						<DashboardCard
							icon={buyIcon}
							title='$PUSLR Faucet'
							description='Buy $PUSLR'
						/>
					</Link>

					<Link to={`/wallets`}>
						<DashboardCard
							icon={walletIcon}
							title='Wallets'
							description='View and manage your wallets.'
						/>
					</Link>

					<Link to={`/user-page`}>
						<DashboardCard
							icon={accountIcon}
							title='Account'
							description='View and manage your account.'
						/>
					</Link>

					<Link to={`/my-ads`}>
						<DashboardCard
							icon={p2pIcon}
							title='Peer to Peer'
							description='View and manage your p2p ads'
						/>
					</Link>

					<Link to={`/wallets`}>
						<DashboardCard
							icon={helpIcon}
							title='Help'
							description='Guides, FAQs, resources etc'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Dashboard;

