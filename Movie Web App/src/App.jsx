import React from "react";
import Search from "./components/Search.jsx";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";

// API KEY
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// API
const API_BASE_URL = "https://api.themoviedb.org/3";
// API Headers
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  //Run the fetch upon page load only once
  useEffect(() => {
    fetchMovies();
  }, []);

  // Search input state
  const [searchTerm, setSearchTerm] = useState();
  // error message state
  const [errorMessage, setErrorMessage] = useState(null);
  // movie list
  const [movieList, setMovieList] = useState([]);
  // loading state
  const [isLoading, setIsLoading] = useState(false);

  //fetch data
  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      //if fetch failed
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      //if fetch succeeded
      const data = await response.json();
      //if data failed
      if (data.Response == "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      //if data succeeded - set the moviestate
      setMovieList(data.results || []);
      console.log(data.results);
      //if url failed
    } catch (error) {
      setErrorMessage(`${error}: Error fetching data`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero-banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <section className="all-movies">
          <h2 className="mt-[20px]">All Movies </h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movieItem) => (
                <MovieCard key={movieItem.id} movie={movieItem} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
