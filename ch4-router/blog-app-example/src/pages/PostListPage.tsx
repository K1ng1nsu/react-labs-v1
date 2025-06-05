import { posts } from "../data/posts";
import { Link, useNavigate } from "react-router-dom";

export default function PostListPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>전체 게시글</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/posts/new")}>새 게시글 작성</button>
    </div>
  );
}
