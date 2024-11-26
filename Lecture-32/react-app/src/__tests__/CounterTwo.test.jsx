import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import CounterTwo from "../pages/CounterTwo";
import { afterEach, it } from "vitest";

// it("test case name", callbackfn)

afterEach(cleanup);

it("increment counter", () => {
  const { getByTestId } = render(<CounterTwo />);
  console.log(getByTestId);

  //testing events
  //when
  fireEvent.click(getByTestId("button-up"));

  //then
  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrement counter", () => {
  const { getByTestId } = render(<CounterTwo />);

  //testing events
  //when
  fireEvent.click(getByTestId("button-down"));

  //then
  expect(getByTestId("counter")).toHaveTextContent("-1");
});

it("should be enabled", () => {
  const { getByTestId } = render(<CounterTwo />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});
