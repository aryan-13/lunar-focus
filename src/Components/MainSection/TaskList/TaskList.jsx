import './TaskList.css';
import Task from './Task';
function TaskList() {
	return (
		<div className="main-section-container">
			<input className="input-bar" placeholder="Click to quickly add a task" />
			<button className="btn">Add</button>
			<div className="task-list-container">
				<div className="task-container">
					<h2 className="task-heading">
						Tasks <span className="task-count">3</span>
					</h2>
					<Task />
					<Task />
					<Task />
					<Task />
				</div>
				<div className="task-container">
					<h2 className="task-heading">Completed</h2>
					<div className="task task-completed">
						<label for="vehicle1">
							{' '}
							I have to complete my homeworkI have to complete my homework
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TaskList;
