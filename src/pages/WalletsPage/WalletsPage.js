import React from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';

const WalletsPage = () => {
	return (
		<div className={style.WalletsPage}>
			<div className={style.WalletCoinContainer}>
				<div className={style.WalletPortfolioValue}>
					<span>Portfolio:</span>
					<span>$90,876.78</span>
				</div>

				<WalletCoin />
				<WalletCoin />
				<WalletCoin />
				<WalletCoin />
				<WalletCoin />
			</div>
		</div>
	);
}

export default WalletsPage;