import React from "react";
import Home from "./pages/Home";

const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  }
];

export default Routes;
