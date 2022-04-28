import './Settings.css';
import { useState } from 'react';
import { useTimer } from '../../../Context/timer-context';

function Settings() {
	const [work, setWork] = useState(25);
	const [breakTime, setBreakTime] = useState(5);
	const { timerDispatch } = useTimer();

	return (
		<div className="main-section-container notes-container">
			<h4 className="notes-heading">Settings⚙️</h4>
			<div className="u-margin-bottom-small"></div>

			<div className="setting-container">
				<div className="settings-item">
					<label className="setting-label">Work(in Mins): </label>
					<input
						type="number"
						className=" settings-input"
						onChange={(e) => {
							setWork(Number(e.target.value));
						}}
					/>
				</div>
				<div className="u-margin-bottom-small"></div>
				<div className="u-margin-bottom-small"></div>
				<button
					className="btn btn-primary"
					onClick={() => {
						timerDispatch({ type: 'SET_WORK', payload: work });
					}}
				>
					Set Work Time
				</button>
				<div className="u-margin-bottom-small"></div>
				<div className="u-margin-bottom-small"></div>

				<div className="settings-item">
					<label className="setting-label">Break(in Mins): </label>

					<input
						type="number"
						className="settings-input"
						onChange={(e) => setBreakTime(Number(e.target.value))}
					/>
				</div>
				<div className="u-margin-bottom-small"></div>
				<div className="u-margin-bottom-small"></div>

				<button
					className="btn btn-primary"
					onClick={() => {
						timerDispatch({ type: 'SET_BREAK', payload: breakTime });
					}}
				>
					Set Break Time
				</button>
			</div>
		</div>
	);
}

export default Settings;
