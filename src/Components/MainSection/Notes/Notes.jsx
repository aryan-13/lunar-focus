import './Notes.css';

function Notes() {
	return (
		<div className="main-section-container notes-container">
			<h4 className="notes-heading">Sticky Notes</h4>

			<div className="user-notes">
				<div className="note-box">
					<textarea
						placeholder="Take a note..."
						className="notes-input"
					></textarea>
					<button className="btn btn-notes btn-primary">Add a Note</button>
				</div>
				<div className="note-component">
					<div className="note-text">
						I want pizza. I want pizza. I want pizza. I want pizza. I want
						pizza. I want pizza. I want pizza. I want pizza. I want pizza. I
						want pizza.
					</div>
					<div className="note-icon">
						<i class="fas fa-trash"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Notes;
