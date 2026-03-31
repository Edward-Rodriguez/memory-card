import { useEffect, useState } from 'react';

export default function useTrendingGifs() {
  const results = useData();
  return results;
}

function useData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const response = await fetch('/api/giphy');
        const results = await response.json();

        if (!ignore) {
          setData(results.data);
        }
      } catch (err) {
        console.log('error..', JSON.stringify(err));
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);
  return data;
}
