import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export default function TodoInput() {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

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
