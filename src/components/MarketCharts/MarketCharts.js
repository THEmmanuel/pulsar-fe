import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import axios from 'axios';
import style from './MarketCharts.module.css';

import bitcoin from '../../assets/bitcoinIcon.svg';
import ethereum from '../../assets/ethereumIcon.svg';
import tether from '../../assets/tetherIcon.svg';
import solana from '../../assets/solanaIcon.svg';

const coinIcons = {
	bitcoin,
	ethereum,
	tether,
	solana
}

const MarketCharts = () => {
	const [coinData, setCoinData] = useState({});
	const coinGeckoAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Csolana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'

	useEffect(() => {
		axios.get(coinGeckoAPI)
			.then(res => setCoinData(res.data))
			.catch(err => console.log(err))
	}, [])

	return (
		<div className={style.MarketChartsContainer}>
			Marketing values
			<table className={style.MarketChartsTable}>
				<thead>
					<th></th>
					<th>Name</th>
					<th>Symbol</th>
					<th>Price</th>
					<th>24hr %</th>
					<th>Market Cap</th>
					<th>Trading Volume (24hr)</th>
				</thead>

				<tbody>
					{Object.entries(coinData).map(([coin, info]) => (
						<tr key={coin}>
							<td className={style.ChartIcon}>
								<img src={coinIcons[coin]} alt="" />
							</td>
							<td className={style.CoinName}>{coin}</td>
							<td className={style.CoinAbbreviation}>BTC</td>
							<td className={style.CoinPrice}>${formatNumber(info.usd)}</td>
							<td className={style.CoinDiff}>${formatNumber(info.usd_24h_change)}</td>
							<td className={style.CoinMarketCap}>${formatNumber(info.usd_market_cap)}</td>
							<td className={style.CoinTradingVolume}>${formatNumber(info.usd_24h_vol)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default MarketCharts;