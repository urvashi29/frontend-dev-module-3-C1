import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { afterEach, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

afterEach(cleanup);

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

it("should render users page", () => {
  const { container } = renderWithRouter(<Navbar />);
  const navbar = screen.getByTestId("navbar");

  const link = screen.getByTestId("users");

  expect(navbar).toContainElement(link);
});
