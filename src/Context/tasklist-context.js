import { useContext, createContext, useReducer } from 'react';
import { tasklistReducer } from '../Reducer/tasklistReducer';

const TasklistContext = createContext();

let initTasklist = {
	tasklistArr: [],
	completedTasks: [],
	taskPending: 0,
	tasksCompleted: 0,
};
const TasklistProvider = ({ children }) => {
	const [tasklist, tasklistDispatch] = useReducer(
		tasklistReducer,
		initTasklist
	);
	return (
		<TasklistContext.Provider value={{ tasklist, tasklistDispatch }}>
			{children}
		</TasklistContext.Provider>
	);
};

const useTasklist = () => useContext(TasklistContext);

export { useTasklist, TasklistProvider };
