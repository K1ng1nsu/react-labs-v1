import React from 'react';

type Props = {};

function Hello({}: Props) {
  return <div>Hello</div>;
}

export default function HelloBox(params: type) {
  return (
    <>
      <Hello />
      <Hello />
      <Hello />
    </>
  );
}
