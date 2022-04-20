import './Sidebar.css';
function Sidebar() {
	return (
		<div className="sidebar-container">
			<div className="sidebar-items option-1">
				<i className="fas fa-tasks"></i>
				Tasks
			</div>
			<div className="sidebar-items option-2">
				<i className="far fa-sticky-note"></i>
				Notes
			</div>
			<div className="sidebar-items option-3">
				<i className="fas fa-user"></i>
				Profile
			</div>
			<div className="sidebar-items option-4">
				<i className="fas fa-cog"></i>
				Settings
			</div>
		</div>
	);
}
export default Sidebar;
