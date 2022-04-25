import './Notes.css';
import { useState } from 'react';
import { useNotes } from '../../../Context/notes-context';
import { v4 as uuidv4 } from 'uuid';

function Notes() {
	const { notes, notesDispatch } = useNotes();
	const [currNote, setCurrNote] = useState({});
	return (
		<div className="main-section-container notes-container">
			<h4 className="notes-heading">Sticky Notes</h4>

			<div className="user-notes">
				<div className="note-box">
					<textarea
						placeholder="Take a note..."
						className="notes-input"
						onChange={(e) => {
							if (e.target.value.length > 180) {
								alert('Notes cannot be more than 180 characters');
							} else setCurrNote(e.target.value);
						}}
					></textarea>
					<button
						className="btn btn-notes btn-primary"
						onClick={() =>
							notesDispatch({
								type: 'ADD_NOTE',
								payload: { id: uuidv4(), description: currNote },
							})
						}
					>
						Add a Note
					</button>
				</div>
				{notes?.map((note) => {
					return (
						<div className="note-component">
							<div className="note-text">{note.description}</div>
							<div
								className="note-icon"
								onClick={() =>
									notesDispatch({ type: 'DELETE_NOTE', payload: note.id })
								}
							>
								<i class="fas fa-trash"></i>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Notes;
