import React from "react";
import style from './TransactionsHistory.module.css';
// import TransactionCard from "../../components/TransactionCard/TransactionCard";

const TransactionsHistory = () => {
	return (
		<div className={style.TransactionsHistoryPage}>
			Transactions History
			<div className={style.TransactionsHistory}>
				<table
					className={style.TransactionHistoryTable}
					cellPadding={0}
					cellSpacing={0}
				>
					<thead>
						<th></th>
						<th>User name</th>
						<th>Order Token</th>
						<th>Type</th>
						<th>Amount</th>
						<th>Token</th>
						<th>Time</th>
						<th>Status</th>
					</thead>

					<tbody>
						<tr className={style.TransactionsHistoryCard}>
							<td className={style.TransactionImage}>
								image
							</td>
							<td>User name</td>
							<td>le6l69se1puajhtd62f</td>
							<td>Buy</td>
							<td>600</td>
							<td>USDT</td>
							<td>June 15 2023 12:22 PM</td>
							<td className={style.TransactionStatus}>
								Sucess
							</td>
						</tr>

						<tr className={style.TransactionsHistoryCard}>
							<td>image</td>
							<td>User name</td>
							<td>le6l69se1puajhtd62f</td>
							<td>Buy</td>
							<td>600</td>
							<td>USDT</td>
							<td>June 15 2023 12:22 PM</td>
							<td>Sucess</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TransactionsHistory;