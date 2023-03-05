import React, { useEffect, useState } from "react";
import style from './TransactionsHistory.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";
// import TransactionCard from "../../components/TransactionCard/TransactionCard";

const API_URL = 'http://localhost:9000';


const TransactionsHistory = () => {

	const [orders, setOrders] = useState(null)

	const getOrders = () => {
		axios.get(`${API_URL}/orders`)
			.then(res => setOrders(res.data.orders))
	}

	useEffect(() => {
		getOrders()
	}, [])

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
						{orders ?
							orders.map(order =>
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
									<Link to='/transaction'>
										<td className={style.TransactionStatus}>
											Sucess
										</td>
									</Link>
								</tr>
							)

							: <span>Loading</span>
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TransactionsHistory;