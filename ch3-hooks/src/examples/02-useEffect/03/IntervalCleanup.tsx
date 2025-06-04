// setInterval을 사용한 타이머 + 클린업
import { useEffect, useState } from "react";

export default function IntervalCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 클린업: 언마운트 시 타이머 해제
    return () => clearInterval(timer);
  }, []); // 마운트 시 1회 실행

  return <div>{seconds}초 경과</div>;
}
