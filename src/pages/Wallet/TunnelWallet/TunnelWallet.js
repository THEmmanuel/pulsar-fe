import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../EthereumWallet/EthereumWallet.module.css';
import MainDropdown from '../../../components/MainDropdown/MainDropdown';
import TransferModal from '../../../containers/TransferModal/TransferModal';
import sendIcon from '../../../assets/send_icon.svg'

import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

import usdcWalletImage from '../../../assets/usdc-wallet.svg';
import qrPlaceholder from '../../../assets/qr_code_placeholder.png'
import { ethers } from 'ethers';
import { getETHBalance, getETHHistory, estimateGasOfTx } from '../../../utils/ethWallet';
import { getBTCBalance } from '../../../utils/btcWallet';
import TransactionCard from '../../../components/TransactionCard/TransactionCard';
// import DropDown from '../../components/DropDown/DropDown';
import PrimaryCTA from '../../../components/PrimaryCTA/PrimaryCTA';
import copyIcon from '../../../assets/copyIcon.svg';
import ethereumIcon from '../../../assets/ethereumIcon.svg'

const API_URL = process.env.REACT_APP_API_URL;


const EthereumWallet = () => {
	let walletName = 'ethereum';
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

	// eslint-disable-next-line react-hooks/exhaustive-deps

	// const [walletBalance, setWalletBalance] = useState(0);
	const walletAddress = wallet.walletAddress; // Example address

	const fetchTransactions = async (address) => {
		console.log('running');

		try {
			const response = await axios.get('https://api-sepolia.etherscan.io/api', {
				params: {
					module: 'account',
					action: 'tokentx',
					address: wallet.walletAddress,
					contractaddress: '0x3dC961b0bcEBC01088AF48307b3C4Ea2Bfd21D2F',
					page: 1,
					offset: 100,
					startblock: 0,
					endblock: 99999999,
					sort: 'desc',
					apikey: process.env.REACT_APP_ETHERSCAN_KEY
				}
			});

			if (response.data.status === "1") {
				const ethTransactions = response.data.result;
				setEthTransactions(ethTransactions);
				console.log(ethTransactions);
			} else {
				console.error('Error fetching transactions:', response.data.message);
			}
		} catch (error) {
			console.error('Error with API request:', error);
		}
	};



	useEffect(() => {
		const fetchBalance = async () => {
			try {
				const response = await axios.get(`${API_URL}/wallet-actions/get-token-balance/${walletAddress}/0x3dC961b0bcEBC01088AF48307b3C4Ea2Bfd21D2F`);
				setWalletBalance(response.data.balance);
			} catch (error) {
				console.error('Error fetching wallet balance:', error);
			}
		};

		fetchBalance();
		fetchTransactions()
	}, [walletAddress]);

	// useEffect(() => {
	// 	const fetchBalance = async () => {
	// 		if (wallet) {
	// 			const balance = await getETHBalance(wallet.walletAddress);
	// 			setWalletBalance(balance);
	// 		}
	// 	};
	// 	fetchBalance();
	// 	return () => {
	// 	};
	// }, [fetchTransactions, wallet]);

	return (
		<div className={style.WalletPage}>
			<div className={style.WalletInformation}>
				<div className={style.WalletCoinInformation}>
					<img src={ethereumIcon} alt="" className={style.WalletCoinImage} />
					<div className={style.WalletCoinPriceInfo}>
						<span className={style.WalletCoinTotal}>
							{/* <span className={style.WalletCoinTotal}>
								{walletBalance} TNL
							</span> */}

						</span>
						<span className={style.WalletCoinValue}>
							${parseFloat(walletBalance * 100).toFixed(2)}
						</span>
						{parseFloat(walletBalance).toFixed(2)} PULSAR

						<PrimaryCTA
							ButtonText='Send'
							click={() => setIsModalOpen(true)}
						/>
					</div>
				</div>

				{/* <div className={style.WalletTransactionInput}>
					<MainDropdown
						DropdownHeading='Token'
						PrimaryText={wallet.walletName}
						SecondaryText='Ether'
					/>

					<MainDropdown
						DropdownHeading='Network'
						PrimaryText='Ethereum'
						SecondaryText='ERC-20'
					/>
				</div> */}

				<div className={style.WalletAddressContainer}>
					<span className={style.WalletAddressText}>
						Your wallet address
					</span>

					<div className={style.WalletAddress}>
						<span>
							{wallet.walletAddress}
						</span>

						<img src={copyIcon} alt="" />
					</div>
				</div>

				{/* <img src={qrPlaceholder} alt="" /> */}

				{/* <div>
					{estimateGasOfTx('0xD22507B380D33a6CD115cAe487ce4FDb19543Ac2')}
				</div> */}
			</div>

			{isModalOpen ?
				<TransferModal
					type='ethereum'
					ETHAddress={wallet.walletAddress}
					privateKey={wallet.walletKey}
					cancel={() => setIsModalOpen(false)}
				/> : null}

			<div className={style.TransactionHistoryWrapper}>
				<span className={style.TransactionHistoryText}>
					Transaction History
				</span>

				<div className={style.TransactionHistory}>
					{ethTransactions ? ethTransactions.map(transaction => {
						const ethBalance = parseInt(transaction.value, 10) / 1e18
						return (
							<TransactionCard
								ethValue={ethBalance} ETH
								usdValue={ethBalance * 100} USD
								timestamp={new Date(transaction.timeStamp * 1000).toLocaleTimeString()}
								date={new Date(transaction.timeStamp * 1000).toLocaleDateString()}
								toAddress={transaction.to}
								fromAddress={transaction.from}
								txn={transaction.hash}
								userAddress={wallet.walletAddress}
							/>
						)
					}) : <span>Loading</span>}
				</div>
			</div>

			{/* Redesign these cards */}
		</div >
	);
}

export default EthereumWallet;


// <tr>
// 	<td>{parseInt(transaction.value, 10) / 1e18} ETH</td>
// 	{/* <td>ERC-20</td> */}
// 	<td>{transaction.from}</td>
// 	{/* <td>Completed</td> */}
// 	{/* <td>Deposit</td> */}
// 	<td>{new Date(transaction.timeStamp * 1000).toLocaleString()}</td>
// </tr>