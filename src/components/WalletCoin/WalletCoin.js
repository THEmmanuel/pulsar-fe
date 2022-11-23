import React from 'react';
import style from './WalletCoin.module.css';

const WalletCoin = () => {
	return ( 
		<div className={style.WalletCoinWrapper}>
			<div className={style.WalletCoinContent}>
				<span>Icon</span>
				<div className={style.WalletCoinInfo}>
					<span>Bitcoin</span>
					<span>15%</span>
					<span>2.34</span>
					<span>$40,000</span>
				</div>
			</div>
		</div>
	);
}

export default WalletCoin;