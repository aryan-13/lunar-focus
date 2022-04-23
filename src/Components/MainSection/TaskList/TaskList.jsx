import './TaskList.css';
import '../../../common.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import { useTasklist } from '../../../Context/tasklist-context';
function TaskList() {
	const [task, setTask] = useState('');
	const { tasklist, tasklistDispatch } = useTasklist();
	const taskHandler = (e) => {
		if (e.target.value.length > 25) {
			alert('Task cannot be more than 25 characters');
			return;
		} else {
			setTask(e.target.value);
		}
	};
	const addTask = () => {
		tasklistDispatch({
			type: 'ADD_TASK',
			payload: { id: uuidv4(), name: task, isCompleted: false },
		});
		setTask('');
	};
	return (
		<div className="main-section-container">
			<input
				className="input-bar"
				placeholder="Click to quickly add a task"
				onChange={(e) => taskHandler(e)}
				value={task}
			/>
			<button className="btn btn-grey" onClick={() => addTask()}>
				Add
			</button>
			<div className="task-list-container">
				<div className="task-container">
					<h2 className="task-heading">
						Tasks <span className="task-count">{tasklist.taskPending}</span>
					</h2>
					{tasklist.tasklistArr?.map((item) => {
						return <Task key={item.id} task={item} />;
					})}
				</div>
				<div className="task-container">
					<h2 className="task-heading">Completed</h2>
					{tasklist.completedTasks?.map((item) => {
						return <Task key={item.id} task={item} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default TaskList;
