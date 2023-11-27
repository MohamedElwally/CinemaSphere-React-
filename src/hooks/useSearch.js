import { useEffect, useState } from "react";
import axios from "axios";

const useSearch = (media_type, query) => {
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    const getSearchResult = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search//${media_type}?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`
        );
        setSearchResult(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getSearchResult();
  }, [media_type, query]);

  return [searchResult];
};

export default useSearch;
