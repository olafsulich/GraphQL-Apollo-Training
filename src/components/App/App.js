import React from "react";
import "./App.css";
import Wrapper from "../Wrapper/Wrapper";
import Card from "../Card/Card";
import { gql, useQuery } from "@apollo/client";

const testQuery = gql`
  {
    characters {
      results {
        name
        id
      }
    }
  }
`;

function App() {
  const { data } = useQuery(testQuery);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty</h1>
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
