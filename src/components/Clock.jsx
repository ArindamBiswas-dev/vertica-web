import React from 'react';
import { useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = React.useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="clock">
      <p>{time.toTimeString().split(' ')[0]}</p>
    </div>
  );
};
