// 특정 state가 바뀔 때마다 효과 실행
import { useState, useEffect } from "react";

export default function EffectWithState() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count 값이 바뀜:", count);
  }, [count]); // count가 바뀔 때마다 실행

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((n) => n + 1)}>+1</button>
    </div>
  );
}
