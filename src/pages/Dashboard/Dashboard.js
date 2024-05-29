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
						<span>Total wallet balance</span>
						<span>$20,000</span>
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

					<DashboardCard />
					<DashboardCard />
					<DashboardCard />
					<DashboardCard />
					<DashboardCard />
				</div>
			</div>
		</div>
	)
}

export default Dashboard;