import './App.css';
import './Components/Header/Header.css';
import { Routes, Route } from 'react-router-dom';
import TaskList from './Components/MainSection/TaskList/TaskList';
import Sidebar from './Components/Sidebar/Sidebar';
import Timer from './Components/Timer/Timer';
import Notes from './Components/MainSection/Notes/Notes';
import Settings from './Components/MainSection/Settings/Settings';
import UnderDevPage from './Components/MainSection/UnderDevPage';
import Header from './Components//Header/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="mid-section">
				<Sidebar />
				<Routes>
					<Route path="/" element={<TaskList />} />
					<Route path="/notes" element={<Notes />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/profile" element={<UnderDevPage />} />
				</Routes>

				<Timer />
			</div>
		</div>
	);
}

export default App;
