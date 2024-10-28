import React from "react";
import style from './TransactionCard.module.css';
import externalLink from '../../assets/externalLink.svg'


const TransactionCard = props => {
	function truncateString(str, frontChars = 6, backChars = 4) {
		if (!str) return ''; // handle cases where str might be undefined or null
		return `${str.slice(0, frontChars)}...${str.slice(-backChars)}`;
	}

	let transactionTypeText = 'Value'
	let transactionWalletText = 'Wallet'
	let displayedAddress = 'hghs'


	if (props.toAddress.toLowerCase() === props.userAddress.toLowerCase()) {
		transactionTypeText = 'Recieve'
		displayedAddress = truncateString(props.fromAddress)
	}
	else if (props.fromAddress.toLowerCase() === props.userAddress.toLowerCase()) {
		transactionTypeText = 'Send'
		displayedAddress = truncateString(props.toAddress)
	}



	if (props.toAddress.toLowerCase() === props.userAddress.toLowerCase()) {
		transactionWalletText = 'From'
	}
	else if (props.fromAddress.toLowerCase() === props.userAddress.toLowerCase()) {
		transactionWalletText = 'To'
	}


	return (
		<div className={style.TransactionCardWrapper}>
			<div className={style.TransactionInfo}>
				<span className={style.TransactionInfoTitle}>
					{transactionTypeText}
				</span>

				<span className={style.TransactionInfoText}>
					{props.usdValue}
				</span>
			</div>

			<div className={style.TransactionInfoWallet}>
				<span className={style.TransactionInfoTitle}>
					{transactionWalletText}
				</span>

				<span className={style.TransactionWalletInfo}>
					{displayedAddress}
				</span>
			</div>

			<div className={style.TransactionInfoTime}>
				<span className={style.TransactionInfoTitle}>
					Time
				</span>

				<span className={style.TransactionInfoText}>
					{props.timestamp}
				</span>

				<span className={style.TransactionInfoDate}>
					{props.date}
				</span>
			</div>


			<img src={externalLink} alt="" />
		</div>
	)
}

export default TransactionCard;






// <div className={style.TransactionDetails}>
// 	<div className={style.TransactionAmount}>
// 		<span className={style.TransactionAmountETH}>
// 			ETH Value: {props.ethValue}
// 		</span>

// 		<span className={style.TransactionAmountUSD}>
// 			USD Value: ${props.usdValue}
// 		</span>

// 		<span className={style.TransactionTimeStamp}>
// 			Timestamp: {props.timestamp}
// 		</span>
// 	</div>
// </div>


// <div className={style.TransactionWallet}>
// 	<span className={style.TransactionToAddress}>
// 		To: {truncateString(props.toAddress)}
// 	</span>

// 	<span className={style.TransactionFromAddress}>
// 		From: {truncateString(props.fromAddress)}
// 	</span>

// 	<span className={style.TransactionTXN}>
// 		TXN: {truncateString(props.txn)}
// 	</span>
// </div>