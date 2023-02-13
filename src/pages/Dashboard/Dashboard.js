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
				<div className={style.DashboardMarketChartsContainer}>
					<MarketCharts />
				</div>

				<div className={style.AdsAndPortfolio}>
					<div className={style.PeerToPeerContainer}>
						<div className={style.PeerToPeerHeadingWrapper}>
							<div className={style.PeerToPeerHeading}>
								<div className={style.AdTypeWrapper}>
									<span className={style.PeerToPeerHeadingText}>
										Trade Cryptocurrencies
									</span>
								</div>

								<span>
									See all P2P ads
								</span>
							</div>
						</div>

						<div className={style.PeerToPeerWrapper}>
							<Link to={`/p2p/buy`}>
								<P2PCard
									headingText='Buy Crypto'
									cardImage={buyImage}
									backgroundColor='#C9EEE4'
								/>
							</Link>

							<Link to={`/p2p/sell`}>
								<P2PCard
									headingText='Sell Crypto'
									cardImage={sellImage}
									backgroundColor='#DCA1A1'
								/>
							</Link>

						</div>
					</div>
					<PortfolioHome />
				</div>
			</div>
		</div>
	)
}

export default Dashboard;