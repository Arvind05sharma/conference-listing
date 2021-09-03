import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CardListing from "../CardListing/CardListing";

const PublicRoute = (props) => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={CardListing} />
      </Switch>
    </HashRouter>
  );
};

export default PublicRoute;
