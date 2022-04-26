import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
	return (
		<div className="sidebar-container">
			<Link to="/">
				<div className="sidebar-items option-1">
					<i className="fas fa-tasks"></i>
					Tasks
				</div>
			</Link>
			<Link to="/notes">
				<div className="sidebar-items option-2">
					<i className="far fa-sticky-note"></i>
					Notes
				</div>
			</Link>
			<div className="sidebar-items option-3">
				<i className="fas fa-user"></i>
				Profile
			</div>
			<Link to="/settings">
				<div className="sidebar-items option-4">
					<i className="fas fa-cog"></i>
					Settings
				</div>
			</Link>
		</div>
	);
}
export default Sidebar;
