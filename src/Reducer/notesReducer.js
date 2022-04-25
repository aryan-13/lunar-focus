const removeNote = (state, action) => {
	let updateList = state.filter((item) => item.id !== action.payload);
	return updateList;
};
const notesReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return [...state, action.payload];
		case 'DELETE_NOTE':
			return removeNote(state, action);
		default:
			return state;
	}
};
export { notesReducer };
