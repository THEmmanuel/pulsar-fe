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
				<span>
					Transaction History
				</span>

				<table className={style.MarketChartsTable}>
					<thead>
						<th>Amount</th>
						<th>Network</th>
						<th>Blockchain Record</th>
						<th>Status</th>
						<th>Remarks</th>
						<th>Start Time</th>
					</thead>

					<tbody>
						<tr>
							<td>Ethereum</td>
							<td>BTC</td>
							<td>$20,000</td>
							<td>0.10</td>
							<td>1.06</td>
							<td>367,024,834</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Wallet;