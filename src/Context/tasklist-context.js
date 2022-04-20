import { useContext, createContext, useReducer } from 'react';
import { tasklistReducer } from '../Reducer/tasklistReducer';

const TasklistContext = createContext();

let initTasklist = {
	tasklist: [],
	taskPending: 0,
	tasksCompleted: 0,
};
const TasklistProvider = ({ children }) => {
	const [tasklist, dispatch] = useReducer(tasklistReducer, initTasklist);
	return (
		<TasklistContext.Provider value={(tasklist, dispatch)}>
			{children}
		</TasklistContext.Provider>
	);
};

const useTasklist = () => useContext(TasklistContext);

export { useTasklist, TasklistProvider };
