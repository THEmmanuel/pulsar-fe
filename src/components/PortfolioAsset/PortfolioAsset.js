import React from 'react';
import style from './PortfolioAsset.module.css';

const PortfolioAsset = () => {
	return (
		<div className={style.PortfolioAsset}>
			<div className={style.CoinInfoWrapper}>
				<span>Icon</span>
				<div className={style.CoinInfo}>
					<span>Coin name</span>
					<span>50%</span>
				</div>
			</div>

			<div className={style.CoinPrice}>
				<span>$236765</span>
				<span>4.5BTC</span>
			</div>
		</div>
	)
}

export default PortfolioAsset;