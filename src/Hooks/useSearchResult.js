import { useState, useEffect } from "react";
import axios from "axios";

function useSearchBook(query, pageNum, sortDirection) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setSearchResults([]);
  }, [query, sortDirection]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;

    setIsLoading(true);
    setError(false);

    axios.get(`https://content.guardianapis.com/search?page-size=15&order-by=${sortDirection}&q=${query}&page=${pageNum}&api-key=6128ffae-7fdc-4f8a-814e-e2e7f61c7d59`, {
        cancelToken: new CancelToken((c) => (cancel = c))
    })
    .then((res) => {
      const resData = res.data.response.results
      setSearchResults((prev) => {
        return [...new Set([...prev, ...resData])];
      });
      setHasMore(resData.length > 0);
      setIsLoading(false);
    }).catch((err) => {
      if (axios.isCancel(err)) return;
      setError(err);
      setIsLoading(false);
    });
    return () => cancel();
  }, [query, pageNum, sortDirection]);

  return { isLoading, error, searchResults, hasMore };
}

export default useSearchBook;
