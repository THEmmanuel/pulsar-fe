import React from 'react';
import style from './DropDown.module.css';
import arrowImage from '../../assets/arrowImage.svg'

const DropDown = () => {
	return (
		<div className={style.DropDown}>
			<span className={style.DropDownText}>Buy</span>
			<img src={arrowImage} alt="" />
		</div>
	)
}

export default DropDown;