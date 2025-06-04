import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Clean up!');
    };
  }, []);

  return <div>Timer: {count}</div>;
};

export default Timer;
