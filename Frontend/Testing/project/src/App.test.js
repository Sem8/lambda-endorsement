import React from "react";
import { render } from "@testing-library/react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
afterEach(rtl.cleanup); /* Press u to update snapshot if something changed */

// test("renders a span with the text Hello World", () => {
//   const wrapper = rtl.render(<App />);
//   // console.log(wrapper.debug());
//   const element = wrapper.queryByText(/hello world/i);
//   expect(element).toBeInTheDocument();
//   expect(element).toBeTruthy();
//   expect(element).toBeVisible();
// });

// describe("App", () => {
//   it("mounts to a kind of simulated DOM and has an element with the text 'Lambda' and does not have text 'Foo' ", () => {
//     const simulatedDOM = rtl.render(<App />);
//     // console.log(simulatedDOM.debug());

//     /* queryByText -- return null and initially passes */
//     const h1 = simulatedDOM.queryByText(/foo/i);
//     // console.log(h1);
//     // console.log(h1.textContent);
//     // expect(h1).toBeInTheDocument();
//     expect(h1).not.toBeInTheDocument();

//     /* getByText -- immediately fails */
//     // const h1 = simulatedDOM.getByText(/foo/i);
//   });
// });

/* React snapshot testing */

// describe("App", () => {
//   it("renders a container", () => {
//     const wrapper = rtl.render(<App />);
//     expect(wrapper.getByTestId(/container/i));
//   });

//   it("renders a hello world heading", () => {
//     const wrapper = rtl.render(<App />);
//     expect(wrapper.getByText(/hello world/i));
//   });

//   it('renders a "Lorem Ipsum" paragraph', () => {
//     const wrapper = rtl.render(<App />);
//     expect(wrapper.getByText(/lorem ipsum/i));
//   });
// });

// describe("App", () => {
//   it("renders corectly", () => {
//     const wrapper = rtl.render(<App />);
//     expect(wrapper.baseElement).toMatchSnapshot();
//   });
// });

/* Events and Async testing */
describe("App", () => {
  it("renders a container element", () => {
    const wrapper = rtl.render(<App />);
    expect(wrapper.getByTestId(/container/i));
  });

  it('renders success message after clicking button', async () => {
    const wrapper = rtl.render(<App />);
    const button = wrapper.getByTestId('button');
    expect(wrapper.queryByText(/success/i)).not.toBeInTheDocument();
    rtl.fireEvent.click(button);
    expect(await wrapper.findByText(/success/i))

  })
});
