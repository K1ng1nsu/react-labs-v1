import React from 'react';

type Props = {
  nickname?: string;
};

const Welcome = ({ nickname }: Props) => {
  return (
    <>
      {nickname ? (
        <p>환영합니다,{nickname}님!</p>
      ) : (
        <p>방문자님, 환영합니다!</p>
      )}
    </>
  );
};

export default Welcome;
