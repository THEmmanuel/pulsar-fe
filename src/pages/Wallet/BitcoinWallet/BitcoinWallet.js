import React, { useEffect, useState } from 'react';
import style from './BitcoinWallet.module.css';
import MainDropdown from '../../../components/MainDropdown/MainDropdown';
import TransferModal from '../../../containers/TransferModal/TransferModal';
import sendIcon from '../../../assets/send_icon.svg'

import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

import usdcWalletImage from '../../../assets/usdc-wallet.svg';
import qrPlaceholder from '../../../assets/qr_code_placeholder.png'
import { ethers } from 'ethers';
// import { getETHBalance, getETHHistory } from '../../../utils/ethWallet';
import { getBTCBalance } from '../../../utils/btcWallet';

const BitcoinWallet = () => {
	let { walletName } = useParams();
	const [walletBalance, setWalletBalance] = useState(0)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [wallet, setWallet] = useState({})
	const { wallets } = useContext(UserContext);
	const [ethTransactions, setEthTransactions] = useState([]);
	let userWallet = wallets.find(wallet => wallet.walletName === walletName)

	useEffect(() => {
		if (wallets.length !== 0) {
			setWallet({ ...userWallet })
		}
	}, [userWallet]);

	useEffect(() => {
		const fetchBTCBalance = async () => {
			if (wallet) {
				const balance = await getBTCBalance(wallet.walletAddress)
				setWalletBalance(balance)
			}
		}
		fetchBTCBalance()
	}, [wallet])


	return (
		<div className={style.WalletPage}>
			<div className={style.WalletInformation}>
				<div className={style.WalletCoinInformation}>
					<img src={usdcWalletImage} alt="" className={style.WalletCoinImage} />
					<div className={style.WalletCoinPriceInfo}>
						<span className={style.WalletCoinTotal}>{walletBalance * 0.00000001} BTC</span>
						<span className={style.WalletCoinValue}>${(walletBalance * 0.00000001) * 16643.60}</span>

						<button
							className={style.SendButton}
							onClick={() => setIsModalOpen(true)}>
							Send
							<img src={sendIcon} alt="" />
						</button>
					</div>
				</div>

				<MainDropdown
					DropdownHeading='Token'
					PrimaryText={wallet.walletName}
					SecondaryText='Bitcoin'
				/>

				<MainDropdown
					DropdownHeading='Network'
					PrimaryText='Bitcoin'
					SecondaryText='Testnet'
				/>
				<span className={style.WalletAddress}>
					{wallet.walletAddress}
				</span>

				<img src={qrPlaceholder} alt="" />
			</div>

			{isModalOpen ?
				<TransferModal
					ETHAddress={wallet.walletAddress}
					privateKey={wallet.walletKey}
					cancel={() => setIsModalOpen(false)}
				/> : null}

			<div className={style.TransactionHistoryWrapper}>
				<span>
					Transaction History
				</span>

				<table className={style.TransactionsTable}>
					<thead>
						<th>Amount</th>
						<th>Network</th>
						<th>Blockchain Record</th>
						<th>Status</th>
						<th>Remarks</th>
						<th>Start Time</th>
					</thead>

					<tbody>
						{ethTransactions ? ethTransactions.map(transaction => {
							return (
								<tr>
									<td>7.78 ETH</td>
									<td>ERC-20</td>
									<td>View Transaction</td>
									<td>Completed</td>
									<td>Deposit</td>
									<td>2021/11/10 23:01:33</td>
								</tr>

							)
						}) : <span>Loading</span>}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BitcoinWallet;