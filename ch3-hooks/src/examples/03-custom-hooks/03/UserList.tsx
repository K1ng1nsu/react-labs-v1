import { useFetch } from "./useFetch";

export default function UserList() {
  const { data, loading, error } = useFetch<{ id: number; name: string }[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러: {error.message}</div>;
  if (!data) return null;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
