import React from "react";
import { render } from "@testing-library/react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// test("renders a span with the text Hello World", () => {
//   const wrapper = rtl.render(<App />);
//   // console.log(wrapper.debug());
//   const element = wrapper.queryByText(/hello world/i);
//   expect(element).toBeInTheDocument();
//   expect(element).toBeTruthy();
//   expect(element).toBeVisible();
// });

describe("App", () => {
  it("mounts to a kind of simulated DOM", () => {
    const simulatedDOM = rtl.render(<App />);
    // console.log(simulatedDOM.debug());
    const h1 = simulatedDOM.queryByText(/lambda/i);
    // console.log(h1);
    console.log(h1.textContent);
  });
});
