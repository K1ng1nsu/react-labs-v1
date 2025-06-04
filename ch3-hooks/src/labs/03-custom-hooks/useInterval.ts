import React, { useEffect } from 'react';
const useInterval = (callback: Function, ms: number) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, ms);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return;
};

export default useInterval;
