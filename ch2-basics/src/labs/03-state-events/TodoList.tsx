import React, { useRef, useState } from 'react';

type Props = {};

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setTodos((prev) => [
            ...prev,
            { id: Math.random(), text: inputRef.current!.value },
          ]);
        }}
      >
        추가
      </button>
      <div>
        <ul>
          {(todos.length > 0 &&
            todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.text}
                  <button
                    onClick={() => {
                      setTodos((prev) => {
                        return prev.splice(
                          prev.findIndex((t) => t.id == todo.id),
                          1
                        );
                      });
                    }}
                  >
                    삭제
                  </button>
                </li>
              );
            })) || <li>할 일이 없습니다. </li>}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
