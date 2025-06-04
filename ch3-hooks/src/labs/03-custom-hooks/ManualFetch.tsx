import React from 'react';
import useManualFetch from './useManualFetch';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ManualFetch = () => {
  const { data, error, fetchData, loading } = useManualFetch<Post>(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  let result;

  if (!error && !loading) {
    result = (
      <>
        <h5>{data?.title}</h5>
        <p>{data?.title}</p>
      </>
    );
  }

  return (
    <div>
      <h4>fetch test</h4>
      <button onClick={fetchData}>fetch</button>
      <div>
        <h4>result</h4>
        {result}
      </div>
    </div>
  );
};

export default ManualFetch;
