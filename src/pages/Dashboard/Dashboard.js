import React from 'react';
import style from './Dashboard.module.css';
import MarketCharts from '../../components/MarketCharts/MarketCharts';
import PeerToPeerHome from '../../containers/PeerToPeerHome/PeerToPeerHome';
import PortfolioHome from '../../containers/PortfolioHome/PortfolioHome';
import DropDown from '../../components/DropDown/DropDown';
import P2PCard from '../../components/P2PCard/P2PCard';

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
									<DropDown
										DropDownText='USDT'
										options={tokens}
									/>
									<DropDown
										DropDownText='NGN'
										options={fiatCurrencies}
									/>
									<DropDown
										DropDownText='Buy'
										options={adTtype}
									/>
								</div>

								<span>
									See all P2P ads
								</span>
							</div>
						</div>

						<div className={style.PeerToPeerWrapper}>
							<P2PCard />
							<P2PCard />
						</div>
					</div>
					<PortfolioHome />
				</div>
			</div>
		</div>
	)
}

export default Dashboard;