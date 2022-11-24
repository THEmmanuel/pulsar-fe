import React from 'react';
import style from './Wallet.module.css';
import MainDropdown from '../../components/MainDropdown/MainDropdown';

import usdcWalletImage from '../../assets/usdc-wallet.svg';

const Wallet = () => {
	return (
		<div className={style.WalletPage}>
			<div className={style.WalletInformation}>
				<div className={style.WalletCoinInformation}>
					<img src={usdcWalletImage} alt="" className={style.WalletCoinImage} />
					<div className={style.WalletCoinPriceInfo}>
						<span className={style.WalletCoinTotal}>12,456 USDC</span>
						<span className={style.WalletCoinValue}>$12,456</span>
					</div>
				</div>

				<MainDropdown />

				<span className={style.WalletAddress}>
					wallet address
				</span>

				<span>QR Image</span>
			</div>

			<div className={style.TransactionHistoryWrapper}>
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