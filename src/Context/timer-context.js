import { createContext, useContext, useReducer } from 'react';
import { timeReducer } from '../Reducer/timeReducer';
const initTimer = {
	work: 25,
	break: 5,
};

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
	const [timerState, timerDispatch] = useReducer(timeReducer, initTimer);
	return (
		<TimerContext.Provider value={{ timerState, timerDispatch }}>
			{children}
		</TimerContext.Provider>
	);
};

const useTimer = () => useContext(TimerContext);

export { useTimer, TimerProvider };
