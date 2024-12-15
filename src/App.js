import logo from './logo.svg';
import './App.css';
import React, { useEffect, useContext, useState, useRef } from 'react';
import axios from 'axios';


import SideBar from './containers/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import WalletsPage from './pages/WalletsPage/WalletsPage';
import Wallet from './pages/Wallet/Wallet';
import MyAds from './pages/MyAds/MyAds';
import UserPage from './pages/UserPage/UserPage';
import BuyPage from './pages/Buy/BuyPage';
import SellPage from './pages/Sell/SellPage';
import PeerToPeerPage from './pages/PeerToPeerPage/PeerToPeerPage';
import Login from './pages/Auth/Login';
import CreateAdPage from './pages/CreateAdPage/CreateAdPage';
import TransactionsHistory from './pages/TransactionsHistory/TransactionsHistory';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import Order from './pages/OrderPage/Order';
import TokenFaucet from './pages/TokenFaucet/TokenFaucet';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import MobileBottomNav from './components/MobileBottomNav/MobileBottomNav';
import ChatPage from './pages/ChatPage/ChatPage';

import { useUser } from '@clerk/clerk-react';
import { UserContext } from './contexts/UserContext';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	// Link,
	// useLocation
} from 'react-router-dom';
import OrderPage from './pages/Buy/BuyPage';

import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/dark.css';


const API_URL = process.env.REACT_APP_API_URL;


function App() {
	const { user } = useUser();
	const [wallets, setWallets] = useState([])
	const [tokenPrices, setTokenPrices] = useState(1)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [coinData, setCoinData] = useState({});
	const hasFetched = useRef(false); // Track if data was fetched

	useEffect(() => {
		const fetchBalance = async () => {
			try {
				const response1 = await axios.get(`${API_URL}/wallet-actions/get-token-usd-balance/0xD22507B380D33a6CD115cAe487ce4FDb19543Ac2/ether/ethereum`);
				const response2 = await axios.get(`${API_URL}/wallet-actions/get-token-usd-balance/0xD22507B380D33a6CD115cAe487ce4FDb19543Ac2/0x3dC961b0bcEBC01088AF48307b3C4Ea2Bfd21D2F/tnl`);

				console.log(response1.data);
				console.log(response2.data);
			} catch (error) {
				console.error('Error fetching wallet balance:', error);
			}
		};

		if (!hasFetched.current) {
			fetchBalance();
			hasFetched.current = true; // Mark as fetched
		}
	}, []); // Dependency array ensures this runs once


	const addUserToDatabase = () => {
		axios.post(`${API_URL}/users`, {
			email: user.primaryEmailAddress.emailAddress,
			username: user.username,
			userID: user.id
		}).then(
			res => console.log(res)
		).catch(err => console.log(err))
		console.log('adding user to database...')
	};

	const getWalletDetails = () => {
		axios.get(`${API_URL}/users/${user.id}`)
			.then(res => setWallets(res.data.userWallets))
			.catch(err => console.log(err))
		console.log('///get wallet details')
		console.log(`${API_URL}/users/${user.id}`)
	}


	const coinGeckoAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Csolana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'

	useEffect(() => {
		axios.get(coinGeckoAPI)
			.then(res => setCoinData(res.data))
			.catch(err => console.log(err))
	}, [])


	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		console.log('address' + API_URL)
		if (user) {
			addUserToDatabase()
			getWalletDetails()
		}
		console.log(user)
	}, [user])

	console.log(wallets)


	return (
		<Router>
			<div className="App">
				<UserContext.Provider value={{
					wallets,
					setWallets,
					coinData,
					setCoinData
				}}>

					{windowWidth < 1280
						? <MobileBottomNav />
						: <SideBar />
					}

					<section className='Page-container'>
						<NavBar />
						<div className='pages-wrapper'>
							<Routes>
								<Route
									exact
									path='/'
									element={<Dashboard />}
								/>

								<Route
									exact
									path='/login'
									element={<Login />}
								/>

								<Route
									exact
									path='/home'
									element={<Dashboard />}
								/>

								<Route
									exact
									path='/wallets'
									element={<WalletsPage />}
								/>

								<Route
									exact
									path='/wallet/:walletName'
									element={<Wallet />}
								/>

								<Route
									exact
									path='/my-ads'
									element={<MyAds />}
								/>

								<Route
									exact
									path='/'
									element={<Dashboard />}
								/>

								<Route
									exact
									path='/p2p/:adType'
									element={<PeerToPeerPage />}
								/>

								<Route
									exact
									path='/user-page'
									element={<UserPage />}
								/>

								<Route
									exact
									path='/buy-page'
									element={<BuyPage />}
								/>

								<Route
									exact
									path='/sell-page'
									element={<SellPage />}
								/>

								<Route
									exact
									path='/history'
									element={<HistoryPage />}
								/>

								<Route
									exact
									path='/transaction'
									element={<TransactionPage />}
								/>

								<Route
									exact
									path='/create-ad'
									element={<CreateAdPage />}
								/>

								<Route
									exact
									path='/faucet'
									element={<TokenFaucet />}
								/>

								<Route
									exact
									path='/order/:id/:amount'
									element={<Order />}
								/>

								<Route
									exact
									path='/history'
									element={<HistoryPage />}
								/>

								<Route
									exact
									path='/chat'
									element={<ChatPage />}
								/>

							</Routes>
						</div>
					</section>
				</UserContext.Provider>
			</div>
		</Router>
	);
}

export default App;