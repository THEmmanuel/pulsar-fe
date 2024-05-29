import React from 'react';
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
	return (
		<div className={style.Dashboard}>
			<div className={style.DashboardContent}>
				<div className={style.DashboardBalanceWrapper}>
					<div className={style.DashboardBalance}>
						<span className={style.DashboardBalanceText}>
							Total wallet balance
						</span>

						<span className={style.DashboardBalanceAmount}>
							$20,000
						</span>
					</div>

					<PrimaryCTA
						ButtonText='View Wallets'
					/>
				</div>

				<div className={style.DashboardCardsWrapper}>
					<DashboardCard
						icon={usdcIcon}
						title='Buy Crypto'
						description='Buy BTC, ETH, USDT, USDC.'
					/>

					<DashboardCard
						icon={buyIcon}
						title='Sell Crypto'
						description='Sell BTC, ETH, USDT, USDC.'
					/>

					<DashboardCard
						icon={walletIcon}
						title='Wallets'
						description='View and manage your wallets.'
					/>

					<DashboardCard
						icon={accountIcon}
						title='Account'
						description='View and manage your account.'
					/>

					<DashboardCard
						icon={p2pIcon}
						title='Peer to Peer'
						description='View and manage your p2p ads'
					/>

					<DashboardCard
						icon={helpIcon}
						title='Help'
						description='Guides, FAQs, resources etc'
					/>
				</div>
			</div>
		</div>
	)
}

export default Dashboard;