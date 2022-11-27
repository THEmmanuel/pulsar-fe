import React from 'react';
import style from './MainInput.module.css';

const MainInput = () => {
	return (
		<div className={style.MainInputWrapper}>
			<span className={style.MainInputText}>Amount</span>
			<input
				type="text"
				placeholder='Enter Amount'
				className={style.MainInput}
			/>
		</div>
	)
}

export default MainInput;