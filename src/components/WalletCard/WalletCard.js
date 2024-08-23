import React from 'react';
import style from './WalletCard.module.css';
import usdcIcon from '../../assets/usdc-icon.svg'


const WalletCard = props => {
	return (
		<div className={style.WalletCard}>
			<div className={style.WalletCardWrapper}>
				<img
					src={props.WalletIcon}
					alt=""
					className={style.WalletCoinIcon}
				/>

				<span className={style.WalletCoinName}>
					{props.CoinName}
				</span>

				<span className={style.WalletCoinDescription}>
					{props.CoinText}
				</span>
			</div>


			<span className={style.WalletCardAmount}>
				{props.CoinBalance}
			</span>
		</div>
	)
}

export default WalletCard;