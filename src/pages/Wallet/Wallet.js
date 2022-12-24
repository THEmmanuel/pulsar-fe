import React from 'react';
import style from './Wallet.module.css';
import MainDropdown from '../../components/MainDropdown/MainDropdown';

import usdcWalletImage from '../../assets/usdc-wallet.svg';
import qrPlaceholder from '../../assets/qr_code_placeholder.png'

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
				<MainDropdown />

				<span className={style.WalletAddress}>
					wallet address
				</span>

				<img src={qrPlaceholder} alt="" />
			</div>

			<div className={style.TransactionHistoryWrapper}>
				<span>
					Transaction History
				</span>

				<table className={style.TransactionsTable}>
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
							<td>7.78 ETH</td>
							<td>ERC-20</td>
							<td>View Transaction</td>
							<td>Completed</td>
							<td>Deposit</td>
							<td>2021/11/10 23:01:33</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Wallet;