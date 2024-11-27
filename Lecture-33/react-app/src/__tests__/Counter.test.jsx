import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "../pages/Counter";
import { afterEach, expect, it } from "vitest";
import { legacy_createStore as createStore } from "redux";
import reducer from "../reducer";
import { initState } from "../reducer";
import { Provider } from "react-redux";

afterEach(cleanup);

const renderWithRedux = (
  component,
  { initState, store = createStore(reducer, initState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

it("check initial state", () => {
  const { getByTestId } = renderWithRedux(<Counter />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});

it("increment through state", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initState: {
      counter: 5,
    },
  });

  //when
  fireEvent.click(getByTestId("button-up"));

  //then
  expect(getByTestId("counter")).toHaveTextContent("6");
});

it("decrement through state", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initState: {
      counter: 5,
    },
  });

  fireEvent.click(getByTestId("button-down"));

  expect(getByTestId("counter")).toHaveTextContent("4");
});
