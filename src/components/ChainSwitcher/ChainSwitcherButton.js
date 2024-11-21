import React from "react";
import style from './ChainSwitcherButton.module.css';

const ChainSwitcherButton = (props) => {
	return (
		<button
			onClick={() => props.click()}
			className={style.ChainSwitcherButton}
		>
			<span>Current chain here</span>
			<span> arrow </span>
		</button>
	)
}

export default ChainSwitcherButton;