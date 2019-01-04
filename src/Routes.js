import React from "react";
import { Route, Redirect } from "react-router-dom";
import ActLegoMindstorms from "./pages/ActLegoMindstorms";

const Routes = [
  {
    path: "/activities",
    content: ({ match }) => (
      <div>
        <Route
          exact
          path={match.path}
          render={() => <Redirect to={`${match.path}/lego-mindstorms`} />}
        />
        <Route
          path={`${match.path}/lego-mindstorms`}
          children={props => (props.match ? <ActLegoMindstorms /> : "")}
        />
        <Route
          path={`${match.path}/lego-challenge`}
          children={props => (props.match ? <div>Lego Challenge</div> : "")}
        />
        <Route
          path={`${match.path}/playsketch`}
          children={props => (props.match ? <div>Playsketch</div> : "")}
        />
        <Route
          path={`${match.path}/hour-of-code`}
          children={props => (props.match ? <div>Hour of Code</div> : "")}
        />
        <Route
          path={`${match.path}/rubik-cube`}
          children={props => (props.match ? <div>Rubik Cube</div> : "")}
        />
      </div>
    )
  }
];

export default Routes;
