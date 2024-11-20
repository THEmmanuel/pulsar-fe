import React from "react";
import style from './ChainSwitcher.module.css';
import arrow from '../../assets/arrow.svg'
import ChainCard from "./ChainCard";
import ethChainIcon from '../../assets/ethIconWhiteTest.svg';
import Overlay from '../../containers/Overlay/Overlay'

const ChainSwitcher = () => {
	return (
		<Overlay>
			<div className={style.ChainSwitcher}>
				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum'
				/>

				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum'
				/>

				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum'
				/>

				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum'
				/>
			</div>
		</Overlay>
	)
}

export default ChainSwitcher