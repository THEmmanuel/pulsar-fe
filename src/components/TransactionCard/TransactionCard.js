import React from "react";
import style from './TransactionCard.module.css';

const TransactionCard = () => {
	return (
		<tr className={style.TransactionCardWrapper}>
			<td>7.78 ETH</td>
			<td>ERC-20</td>
			<td>View Transaction</td>
			<td>Completed</td>
			<td>Deposit</td>
			<td>2021/11/10 23:01:33</td>
		</tr>
	)
}

export default TransactionCard;