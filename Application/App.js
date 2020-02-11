import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello folks!</h1>
      <Greeting name="laasya" />
      <Counter name="RD" />
    </div>
  );
}

export default App;
