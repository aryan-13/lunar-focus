import { useContext, createContext, useReducer } from 'react';
import { notesReducer } from '../Reducer/notesReducer';

const NotesContext = createContext();
const initNotesList = [];
const NotesProvider = ({ children }) => {
	const [notes, notesDispatch] = useReducer(notesReducer, initNotesList);
	return (
		<NotesContext.Provider value={{ notes, notesDispatch }}>
			{children}
		</NotesContext.Provider>
	);
};
const useNotes = () => useContext(NotesContext);
export { useNotes, NotesProvider };
