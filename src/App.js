import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActivitiesWrapper from "./design-system/organisms/ActivitiesWrapper";
import ActivitiesMenu from "./design-system/organisms/ActivitiesMenu";
import ActivitiesContent from "./design-system/organisms/ActivitiesContent";
import Routes from "./Routes";
import menuLinks from "./utils/menuLinks";
import "./App.css";

import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <ActivitiesWrapper>
              <ActivitiesMenu values={menuLinks} />
              <ActivitiesContent>
                {Routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.content}
                  />
                ))}{" "}
              </ActivitiesContent>
            </ActivitiesWrapper>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
