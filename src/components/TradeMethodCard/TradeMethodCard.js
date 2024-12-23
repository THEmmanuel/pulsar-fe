import React from 'react';
import style from './TradeMethodCard.module.css';

const TradeMethodCard = (props) => {
	return (
		<div
			className={style.TradeMethodCardWrapper}
			onClick={() => props.click()}>
			<div className={style.TradeMethodCardWrapper}>
				<span>{props.action} {props.amount} {props.token} on Chain Name</span>

				<span className={style.TradeMethodText}>
					{props.paymentMethodText}
				</span>

				<span className={style.TradeMethodLimit}>
					Limit: ${props.limit}
				</span>
			</div>
		</div>
	)
}

export default TradeMethodCard;