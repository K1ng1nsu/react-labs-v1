import { useParams, Link } from "react-router-dom";

export default function PostEditPage() {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 수정 (id: {id})</h2>
      <p>폼 구현 예정. (실습 예시)</p>
      <Link to={`/posts/${id}`}>← 상세로</Link>
    </div>
  );
} 