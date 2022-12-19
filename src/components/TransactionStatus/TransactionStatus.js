import React from 'react';
import style from './TransactionSuccess.module.css';
import checkIcon from '../../assets/check.svg';

const TransactionStatus = () => {
	return (
		<div className={style.BuyPageSuccess}>
			<img src={checkIcon} alt="" className={style.CheckIcon} />

			<div className={style.TransactionInfo}>
				<div className={style.TransactionDetails}>
					<span className={style.TransactionAmount}>600.00 USDT</span>
					<span className={style.TransactionText}>Deposited into your wallet</span>
				</div>

				<div className={style.TransactionCTA}>
					<button className={style.SuccessCTAButton}>Go home</button>
					<span>Check USDT wallet</span>
				</div>
			</div>
		</div>
	)
}

export default TransactionStatus;