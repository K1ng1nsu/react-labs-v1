import React, { useState } from 'react';

type Props = {};

const ToggleMessage = (props: Props) => {
  const [isVisible, setIsvisible] = useState(false);

  return (
    <div>
      {isVisible && <p>비밀 메시지입니다!</p>}
      <button
        onClick={() => {
          setIsvisible((prev) => !prev);
        }}
      >
        메시지 보기/숨기기
      </button>
    </div>
  );
};

export default ToggleMessage;
