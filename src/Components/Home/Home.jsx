import SearchIcon from "@mui/icons-material/Search";

import { useForm } from "react-hook-form";

import { useState } from "react";

import MovieList from "../MovieList/MovieList";
import SearchResult from "../SearchResult/SearchResult";

import useMovieTrending from "../../hooks/useMovieTrending";
import useSearch from "../../hooks/useSearch";

import "./home.css";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => setData(formData);

  const [data, setData] = useState({ search: "", mediaType: "multi" });

  const [movies] = useMovieTrending();

  const [searchResult] = useSearch(data.mediaType, data.search);

  return (
    <div>
      <section id="home">
        <div className="home_search">
          <div className="container">
            <form
              className="d-flex justify-content-between"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="search">
                <button type="submit" className="search_button">
                  <SearchIcon />
                </button>
                <input
                  className="search_input"
                  type="text"
                  {...register("search")}
                  placeholder="Find movies tv shows documentary and more..."
                />
              </div>
              <div className="select">
                <div className="select-logo">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <select {...register("mediaType")}>
                  <option value="multi" disabled hidden>
                    Media Type
                  </option>
                  <option value="multi">All</option>
                  <option value="movie">Movies</option>
                  <option value="tv">Tv Shows</option>
                  <option value="person">Person</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          {data.search.length > 0 ? (
            <h2 className="home_cards_title">Your Search Results</h2>
          ) : (
            <h2 className="home_cards_title">Latest Movies & TV Shows</h2>
          )}

          {data.search.length > 0 ? (
            <SearchResult searchResult={searchResult} />
          ) : (
            <MovieList movies={movies} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
