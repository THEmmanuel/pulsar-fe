import React from 'react';
import style from './Wallet.module.css';

const Wallet = () => {
	return (
		<div>
			<div>
				<span>Coin Image</span>

				<div>
					<span></span>
					<input type="text" />
				</div>

				<div>
					<span></span>
					<input type="text" />
				</div>

				<span>
					wallet address
				</span>

				<span>QR Image</span>
			</div>

			<div>
				Transaction History
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
		</div>
	);
}

export default Wallet;