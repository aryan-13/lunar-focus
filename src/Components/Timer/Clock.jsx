import React from 'react';
import './Timer.css';
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useTimer } from '../../Context/timer-context';
const children = ({ remainingTime }) => {
	const minutes = Math.floor((remainingTime % 3600) / 60);
	const seconds = remainingTime % 60;

	return (
		<div className="timevalue">
			{minutes}:{seconds}
		</div>
	);
};
function Clock({ type, key, setKey }) {
	const { timerState } = useTimer();
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className="timer">
				<CountdownCircleTimer
					isPlaying={toggle}
					key={key}
					duration={
						type === 'work' ? timerState.work * 60 : timerState.break * 60
					}
					colors={[type === 'work' ? '#FCA5A5' : '#6EE7B7']}
					strokeWidth={24}
					size={250}
				>
					{children}
				</CountdownCircleTimer>
			</div>
			<div className="btn-container">
				<button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
					{toggle ? 'Pause' : 'Start'}
				</button>

				<button
					className="btn btn-secondary"
					onClick={() => setKey((el) => el + 1)}
				>
					Reset
				</button>
			</div>
		</>
	);
}

export default Clock;
