import React from 'react';
import style from './WalletsPage.module.css';
import WalletCoin from '../../components/WalletCoin/WalletCoin';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA.js';

const WalletsPage = () => {
	return (
		<div className={style.WalletsPage}>
			<div className={style.WalletCoinContainer}>
				<div className={style.WalletPortfolioValue}>
					<span>Portfolio balance:</span>
					<span className={style.WalletTotalValue}>$90,876.78</span>
				</div>

				<WalletCoin />
				<WalletCoin />
				<WalletCoin />
				<WalletCoin />
				<WalletCoin />

				<PrimaryCTA />
			</div>
		</div>
	);
}

export default WalletsPage;