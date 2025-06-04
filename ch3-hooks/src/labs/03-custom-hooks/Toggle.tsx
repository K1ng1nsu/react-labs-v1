import React from 'react';
import useCustomToggle from './useCustomToggle';

const Toggle = () => {
  const [value, toggle] = useCustomToggle(false);

  return (
    <div>
      <p>Toggle : {String(value)}</p>
      <button onClick={toggle}>toggle</button>
    </div>
  );
};

export default Toggle;
