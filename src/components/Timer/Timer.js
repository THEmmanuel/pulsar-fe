import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialTime, onTimerEnd }) {
	const [timeRemaining, setTimeRemaining] = useState(initialTime);
	const [timerId, setTimerId] = useState(null);

	useEffect(() => {
		if (timeRemaining <= 0) {
			setTimeRemaining(0);
			clearInterval(timerId);
			if (onTimerEnd) {
				onTimerEnd();
			}
			return;
		}

		const newTimerId = setInterval(() => {
			setTimeRemaining((prevTime) => prevTime - 1);
		}, 1000);

		setTimerId(newTimerId);

		return () => {
			clearInterval(timerId);
		};
	}, [timeRemaining, timerId, onTimerEnd]);

	const minutes = Math.floor(timeRemaining / 60);
	const seconds = timeRemaining % 60;
	const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

	return (
		<div>
			<h1>{timeString}</h1>
		</div>
	);
}

export default CountdownTimer;
