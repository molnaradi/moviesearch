import "./App.css";
import React, { useState } from "react";
import MovieSelector from "./MovieSelector";
import SearchField from "./Searchfield";

function App() {
  const [title, setTitle] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [filmArray, setFilm] = useState();

  const endpoint = "https://tmdb.sandbox.zoosh.ie/dev/graphql";
  const movies = `
  {
    searchMovies(query: "${title}}") {
      name
      releaseDate
    }
  }
  `;

  const fetchInfo = async () => {
    setLoaded(false);
    setLoading(true);
    const data = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: movies }),
    });
    const movie = await data.json();
    setFilm(movie.data.searchMovies);
    setLoaded(true);
    setLoading(false);
  };

  return (
    <div>
      <SearchField setTitle={setTitle} fetchInfo={fetchInfo} />
      <MovieSelector
        isLoaded={isLoaded}
        filmArray={filmArray}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
