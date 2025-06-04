import React, { useEffect } from 'react';

const MountLog = () => {
  useEffect(() => {
    console.log(`Mount!`);
  }, []);
  return <div>MountLog</div>;
};

export default MountLog;
