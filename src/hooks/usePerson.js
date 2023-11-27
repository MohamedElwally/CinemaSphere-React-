import axios from "axios";
import { useEffect, useState } from "react";

const usePerson = (query) => {
  const [person, setPerson] = useState("");

  useEffect(() => {
    const getTvShow = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/person?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`
        );
        setPerson(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getTvShow();
  }, [query]);

  return [person];
};

export default usePerson;
