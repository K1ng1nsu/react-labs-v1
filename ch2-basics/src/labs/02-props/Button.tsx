import type { MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>버튼</button>;
};

export default Button;
