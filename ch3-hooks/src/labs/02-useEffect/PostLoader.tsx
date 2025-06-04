import React, { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) throw new Error('CAN NOT FETCH DATA');

        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPost(data);
      })
      .catch((error: Error) => {
        setError(error.message);
      });
  }, []);

  if (error) return <p>Error : {error}</p>;
  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <h4>{post?.title}</h4>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostLoader;
