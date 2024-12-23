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
					ChainName='(BNB) Binance Smart Chain'
				/>

				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum Sepolia'
				/>

				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum Holesky'
				/>
			</div>
		</Overlay>
	)
}

export default ChainSwitcher