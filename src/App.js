import logo from './logo.svg';
import './App.css';

import SideBar from './containers/SideBar/SideBar';
import Dashboard from './pages/Dashboard/Dashboard';
import WalletsPage from './pages/WalletsPage/WalletsPage';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	// Link,
	// useLocation
} from 'react-router-dom';


function App() {
	return (
		<Router>
			<div className="App">
				<SideBar />

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
				</Routes>
			</div>
		</Router>
	);
}

export default App;
