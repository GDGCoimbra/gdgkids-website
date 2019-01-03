import React from "react";
import Home from "./pages/Home";
import Activities from "./pages/Activities";

const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/activities",
    exact: true,
    main: () => <Activities />
  }
];

export default Routes;
