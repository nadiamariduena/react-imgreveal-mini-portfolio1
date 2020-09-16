import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
// import Soon from "./components/Soon";
//
//

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path={() => "/main" || "/admin" || "/*"} component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
