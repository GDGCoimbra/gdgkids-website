import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { i18n } = this.props;
    const activeLanguage = i18n.languages[0];
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <Router>
        <div>
          <select value={activeLanguage} onChange={this.handleChange}>
            <option value="en" onClick={() => changeLanguage("en")}>
              EN
            </option>
            <option value="pt" onClick={() => changeLanguage("pt")}>
              PT
            </option>
          </select>

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
