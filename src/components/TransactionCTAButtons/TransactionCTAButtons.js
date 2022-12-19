import React from 'react';
import style from './TransactionCTAButtons.module.css'

const TransactionCTAButtons = () => {
	return (
		<div className={style.ButtonContainer}>
			<div className={style.ButtonWrapper}>
				<button className={style.ButtomButtonProceed}>Buy USDT</button>
				<button className={style.ButtomButtonCancel}>Cancel</button>
			</div>
		</div>
	)
}

export default TransactionCTAButtons