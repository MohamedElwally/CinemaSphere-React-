import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import Home from "./Components/Home/Home.jsx";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx";
import TvShows from "./Components/TvShows/TvShows.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route
            path="/movie-details/:mediatype/:id"
            element={<MovieDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
