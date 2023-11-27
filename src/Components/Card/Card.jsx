import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <li className="cards_item">
      <Link to={`/movie-details/${movie?.media_type}/${movie.id}`}>
        <div className="card">
          <span className="movie-rate">{movie.vote_average?.toFixed(1)}</span>

          <figure className="card_image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              title={movie.title}
            />
          </figure>
          <div className="card_content">
            <h2 className="card_title">
              {movie.title ? movie.title : movie.original_name}
            </h2>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
