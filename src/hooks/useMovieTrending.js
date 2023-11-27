import { useState, useEffect } from "react";
import axios from "axios";

const useMovieTrending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieTrending = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
        );
        setMovies(res.data.results.slice(0, 8));
      } catch (error) {
        console.error(error);
      }
    };
    getMovieTrending();
  }, []);
  return [movies];
};

export default useMovieTrending;
