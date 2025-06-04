import { useRef, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const timerId = useRef<number | null>(null);

  const start = () => {
    if (timerId.current) return; // 이미 타이머가 있다면 중복 생성 방지
    timerId.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>멈춤</button>
    </div>
  );
}
