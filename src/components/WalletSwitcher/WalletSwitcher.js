import React from 'react';
import style from './WalletSwitcher.module.css';

const WalletSwitcher = () => {
	return (
		<div className={style.WalletSwitcher}>
			<div>
				<span className={style.WalletSwitcherTabText}>
					All Wallets
				</span>
			</div>

			<div>
				<span className={style.WalletSwitcherTabText}>
					Cryptomatic Wallets
				</span>
			</div>

			<div>
				<span className={style.WalletSwitcherTabText}>
					Connected Wallets
				</span>
			</div>
		</div>
	)
}

export default WalletSwitcher