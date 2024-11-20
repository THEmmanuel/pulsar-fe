import React from "react";
import style from './ChainSwitcher.module.css';

const ChainSwitcherButton = (props) => {
	return (
		<button
			onClick={() => props.click()}
		>
			<span>Current chain here</span>
			<span> </span>
		</button>
	)
}

export default ChainSwitcherButton;