import React from "react";
import style from './TransactionPage.module.css';

const TransactionPage = () => {
	return (
		<div className={style.TransactionPage}>
			<div className={style.TransactionStatusContainer}>
				<h2 className={style.TransactionStatusHeading}>Order Status</h2>
				<div className={style.TransactionStatusIcon}></div>
				<span className={style.TransactionStatus}>Sucessful</span>
			</div>

			<div className={style.OrderTokenWrapper}>
				<span>Order Code:</span>
				<span className={style.OrderToken}>Order Token here</span>
			</div>

			<div className={style.OrderDetailsWrapper}>
				<div className={style.OrderDetails}>
					<h3>Your Order</h3>
					<div className={style.OrderDetailsContainer}>
						<div className={style.OrderDetail}>
							<span className={style.OrderDetailHeading}>Order Type</span>
							<span className={style.OrderDetailText}>Buy or sell</span>
						</div>

						<div className={style.OrderDetail}>
							<span className={style.OrderDetailHeading}>Order Typeeeeee</span>
							<span className={style.OrderDetailText}>Buy or selllllllllll</span>
						</div>

						<div className={style.OrderDetail}>
							<span className={style.OrderDetailHeading}>Order Type</span>
							<span className={style.OrderDetailText}>Buy or sell</span>
						</div>
					</div>
				</div>

				<div className={style.OrderDetails}>
					<h3>Order Summary</h3>
					<div className={style.OrderDetailsContainer}>
						<div className={style.OrderDetail}>
							<span className={style.OrderDetailHeading}>Order Type</span>
							<span className={style.OrderDetailText}>Buy or sell</span>
						</div>

						<div className={style.OrderDetail}>
							<span className={style.OrderDetailHeading}>Order Typeeeeee</span>
							<span className={style.OrderDetailText}>Buy or selllllllllll</span>
						</div>

						<div className={style.OrderDetail}>
							<span className={style.OrderDetailHeading}>Order Type</span>
							<span className={style.OrderDetailText}>Buy or sell</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TransactionPage;