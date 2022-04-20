import './Sidebar.css';
function Sidebar() {
	return (
		<div className="sidebar-container">
			<div className="sidebar-items">
				<i class="fas fa-tasks"></i>
				Tasks
			</div>
			<div className="sidebar-items">
				<i class="far fa-sticky-note"></i>
				Notes
			</div>
			<div className="sidebar-items">
				<i class="fas fa-user"></i>
				Profile
			</div>
			<div className="sidebar-items">
				<i class="fas fa-cog"></i>
				Settings
			</div>
		</div>
	);
}
export default Sidebar;
