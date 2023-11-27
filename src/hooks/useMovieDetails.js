import { useState, useEffect } from "react";
import axios from "axios";

const useMovieDetails = (media_type, item_id) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieTrending = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${item_id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
        );
        setMovie(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieTrending();
  }, [media_type, item_id]);
  return [movie];
};

export default useMovieDetails;
