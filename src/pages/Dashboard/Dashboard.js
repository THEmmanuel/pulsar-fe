import React from 'react';
import style from './Dashboard.module.css';
import MarketCharts from '../../components/MarketCharts/MarketCharts';
import PeerToPeerHome from '../../containers/PeerToPeerHome/PeerToPeerHome';
import PortfolioHome from '../../containers/PortfolioHome/PortfolioHome';

const Dashboard = () => {
	return (
		<div className={style.Dashboard}>
			dashboard
			<MarketCharts />
			<div className={style.AdsAndPortfolio}>
				<PeerToPeerHome />
				<PortfolioHome />
			</div>
		</div>
	)
}

export default Dashboard;