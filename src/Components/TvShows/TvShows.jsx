import SearchIcon from "@mui/icons-material/Search";

import { useForm } from "react-hook-form";

import { useState } from "react";

import SearchResult from "../SearchResult/SearchResult";

import useTvShow from "../../hooks/useTvShow";

import "../Home/home.css";

const TvShows = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => setData(formData);

  const [data, setData] = useState({
    search: "friends",
  });

  const [tvShow] = useTvShow(data.search);

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
          <h2 className="home_cards_title">List of Tv Shows</h2>

          <SearchResult searchResult={tvShow} />
        </div>
      </section>
    </div>
  );
};

export default TvShows;
