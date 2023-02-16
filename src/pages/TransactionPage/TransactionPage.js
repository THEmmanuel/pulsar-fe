import React from "react";
import style from './TransactionPage.module.css';

const TransactionPage = () => {
	return (
		<div className={style.TransactionPage}>
			<div className={style.TransactionStatusContainer}>
				<span className={style.TransactionStatusHeading}>Order Status</span>
				<div className={style.TransactionStatusIcon}>Order Image</div>
				<span className={style.TransactionStatus}>Sucessful</span>
			</div>

			<div className={style.OrderTokenWrapper}>
				<span>Order Code</span>
				<span>Order Token here</span>
			</div>

			<div className={style.OrderDetailsWrapper}>
				<div className={style.OrderDetails}>
					<span>Your Order</span>
					<div>
						<span>Order Type</span>
						<span>Buy or sell</span>
					</div>
				</div>

				<div className={style.OrderDetails}>
					<span>Your Order</span>
					<div>
						<span>Order Type</span>
						<span>Buy or sell</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TransactionPage;