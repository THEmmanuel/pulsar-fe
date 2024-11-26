import React, {useContext} from 'react';
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
							...
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

