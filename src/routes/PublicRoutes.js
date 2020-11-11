import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ListTransactions from "../pages/Transactions/List";
import Transaction from "../pages/Transactions/Transaction";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/listTransaction" component={ListTransactions} />
      <Route path="/newTransaction" component={Transaction} />
      <Redirect path="*" to="/listTransaction" />
    </Switch>
  );
};

export default PublicRoutes;
