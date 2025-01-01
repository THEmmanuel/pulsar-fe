import React, { useContext } from 'react';
import style from './TradeMethodCard.module.css';
import { UserContext } from '../../contexts/UserContext';


const TradeMethodCard = (props) => {
	const { coinData, setCoinData, selectedChain } = useContext(UserContext);

	return (
		<div
			className={style.TradeMethodCardWrapper}
			onClick={() => props.click()}>
			<div className={style.TradeMethodCardWrapper}>
				<span>
					{props.action} {props.amount / (coinData.ethereum.usd && coinData.ethereum ? coinData.ethereum.usd : 1)} {props.token} for ${props.amount} on {selectedChain}
				</span>

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