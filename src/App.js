import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import Post from "./Components/Post";
import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route exact={"true"} path="/" component={Home} />
          <Route path="/User/" component={User} />
          <Route path="/Post/" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;
