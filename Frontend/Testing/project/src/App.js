import React from "react";

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

export default function App() {
  return (
    <div data-testid="container">
      <h3 id="helloHeading">Hello World</h3>
      <p className="paragraph">Lorem Ipsum</p>
    </div>
  );
}
