import SearchIcon from "@mui/icons-material/Search";

import { useForm } from "react-hook-form";

import { useState } from "react";

import SearchResult from "../SearchResult/SearchResult";

import useMovie from "../../hooks/useMovie";

import "../Home/home.css";
import "./movies.css";

const Movies = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => setData(formData);

  const [data, setData] = useState({
    search: "movie",
  });

  const [movieSearch] = useMovie(data.search);

  return (
    <div>
      <section id="movies">
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
            </form>
          </div>
        </div>
        <div className="container">
          <h2 className="home_cards_title">List of Movies</h2>

          <SearchResult searchResult={movieSearch} />
        </div>
      </section>
    </div>
  );
};

export default Movies;
