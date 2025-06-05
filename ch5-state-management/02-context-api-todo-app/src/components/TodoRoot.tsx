import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoRoot() {
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
      <TodoInput />
      <TodoList />
    </div>
  );
}
