import React from "react";
import style from './TransactionCard.module.css';


const TransactionCard = props => {
	function truncateString(str, frontChars = 6, backChars = 4) {
		if (!str) return ''; // handle cases where str might be undefined or null
		return `${str.slice(0, frontChars)}...${str.slice(-backChars)}`;
	}


	return (
		<div className={style.TransactionCardWrapper}>
			<div className={style.TransactionDetails}>
				<div className={style.TransactionAmount}>
					<span className={style.TransactionAmountETH}>
						ETH Value: {props.ethValue}
					</span>

					<span className={style.TransactionAmountUSD}>
						USD Value: ${props.usdValue}
					</span>

					<span className={style.TransactionTimeStamp}>
						Timestamp: {props.timestamp}
					</span>
				</div>
			</div>


			<div className={style.TransactionWallet}>
				<span className={style.TransactionToAddress}>
					To: {truncateString(props.toAddress)}
				</span>

				<span className={style.TransactionFromAddress}>
					From: {truncateString(props.fromAddress)}
				</span>

				<span className={style.TransactionTXN}>
					TXN: {truncateString(props.txn)}
				</span>
			</div>
		</div>
	)
}

export default TransactionCard;