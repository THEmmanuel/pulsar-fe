import React from 'react';
import style from './WalletCard.module.css';
import usdcIcon from '../../assets/usdc-icon.svg'


const WalletCard = () => {
	return (
		<div className={style.WalletCard}>
			<div className={style.WalletCardWrapper}>
				<img
					src={usdcIcon}
					alt=""
					className={style.WalletCoinIcon}
				/>

				<span className={style.WalletCoinName}>
					Bitcoin
				</span>

				<span className={style.WalletCoinDescription}>
					View your btc wallet
				</span>
			</div>


			<span className={style.WalletCardAmount}>
				Amount
			</span>
		</div>
	)
}

export default WalletCard;