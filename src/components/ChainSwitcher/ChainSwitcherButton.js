import React from "react";
import style from './ChainSwitcherButton.module.css';
import arrowIcon from '../../assets/arrowImage.svg';

const ChainSwitcherButton = (props) => {
	return (
		<button
			onClick={() => props.click()}
			className={style.ChainSwitcherButton}
		>
			<span>Ethereum Mainnet</span>
			<img src={arrowIcon} alt="" />
		</button>
	)
}

export default ChainSwitcherButton;