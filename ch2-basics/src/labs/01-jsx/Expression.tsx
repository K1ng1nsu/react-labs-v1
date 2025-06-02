import React from 'react';

type Props = {};

const Expression = (props: Props) => {
  const a = 5;
  const b = 3;

  const add = (x: number, y: number) => {
    return x + y;
  };

  return (
    <div>
      <p> a = {a} </p>
      <p> b = {b} </p>
      <p> a + b = {a + b} </p>
      <p> add(a,b) = {add(a, b)} </p>
    </div>
  );
};

export default Expression;
