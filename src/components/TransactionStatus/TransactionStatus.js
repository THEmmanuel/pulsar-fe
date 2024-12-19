import React from 'react';
import style from './TransactionSuccess.module.css';
import checkIcon from '../../assets/check.svg';
import { Link } from 'react-router-dom';

const TransactionStatus = props => {
	return (
		<div className={style.BuyPageSuccess}>
			<img src={checkIcon} alt="" className={style.CheckIcon} />

			<div className={style.TransactionInfo}>
				<div className={style.TransactionDetails}>
					<span className={style.TransactionAmount}>
						{props.amount}
						{props.token}
					</span>

					<span className={style.TransactionText}>
						Deposited into your wallet
					</span>
				</div>

				<div className={style.TransactionCTA}>
					<Link to='/home'>
						<button className={style.SuccessCTAButton}>Go home</button>
					</Link>

					<Link to='/wallets'>
						<span>Check USDT wallet</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TransactionStatus;