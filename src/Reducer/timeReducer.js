const setBreakTime = (state, action) => {
	if (action.payload > 0 && action.payload < 61)
		return { ...state, break: action.payload };
	else {
		alert('Time must be between 0 to 60 mins');
		return state;
	}
};
const setWorkTime = (state, action) => {
	if (action.payload > 0 && action.payload < 61)
		return { ...state, work: action.payload };
	else {
		alert('Time must be between 0 to 60 mins');
		return state;
	}
};
const timeReducer = (state, action) => {
	switch (action.type) {
		case 'SET_WORK':
			return setWorkTime(state, action);
		case 'SET_BREAK':
			return setBreakTime(state, action);

		default:
			return state;
	}
};
export { timeReducer };
