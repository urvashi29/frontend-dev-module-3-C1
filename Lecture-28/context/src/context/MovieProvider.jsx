import React, { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();
console.log(MovieContext);

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      movieName: "BanderSnatch",
    },
    {
      id: 2,
      movieName: "Inception",
    },
    {
      id: 3,
      movieName: "Proposal",
    },
  ]);

  console.log(props.children);

  return (
    <>
      <MovieContext.Provider value={movies}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
};

export default MovieProvider;
