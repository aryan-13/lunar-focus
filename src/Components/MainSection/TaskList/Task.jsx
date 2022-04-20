import React from 'react';

function Task() {
	return (
		<div className="task task-pending">
			<input
				className="task-checkbox"
				type="checkbox"
				id="vehicle1"
				name="vehicle1"
				value="Bike"
			/>
			<label for="vehicle1">
				{' '}
				I have to complete my homeworkI have to complete my homework
			</label>
		</div>
	);
}

export default Task;
