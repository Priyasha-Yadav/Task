
// Problem: Create a timer that starts counting when you click "Start" and stops on "Stop".

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval); 
  }, [running]);

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>⏰ Timer: {seconds} sec</h2>
      <button onClick={startTimer} disabled={running}>Start</button>
      <button onClick={stopTimer} disabled={!running}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
