import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
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
import { ClerkProvider, useUser } from '@clerk/clerk-react';

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

	useEffect(() => {
		if (user) {
			addUserToDatabase()
		}
		console.log(user)
	}, [user])

	return (
		<Router>
			<div className="App">
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
							path='/wallet'
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
					</Routes>

				</section>
			</div>
		</Router>
	);
}

export default App;
