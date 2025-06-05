import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetailPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>존재하지 않는 게시글입니다.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">목록으로</Link>
    </div>
  );
}
