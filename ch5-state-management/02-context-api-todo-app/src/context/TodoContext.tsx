import { createContext, useContext, useState, ReactNode } from "react";

// Todo 타입
export interface Todo {
  id: number;
  text: string;
}

// Context value 타입
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
}

// Context 생성 (초기값은 null)
const TodoContext = createContext<TodoContextType | null>(null);

// Provider 컴포넌트
export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "리액트 공부" },
    { id: 2, text: "스프링 공부하기" },
    { id: 3, text: "스쿼트 100개 하기" },
  ]);

  function addTodo(text: string) {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  }

  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// 커스텀 훅 (매번 null 체크 방지)
export function useTodoContext() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("TodoProvider로 감싸주세요!");
  return ctx;
}
