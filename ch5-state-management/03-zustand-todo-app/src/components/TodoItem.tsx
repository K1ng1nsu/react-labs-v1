import { type Todo, useTodoStore } from "../store/todoStore";

interface Props {
  todo: Todo;
}
export default function TodoItem({ todo }: Props) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <span style={{ flex: 1 }}>• {todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}
