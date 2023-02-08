import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './MarketCharts.module.css';


const MarketCharts = () => {
	const [coinData, setCoinData] = useState(null);
	const coinGeckoAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Csolana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'

	useEffect(() => {
		axios.get(coinGeckoAPI)
		.then(res => console.log(res.data))
		.catch(err => console.log(err))
	})


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
					<th>7d %</th>
					<th>Market Cap</th>
					<th>Trading Volume (24hr)</th>
				</thead>

				<tbody>
					<tr>
						<td className={style.ChartIcon}>Icon</td>
						<td className={style.CoinName}>Ethereum</td>
						<td className={style.CoinAbbreviation}>BTC</td>
						<td className={style.CoinPrice}>$20,000</td>
						<td className={style.CoinDiff}>0.10</td>
						<td className={style.CoinDiff}>1.06</td>
						<td className={style.CoinMarketCap}>367,024,834</td>
						<td className={style.CoinTradingVolume}>27,232,767</td>
					</tr>

					<tr>
						<td>Icon</td>
						<td>Ethereum</td>
						<td>BTC</td>
						<td>$20,000</td>
						<td>0.10</td>
						<td>1.06</td>
						<td>367,024,834</td>
						<td>27,232,767</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default MarketCharts;