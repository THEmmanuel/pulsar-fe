import React from 'react';
import style from './Dashboard.module.css';
import MarketCharts from '../../components/MarketCharts';
import PeerToPeerHome from '../../containers/PeerToPeerHome/PeerToPeerHome';
import PortfolioHome from '../../containers/PortfolioHome/PortfolioHome';

const Dashboard = () => {
	return (
		<div>
			dashboard
			<MarketCharts />
			<PeerToPeerHome />
			<PortfolioHome />
		</div>
	)
}

export default Dashboard;