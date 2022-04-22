const timeReducer = (state, action) => {
	switch (action.type) {
		case 'SET_WORK':
			return { ...state, work: action.payload };
		case 'SET_BREAK':
			return { ...state, break: action.payload };

		default:
			return state;
	}
};
export { timeReducer };
