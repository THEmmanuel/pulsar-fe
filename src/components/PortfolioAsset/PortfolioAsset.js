import React from 'react';
import style from './PortfolioAsset.module.css';

const PortfolioAsset = () => {
	return (
		<div className={style.PortfolioAsset}>
			<div className={style.CoinInfoWrapper}>
				<div className={style.CoinIcon}>
				</div>
				<div className={style.CoinInfo}>
					<span className={style.CoinName}>Coin name</span>
					<span className={style.CoinPercentage}>50%</span>
				</div>
			</div>

			<div className={style.CoinPrice}>
				<span className={style.CoinAssetPrice}>$236765</span>
				<span className={style.CoinTotal}>4.5BTC</span>
			</div>
		</div>
	)
}

export default PortfolioAsset;