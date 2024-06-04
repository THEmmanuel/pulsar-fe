import React, { useEffect, useState } from 'react';
import style from './../EthereumWallet/EthereumWallet.module.css';
import MainDropdown from '../../../components/MainDropdown/MainDropdown';
import TransferModal from '../../../containers/TransferModal/TransferModal';
import sendIcon from '../../../assets/send_icon.svg'
import PrimaryCTA from '../../../components/PrimaryCTA/PrimaryCTA';
import TransactionCard from '../../../components/TransactionCard/TransactionCard';


import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

import usdcWalletImage from '../../../assets/usdc-wallet.svg';
import qrPlaceholder from '../../../assets/qr_code_placeholder.png'
import { ethers } from 'ethers';
import { getUSDTBalance, getETHHistory } from '../../../utils/ethWallet';

const USDTWallet = () => {
	let { walletName } = useParams();
	const [wallet, setWallet] = useState({})
	const { wallets } = useContext(UserContext);
	const [walletBalance, setWalletBalance] = useState(0)
	const [ethTransactions, setEthTransactions] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false)
	let userWallet = wallets.find(wallet => wallet.walletName === walletName)

	useEffect(() => {
		if (wallets.length !== 0) {
			setWallet({ ...userWallet })
		}
	}, [userWallet]);

	const fetchTransactions = async () => {
		const ethTransactions = await getETHHistory(wallet.walletAddress);
		setEthTransactions(ethTransactions)
	}

	useEffect(() => {
		const fetchBalance = async () => {
			if (wallet) {
				const balance = await getUSDTBalance(wallet.walletAddress);
				console.log(balance
					+ 'usdt wallet stuff lol')
				setWalletBalance(balance);
			}
		};
		fetchBalance();
		fetchTransactions()
		return () => {
		};
	}, [wallet]);


	return (
		<div className={style.WalletPage}>
			<div className={style.WalletInformation}>
				<div className={style.WalletCoinInformation}>
					<img src={usdcWalletImage} alt="" className={style.WalletCoinImage} />
					<div className={style.WalletCoinPriceInfo}>
						<span className={style.WalletCoinTotal}>{walletBalance} USDC</span>
						<span className={style.WalletCoinValue}>
							${walletBalance * 1200.08}
						</span>

						<span className={style.WalletCoinNetwork}>
							{wallet.walletName}
							network
						</span>

						<PrimaryCTA
							ButtonText='Send USDC'
						/>
					</div>
				</div>


				<span className={style.WalletAddress}>
					{/* {wallet.walletAddress} */}
					0xEA40A86cD04E142fBF0d9fFc8170E2A82e80f5B0
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
						{/* {ethTransactions ? ethTransactions.map(transaction => {
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
						 */}
						
						<TransactionCard />
						<TransactionCard />
						<TransactionCard />
						<TransactionCard />
						<TransactionCard />
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default USDTWallet;