import { useTasklist } from '../../../Context/tasklist-context';

function Task({ task }) {
	const { tasklistDispatch } = useTasklist();

	return (
		<div
			className={
				task.isCompleted === false ? 'task task-pending' : 'task task-completed'
			}
		>
			{!task.isCompleted && (
				<input
					className="task-checkbox"
					type="checkbox"
					id="vehicle1"
					name="vehicle1"
					value="Bike"
					onChange={() =>
						tasklistDispatch({ type: 'TASK_COMPLETED', payload: task })
					}
				/>
			)}
			<label className="task-text" for="vehicle1">
				{' '}
				{task.name}
			</label>
			<div
				className="delete-btn"
				onClick={() => tasklistDispatch({ type: 'DELETE_TASK', payload: task })}
			>
				<i className="fas fa-times "></i>
			</div>
		</div>
	);
}

export default Task;
