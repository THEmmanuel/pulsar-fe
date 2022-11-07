import logo from './logo.svg';
import './App.css';
import SideBar from './containers/SideBar/SideBar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<SideBar />
			<Dashboard/>
		</div>
	);
}

export default App;
