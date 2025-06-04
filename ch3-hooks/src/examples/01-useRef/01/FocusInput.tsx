import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null); // DOM 요소 참조할 ref 객체 생성

  const handleFocus = () => {
    // ref.current에 실제 DOM이 들어있음
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        style={{ display: "block", marginBottom: "10px", height: "30px" }}
        ref={inputRef}
        type="text"
        placeholder="여기에 입력"
      />
      <button
        style={{ background: "white", border: "1px solid" }}
        onClick={handleFocus}
      >
        포커스
      </button>
    </div>
  );
}
