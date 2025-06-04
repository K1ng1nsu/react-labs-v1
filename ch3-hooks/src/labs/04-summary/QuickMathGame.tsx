import React, { useEffect, useRef, useState } from 'react';
import useCustomToggle from '../03-custom-hooks/useCustomToggle';

type MathGameState = {
  num1: number;
  num2: number;
  answer: number;
  userAnswer?: number;
};

function createNewGame(): MathGameState {
  const num1 = Math.floor(Math.random() * 91) + 10;
  const num2 = Math.floor(Math.random() * 91) + 10;
  console.log('create new game');
  console.log(num1 * num2);

  return {
    num1,
    num2,
    answer: num1 * num2,
  };
}

const QuickMathGame = () => {
  const [mathGame, setMathGame] = useState<MathGameState>({
    num1: 0,
    num2: 0,
    answer: 0,
  });
  const [timeCount, setTimeCount] = useState(0);
  const [reset, resetToggle] = useCustomToggle();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMathGame(createNewGame());
    setTimeCount(0);
    inputRef.current!.value = '';

    const interval = setInterval(() => {
      setTimeCount((prev) => {
        if (prev === 4) {
          clearInterval(interval);
          setMathGame((p) => {
            return { ...p!, userAnswer: +inputRef.current!.value };
          });
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      setTimeCount(0);
    };
  }, [reset]);

  const timeOut = 5;
  const leftTime = timeOut - timeCount;

  let afterMessage = null;
  if (leftTime == 0) {
    afterMessage = (
      <div>
        <p>
          {' '}
          {mathGame.answer == mathGame.userAnswer ? '정답' : '오답'}입니다.{' '}
        </p>
        <p>유저 제출:{mathGame.userAnswer || '정답을 고르지 않음'}</p>
        <p>
          정답은 {mathGame.num1} * {mathGame.num2} = {mathGame.answer}입니다.
        </p>
        <button onClick={resetToggle}>다시하기</button>
      </div>
    );
  }

  return (
    <div>
      <h4>QuickMathGame</h4>
      <p>남은 시간: {leftTime}</p>
      <p>
        {mathGame.num1} * {mathGame.num2} =
        <input type="number" ref={inputRef} />
      </p>
      {afterMessage}
    </div>
  );
};

export default QuickMathGame;
