import React from "react";
import style from './TransactionsHistory.module.css';
import TransactionCard from "../../components/TransactionCard/TransactionCard";

const TransactionsHistory = () => {
	return (
		<div>
			Transactions History
			<div>
				<TransactionCard/>
			</div>
		</div>
	)
}

export default TransactionsHistory;