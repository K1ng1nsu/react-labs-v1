import { Link } from "react-router-dom";

export default function PostNewPage() {
  return (
    <div>
      <h2>새 글 작성</h2>
      <Link to="/posts">목록으로</Link>
    </div>
  );
}
