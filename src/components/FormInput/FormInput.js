import React from 'react';
import style from './FormInput.module.css';

const FormInput = (props) => {
	return (
		<div className={style.TransferInputContainer}>
			<span className={style.TransferInputText}>{props.title}</span>
			<input
				type="text"
				className={style.TransferInput}
				onChange={props.change} 
				name = {props.name}
				value = {props.value}
				/>
		</div>
	)
}

export default FormInput;