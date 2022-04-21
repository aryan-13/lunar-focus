const tasklistReducer = (state, action) => {
	const addTask = (state, task) => {
		return {
			...state,
			tasklistArr: [...state.tasklistArr, task],
			taskPending: state.taskPending + 1,
		};
	};
	const removeTask = (state, task) => {
		const updatedTasklist = state.tasklistArr.filter(
			(item) => item.id !== task.id
		);
		const updatedCompletedTasks = state.completedTasks.filter(
			(item) => item.id !== task.id
		);
		const isCompleted = task.isCompleted;
		return {
			...state,
			tasklistArr: updatedTasklist,
			taskPending: isCompleted ? state.taskPending : state.taskPending - 1,
			tasksCompleted: isCompleted
				? state.tasksCompleted
				: state.tasksCompleted - 1,
			completedTasks: updatedCompletedTasks,
		};
	};
	const taskCompleted = (state, task) => {
		const updatedTasklist = state.tasklistArr.filter(
			(item) => item.id !== task.id
		);
		const updatedTask = { ...task, isCompleted: true };
		return {
			...state,
			tasklistArr: updatedTasklist,
			taskPending: state.taskPending - 1,
			completedTasks: [...state.completedTasks, updatedTask],
			tasksCompleted: state.tasksCompleted + 1,
		};
	};
	switch (action.type) {
		case 'ADD_TASK':
			return addTask(state, action.payload);
		case 'DELETE_TASK':
			return removeTask(state, action.payload);
		case 'TASK_COMPLETED':
			return taskCompleted(state, action.payload);
		default:
			return state;
	}
};
export { tasklistReducer };
