import React from 'react';
import style from './MarketCharts.module.css';

const MarketCharts = () => {
	return (
		<div>
			Marketing values
			<table>
				<tr>
					<th>Name</th>
					<th>Symbol</th>
					<th>Price</th>
					<th>24hr %</th>
					<th>7d %</th>
					<th>Market Cap</th>
					<th>Trading Volume (24hr)</th>
				</tr>

				<tr>
					<td>Ethereum</td>
					<td>BTC</td>
					<td>$20,000</td>
					<td>0.10</td>
					<td>1.06</td>
					<td>367,024,834</td>
					<td>27,232,767</td>
				</tr>
			</table>
		</div>
	)
}

export default MarketCharts;