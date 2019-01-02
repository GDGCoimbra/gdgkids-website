import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import LanguageSelector from "./design-system/atoms/LanguageSelector";
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
    const { i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    changeLanguage(event.target.value);
  }

  render() {
    const { i18n } = this.props;
    const activeLanguage = i18n.languages[0];
    return (
      <Router>
        <div>
          <LanguageSelector
            value={activeLanguage}
            onChange={this.handleChange}
          />

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
