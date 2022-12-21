import React from 'react';
import style from './Dashboard.module.css';
import MarketCharts from '../../components/MarketCharts/MarketCharts';
import PeerToPeerHome from '../../containers/PeerToPeerHome/PeerToPeerHome';
import PortfolioHome from '../../containers/PortfolioHome/PortfolioHome';

const Dashboard = () => {
	return (
		<div className={style.Dashboard}>
			Dashboard
			<div className={style.DashboardContent}>
				<div className={style.DashboardMarketChartsContainer}>
					<MarketCharts />
				</div>

				<div className={style.AdsAndPortfolio}>
					<div className={style.PeerToPeerContainer}>
						<div className={style.AdTypeWrapper}>
							<span>USDT</span>
							<span>NGN</span>
							<span>Buy</span>
						</div>
						
						<div className={style.PeerToPeerWrapper}>
							<PeerToPeerHome />
							<PeerToPeerHome />
							<PeerToPeerHome />
							<PeerToPeerHome />
							<PeerToPeerHome />
							<PeerToPeerHome />
						</div>
					</div>
					<PortfolioHome />
				</div>
			</div>
		</div>
	)
}

export default Dashboard;