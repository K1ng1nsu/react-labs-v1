import React, { useState } from 'react';

const useCustomToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle] as const;
};

export default useCustomToggle;
