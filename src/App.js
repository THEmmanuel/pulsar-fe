import logo from './logo.svg';
import './App.css';

import SideBar from './containers/SideBar/SideBar';
import Dashboard from './pages/Dashboard/Dashboard';
import WalletsPage from './pages/WalletsPage/WalletsPage';

function App() {
	return (
		<div className="App">
			<SideBar />
			
			<Dashboard />
			<WalletsPage />
		</div>
	);
}

export default App;
