import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

function Routes() {
  return (
    <Router>
        <PublicRoutes />
    </Router>
  );
}

export default Routes;
