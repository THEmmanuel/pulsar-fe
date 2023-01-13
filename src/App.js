import logo from './logo.svg';
import './App.css';
import React, { useEffect, useContext, useState } from 'react';
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

import { useUser } from '@clerk/clerk-react';
import { UserContext } from './contexts/UserContext';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	// Link,
	// useLocation
} from 'react-router-dom';

const API_URL = 'http://localhost:9000';

function App() {
	const { user } = useUser();
	const [wallets, setWallets] = useState([])

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

	useEffect(() => {
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
					setWallets
				}}>
					<SideBar />
					<section className='Page-container'>
						<NavBar />
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
								path='/p2p'
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
								path='/create-ad'
								element={<CreateAdPage />}
							/>
						</Routes>

					</section>
				</UserContext.Provider>
			</div>
		</Router>
	);
}

export default App;
