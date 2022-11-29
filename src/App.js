import logo from './logo.svg';
import './App.css';

import SideBar from './containers/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import WalletsPage from './pages/WalletsPage/WalletsPage';
import Wallet from './pages/Wallet/Wallet';
import MyAds from './pages/MyAds/MyAds';
import UserPage from './pages/UserPage/UserPage';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	// Link,
	// useLocation
} from 'react-router-dom';
import PeerToPeerPage from './pages/PeerToPeerPage/PeerToPeerPage';

function App() {
	return (
		<Router>
			<div className="App">
				<SideBar />
				<section >
					<NavBar />
					<Routes>
						<Route
							exact
							path='/'
							element={<Dashboard />}
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
					</Routes>

				</section>
			</div>
		</Router>
	);
}

export default App;
