import { useState } from "react";
import AddMovieForm from "../AddMovieForm";
import Hero from "../Hero";
import Movies from "../Movies";
import data from "../../utils/constant/data";

function Main() {
  const endpoint = "/trending/movie/day";
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero endpoin={endpoint}/>
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

export default Main;