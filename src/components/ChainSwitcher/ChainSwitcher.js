import React from "react";
import style from './ChainSwitcher.module.css';
import arrow from '../../assets/arrow.svg'

const ChainSwitcher = () => {
	return (
		<div className={style.ChainSwitcher}>
			<span className={style.ChainSwitcherName}>
				chain name
			</span>

			<img src={arrow} alt="" />
		</div>
	)
}

export default ChainSwitcher