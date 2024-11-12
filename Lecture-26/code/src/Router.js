import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import RecipeDetail from "./components/RecipeDetail";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* v6 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:recipe_id" element={<RecipeDetail />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default Router;

// Navigation
