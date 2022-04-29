import { useContext, createContext, useReducer } from 'react';
import { tasklistReducer } from '../Reducer/tasklistReducer';

const TasklistContext = createContext();

let initTasklist = JSON.parse(localStorage.getItem('tasklist'));
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
