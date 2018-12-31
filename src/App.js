import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

export default class extends Component {
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
