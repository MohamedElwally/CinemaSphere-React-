import axios from "axios";
import { useEffect, useState } from "react";

const useTvShow = (query) => {
  const [tvShow, setTvShow] = useState("");

  useEffect(() => {
    const getTvShow = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search//tv?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`
        );
        setTvShow(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getTvShow();
  }, [query]);

  return [tvShow];
};

export default useTvShow;
