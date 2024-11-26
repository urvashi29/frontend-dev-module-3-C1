import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import CounterTwo from "./pages/CounterTwo";
import User from "./pages/User";
import ErrorBoundary from "./pages/ErrorBounday";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/users" element={<User />} />
          <Route
            path="/counter"
            element={
              <ErrorBoundary>
                <Counter />
              </ErrorBoundary>
            }
          />
          <Route path="/countertwo" element={<CounterTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
