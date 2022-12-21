import React from 'react';
import style from './MarketCharts.module.css';

const MarketCharts = () => {
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