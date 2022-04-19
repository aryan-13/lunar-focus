import './App.css';
import './Components/Header/Header.css';
import TaskList from './Components/MainSection/TaskList/TaskList';
import Sidebar from './Components/Sidebar/Sidebar';
import Timer from './Components/Timer/Timer';
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
			<div className="mid-section">
				<Sidebar />
				<TaskList />
				<Timer />
			</div>
		</div>
	);
}

export default App;
