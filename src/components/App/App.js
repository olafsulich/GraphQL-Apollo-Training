import React from "react";
import "./App.css";
import Wrapper from "../Wrapper/Wrapper";
import Card from "../Card/Card";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Wrapper>
          <Card />
          <Card />
          <Card />
          <Card />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
