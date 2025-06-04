import React, { useEffect, useState } from 'react';

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count is', count);
  }, [count]);

  return (
    <div>
      <h4>CounterEffect</h4>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default CounterEffect;
