import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div>
      Wrapper
      {children}
    </div>
  );
};

export default Wrapper;
