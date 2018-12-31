import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

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

          {t("title")}

          <button onClick={() => changeLanguage("pt")}>pt</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>
      </Router>
    );
  }
}

export default withNamespaces("translation")(App);
