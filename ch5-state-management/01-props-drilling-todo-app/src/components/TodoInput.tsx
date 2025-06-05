import { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

export default function TodoInput({ addTodo }: Props) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 8, marginBottom: 20 }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일 추가하기"
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit">추가</button>
    </form>
  );
}
