import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialTime, onTimerEnd }) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      onTimerEnd();
    }
  }, [timeRemaining, onTimerEnd]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <h1>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </h1>
    </div>
  );
}

export default CountdownTimer;
