import React, { useContext, useState } from "react";
import { MovieContext } from "./context/MovieProvider";

const MovieData = () => {
  // const [movies, setMovies] = useState([
  //   {
  //     id: 1,
  //     movieName: "BanderSnatch",
  //   },
  //   {
  //     id: 2,
  //     movieName: "Inception",
  //   },
  //   {
  //     id: 3,
  //     movieName: "Proposal",
  //   },
  // ]);

  const movies = useContext(MovieContext);

  //   React List
  const movieList = movies.map((movie) => {
    return <div key={movie.id}>{movie.movieName}</div>;
  });

  return <>{movieList}</>;
};

export default MovieData;
