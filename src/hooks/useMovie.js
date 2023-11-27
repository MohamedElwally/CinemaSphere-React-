import axios from "axios";
import { useEffect, useState } from "react";

const useMovie = (query) => {
  const [movieSearch, setMovieSearch] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search//movie?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`
        );
        setMovieSearch(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getMovie();
  }, [query]);

  return [movieSearch];
};

export default useMovie;
