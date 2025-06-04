import { useEffect, useState } from "react";

type Post = { id: number; title: string; body: string };

export default function PostInfo() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error("API 오류!");
        const data = await res.json();
        setTimeout(()=> {
          setPost(data);
          setLoading(false);
        }, 1000);
      } catch (e) {
        // 에러처리(실제론 setError 등)
        alert("불러오기 실패");
      }
    }
    fetchPost();
  }, []);

  if (loading) return <p>로딩중...</p>;

  return (
    <div>
      <h3>게시글 정보</h3>
      {post ? (
        <>
          <p>제목: {post.title}</p>
          <p>본문: {post.body}</p>
        </>
      ) : (
        <p>데이터 없음</p>
      )}
    </div>
  );
}
