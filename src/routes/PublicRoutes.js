import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ListTransactions from "../pages/Transactions/List";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/listTransaction" component={ListTransactions} />
      <Redirect path="*" to="/listTransaction" />
    </Switch>
  );
};

export default PublicRoutes;
