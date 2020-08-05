import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Character from "../components/Character/Character";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Character />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
