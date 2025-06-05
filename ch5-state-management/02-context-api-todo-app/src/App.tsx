import { TodoProvider } from "./context/TodoContext";
import TodoRoot from "./components/TodoRoot";

export default function App() {
  return (
    <div>
      <TodoProvider>
        <TodoRoot />
      </TodoProvider>
    </div>
  );
}
