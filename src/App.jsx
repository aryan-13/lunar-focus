import './App.css';
import './Components/Header/Header.css';
import Sidebar from './Components/Sidebar/Sidebar';
function Header() {
	return (
		<div className="header-container">
			<h4 className="header-text">Lunar Focus</h4>
			<h5 className="header-date">20th April, 2022</h5>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<Header />
			<Sidebar />
		</div>
	);
}

export default App;
