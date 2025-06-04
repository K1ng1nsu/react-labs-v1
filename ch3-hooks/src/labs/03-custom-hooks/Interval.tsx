import React, { useState } from 'react';
import useInterval from './useInterval';

const Interval = () => {
  const [count, setCount] = useState(0);
  useInterval(() => setCount((prev) => prev + 1), 1000);
  return <div>Interval Count: {count}</div>;
};

export default Interval;
