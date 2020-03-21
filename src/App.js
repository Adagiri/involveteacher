import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./Pages/Auth/auth";
import HomePage from "./Pages/HomePage/homepage";
import Dashboard from "./Pages/Dashboard/dashboard";

const App = () => {
  return (
    <div>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
