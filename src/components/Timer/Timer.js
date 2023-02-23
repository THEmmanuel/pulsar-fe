import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({ initialTime, onTimerEnd }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setTimeRemaining(0);
      clearInterval(timerIdRef.current);
      if (onTimerEnd) {
        onTimerEnd();
      }
      return;
    }

    const newTimerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    timerIdRef.current = newTimerId;

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [timeRemaining, onTimerEnd]);

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
