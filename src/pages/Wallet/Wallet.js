import React, { useEffect, useState } from 'react';
import style from './Wallet.module.css';
import MainDropdown from '../../components/MainDropdown/MainDropdown';

import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import usdcWalletImage from '../../assets/usdc-wallet.svg';
import qrPlaceholder from '../../assets/qr_code_placeholder.png'
import { ethers } from 'ethers';
// import DropDown from '../../components/DropDown/DropDown';

const getETHBalance = async (address) => {
	const network = 'goerli';
	const provider = ethers.getDefaultProvider(network);
	const balance = await provider.getBalance(address);
	const EthBalance = ethers.utils.formatEther(balance);
	return EthBalance;
}


const Wallet = () => {
	let { walletName } = useParams();
	const [wallet, setWallet] = useState({})
	const { wallets } = useContext(UserContext);
	const [walletBalance, setWalletBalance] = useState(0)
	let userWallet = wallets.find(wallet => wallet.walletName === walletName)

	useEffect(() => {
		if (wallets.length !== 0) {
			setWallet({ ...userWallet })
		}
	}, [userWallet]);

	// useEffect(() => {
	// 	if (wallet) {
	// 		setWalletBalance(getETHBalance(wallet.walletAddress)
	// 		)
	// 	}
	// }, [wallet])

	useEffect(() => {
		const fetchBalance = async () => {
			if (wallet) {
				const balance = await getETHBalance(wallet.walletAddress);
				setWalletBalance(balance);
			}
		};
		fetchBalance();
		return () => {
			// clean up logic
		};
	}, [wallet]);

	console.log(userWallet)
	console.log(wallets.length)
	console.log(wallet)
	console.log(wallet.walletAddress)
	console.log(walletBalance)



	return (
		<div className={style.WalletPage}>
			<div className={style.WalletInformation}>
				<div className={style.WalletCoinInformation}>
					<img src={usdcWalletImage} alt="" className={style.WalletCoinImage} />
					<div className={style.WalletCoinPriceInfo}>
						<span className={style.WalletCoinTotal}>{walletBalance} ETH</span>
						<span className={style.WalletCoinValue}>${walletBalance * 1200.08}</span>
					</div>
				</div>

				<MainDropdown
					DropdownHeading='Token'
					PrimaryText={wallet.walletName}
					SecondaryText='Tether'
				/>

				<MainDropdown
					DropdownHeading='Network'
					PrimaryText='Ethereum'
					SecondaryText='ERC-20'
				/>
				<span className={style.WalletAddress}>
					{
						wallet.walletAddress
					}
				</span>

				<img src={qrPlaceholder} alt="" />
			</div>

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
						<tr>
							<td>7.78 ETH</td>
							<td>ERC-20</td>
							<td>View Transaction</td>
							<td>Completed</td>
							<td>Deposit</td>
							<td>2021/11/10 23:01:33</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Wallet;