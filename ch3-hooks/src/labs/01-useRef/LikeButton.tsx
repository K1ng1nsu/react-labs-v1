import React, { useRef, useState } from 'react';

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const timer = useRef<null | number>(null);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!timer.current) {
      setLikeCount((prev) => prev + 1);
      const target = e.target as HTMLButtonElement;
      target.disabled = true;
      timer.current = setTimeout(() => {
        target.disabled = false;
        timer.current = null;
      }, 1000);
    }
  };

  return (
    <div>
      <h4>LikeButton</h4>
      <p>좋아요 : {likeCount} </p>
      <button onClick={clickHandler}>좋아요</button>
    </div>
  );
};

export default LikeButton;
