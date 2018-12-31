import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default withNamespaces("translation")(App);
