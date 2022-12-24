import React from 'react';
import style from './DropDown.module.css';
import arrowImage from '../../assets/arrowImage.svg'

const DropDown = props => {
	return (
		<div className={style.DropDown}>
			<span className={style.DropDownText}>{props.DropDownText}</span>
			<img
				src={arrowImage}
				alt=""
				className={style.DropDownIcon}
			/>
		</div>
	)
}

export default DropDown;