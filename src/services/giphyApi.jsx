import { useEffect, useState } from 'react';

export default function useTrendingGifs() {
  const results = useData();
  return results;
}

function useData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const response = await fetch('/api/giphy');
        const results = await response.json();
        if (!ignore) {
          setData(results);
        }
      } catch (err) {
        console.log(err);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);
  return data;
}
