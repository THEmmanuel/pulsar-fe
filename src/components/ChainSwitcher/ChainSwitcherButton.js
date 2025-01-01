import React, {useContext} from "react";
import style from './ChainSwitcherButton.module.css';
import arrowIcon from '../../assets/arrowImage.svg';

import { UserContext } from '../../contexts/UserContext';

const ChainSwitcherButton = (props) => {
	const {selectedChain } = useContext(UserContext);
	return (
		<button
			onClick={() => props.click()}
			className={style.ChainSwitcherButton}
		>
			<span>{selectedChain}</span>
			<img src={arrowIcon} alt="" />
		</button>
	)
}

export default ChainSwitcherButton;