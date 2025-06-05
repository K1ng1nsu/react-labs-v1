import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export interface Todo {
  id: number;
  text: string;
}

export default function TodoRoot() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "리액트 공부" },
    { id: 2, text: "스프링 공부하기" },
    { id: 3, text: "스쿼트 100개 하기" },
  ]);

  // 할 일 추가
  function addTodo(text: string) {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  }

  // 할 일 삭제
  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        border: "1px solid #ddd",
        padding: 24,
        borderRadius: 8,
      }}
    >
      <h2>To-do List</h2>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
