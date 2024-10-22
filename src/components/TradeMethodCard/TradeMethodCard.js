import React from 'react';
import style from './TradeMethodCard.module.css';

const TradeMethodCard = (props) => {
	return (
		<div className={style.TradeMethodCardWrapper}>
			<span className={style.TradeMethodText}>
				{props.paymentMethodText}
			</span>

			<span className={style.TradeMethodLimit}>
				Limit: $100 000
			</span>
		</div>
	)
}

export default TradeMethodCard;