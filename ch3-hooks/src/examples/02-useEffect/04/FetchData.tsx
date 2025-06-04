// 외부 API에서 데이터 불러오기
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function FetchData() {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    // 실제 API는 상황에 맞게 교체
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <div>
      <h3>데이터 가져오기</h3>
      {todo ? (
        <div>
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
        </div>
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
}
