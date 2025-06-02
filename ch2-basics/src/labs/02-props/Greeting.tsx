import React from 'react';

type Props = {
  name: string;
};

const Greeting = ({ name }: Props) => {
  return <p>안녕하세요, {name}님!</p>;
};

export default Greeting;
