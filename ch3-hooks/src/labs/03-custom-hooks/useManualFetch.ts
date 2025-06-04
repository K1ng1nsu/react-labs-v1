import React, { useState } from 'react';

const useManualFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('CAN NOT FETCH DATA');
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, fetchData };
};

export default useManualFetch;
