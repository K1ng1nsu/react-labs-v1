import React, { useState } from 'react';

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter : {count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  );
};

export default Counter;
