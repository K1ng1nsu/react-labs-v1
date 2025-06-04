import { useRef } from "react";

export default function MultiFocusForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const goNext = (e: React.KeyboardEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement | null>) => {
    if (e.key === "Enter") {
      nextRef.current?.focus();
    }
  };

  return (
    <form>
      <input
        ref={nameRef}
        placeholder="이름"
        onKeyDown={(e) => goNext(e, ageRef)}
      />
      <input
        ref={ageRef}
        placeholder="나이"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            alert("제출!");
          }
        }}
      />
    </form>
  );
}
