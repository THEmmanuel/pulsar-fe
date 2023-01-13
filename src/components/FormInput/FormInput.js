import React from 'react';
import style from './FormInput.module.css';

const FormInput = (props) => {
	return (
		<div className={style.TransferInputContainer}>
			<span className={style.TransferInputText}>Amount</span>
			<input
				type="text"
				className={style.TransferInput}
				onChange={props.change} />
		</div>
	)
}

export default FormInput;