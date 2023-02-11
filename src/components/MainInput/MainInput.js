import React from 'react';
import style from './MainInput.module.css';

const MainInput = props => {
	return (
		<div className={style.MainInputWrapper}>
			<span className={style.MainInputText}>Amount</span>
			<input
				type="text"
				placeholder='Enter Amount'
				onChange={props.change}
				className={style.MainInput}
			/>
		</div>
	)
}

export default MainInput;