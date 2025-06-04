import { useEffect, useState } from "react";

type Post = { id: number; title: string; body: string };

export default function DynamicPost() {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    setInterval(()=>{
      setId(prev => prev + 1);
    }, 2000)
  }, []);

  useEffect(() => {
    setPost(null);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]); // id가 바뀔 때마다 새로 요청

  return (
    <div>
      {post ? (
        <>
          <p>제목: {post.title}</p>
          <p>본문: {post.body}</p>
        </>
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
}
