import React from 'react';
import style from './HistoryCard.module.css';

const HistoryCard = props => {
	return (
		<div className={style.HistoryCard}>
			<div className={style.HistoryCardDetails}>
				<span className={style.HistoryCardDetailsTitle}>
					Value
				</span>

				<span className={style.HistoryCardDetailsText}>
					${props.order.fiatAmount}
				</span>
			</div>

			<div className={style.HistoryCardDetails}>
				<span className={style.HistoryCardDetailsTitle}>
					Transaction ID
				</span>

				<span className={style.HistoryCardDetailsText}>
					{props.order._id}
				</span>
			</div>

			<div className={style.HistoryCardDetails}>
				<span className={style.HistoryCardDetailsTitle}>
					Type
				</span>

				<span className={style.HistoryCardDetailsText}>
					Buy
				</span>
			</div>

			<div className={style.HistoryCardDetails}>
				<span className={style.HistoryCardDetailsTitle}>
					Seller
				</span>

				<span className={style.HistoryCardDetailsText}>
					p4nther
				</span>
			</div>

			<div className={style.HistoryCardDetails}>
				<span className={style.HistoryCardDetailsTitle}>
					Timestamp
				</span>

				<span className={style.HistoryCardDetailsText}>
					Text
				</span>
			</div>

			<div className={style.HistoryCardDetails}>
				<span className={style.HistoryCardDetailsTitle}>
					Status
				</span>

				<span className={style.HistoryCardDetailsText}>
					Approved
				</span>
			</div>
		</div>
	)
}

export default HistoryCard;