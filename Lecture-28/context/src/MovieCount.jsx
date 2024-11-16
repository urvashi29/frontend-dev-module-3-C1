import React, { useContext, useState } from "react";
import { MovieContext } from "./context/MovieProvider";

const MovieCount = () => {
  const movies = useContext(MovieContext);
  console.log(movies);

  return <div>Count: {movies.length}</div>;
};

export default MovieCount;
