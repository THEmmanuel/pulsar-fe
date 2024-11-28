import React from 'react';
import style from './TradeMethodCard.module.css';

const TradeMethodCard = (props) => {
	return (
		<div
			className={style.TradeMethodCardWrapper}
			onClick={() => props.click()}>
			<div className={style.TradeMethodCardWrapper}>
				<span>Buying {props.amount} {props.token} on Chain Name</span>

				<span className={style.TradeMethodText}>
					{props.paymentMethodText}
				</span>

				<span className={style.TradeMethodLimit}>
					Limit: $100 000
				</span>
			</div>
		</div>
	)
}

export default TradeMethodCard;