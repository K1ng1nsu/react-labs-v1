import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodoContext();
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
