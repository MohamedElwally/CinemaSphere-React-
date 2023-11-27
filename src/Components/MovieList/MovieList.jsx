import React from "react";
import Card from "../../Components/Card/Card";

const MovieList = ({ movies }) => {
  const cards = movies.map((movie) => {
    return <Card movie={movie} key={movie.id} />;
  });

  return <ul className="cards">{cards}</ul>;
};

export default MovieList;
