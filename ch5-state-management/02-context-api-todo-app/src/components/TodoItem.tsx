import { useTodoContext, type Todo } from "../context/TodoContext";

interface Props {
  todo: Todo;
}
export default function TodoItem({ todo }: Props) {
  const { deleteTodo } = useTodoContext();

  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <span style={{ flex: 1 }}>• {todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}
