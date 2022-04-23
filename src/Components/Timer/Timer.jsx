import './Timer.css';
import { useState } from 'react';
import { useTimer } from '../../Context/timer-context';
import Clock from './Clock';

function Timer() {
	const { timerDispatch } = useTimer();
	const [timerWork, setTimerWork] = useState(true);
	const [tempKey1, setTempKey1] = useState(1);
	const [tempKey2, setTempKey2] = useState(1000);
	return (
		<div className="timer-container">
			<div className="tab-container">
				<button
					className="tab tab-work"
					onClick={() => {
						setTimerWork(true);
						timerDispatch({ type: 'SET_WORK', payload: 25 });
					}}
				>
					Work
				</button>
				<button
					className="tab tab-break"
					onClick={() => {
						setTimerWork(false);
						timerDispatch({ type: 'SET_BREAK', payload: 5 });
					}}
				>
					Break
				</button>
			</div>
			{timerWork ? (
				<Clock key={tempKey1} setKey={setTempKey1} type={'work'} />
			) : (
				<Clock key={tempKey2} setKey={setTempKey2} type={'break'} />
			)}
		</div>
	);
}

export default Timer;
