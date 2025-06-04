import { useRef, useState } from "react";

export default function PrevValue() {
  const [value, setValue] = useState("");
  const prevValue = useRef<string>(""); // 렌더링과 무관하게 값 유지

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    prevValue.current = value; // 변경 전 값을 저장
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>이전 값: {prevValue.current}</p>
    </div>
  );
}
