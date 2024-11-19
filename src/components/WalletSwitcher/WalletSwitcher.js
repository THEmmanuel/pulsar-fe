import React from 'react';
import style from './WalletSwitcher.module.css';

const WalletSwitcher = () => {
	return (
		<div className={style.WalletSwitcher}>
			<div className={style.WalletSwitcherTab}>
				<span className={style.WalletSwitcherTabText}>
					Cryptomatic Wallets
				</span>
			</div>

			<div className={style.WalletSwitcherTab}>
				<span className={style.WalletSwitcherTabText}>
					Connected Wallets
				</span>
			</div>
		</div>
	)
}

export default WalletSwitcher;