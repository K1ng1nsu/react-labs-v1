import type { Todo } from "./TodoRoot";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, deleteTodo }: Props) {
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <span style={{ flex: 1 }}>• {todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}
