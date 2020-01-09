import React, { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <span className='greet'>Hello World</span>
//     </div>
//   );
// }

// export default App;

// export default function App() {
//   return (
//     <div className="container">
//       <h1 className="heading">Lambda</h1>
//     </div>
//   );
// }

/* Snapshot testing */

// export default function App() {
//   return (
//     <div data-testid="container">
//       <h3 id="helloHeadingMeh">Hello World!!!</h3>
//       <p className="paragraph">Lorem Ipsum</p>
//     </div>
//   );
// }

/* Events and Async testing */
export default function App() {
  const [message, setMessage] = useState("");

  const fakeAsync = () => Promise.resolve("success");

  const clickHandler = async () => {
    const message = await fakeAsync();
    setMessage(message);
  };
  return (
    <div data-testid="container">
      <span>{message}</span>
      <button data-testid="button" onClick={clickHandler}>
        Get Message
      </button>
    </div>
  );
}
