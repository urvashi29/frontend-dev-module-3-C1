import React from "react";
import MovieCount from "./MovieCount";
import MovieData from "./MovieData";
import MovieProvider from "./context/MovieProvider";

const App = () => {
  return (
    <>
      <MovieProvider>
        <MovieCount />
        <MovieData />
      </MovieProvider>
    </>
  );
};

export default App;
