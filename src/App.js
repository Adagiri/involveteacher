import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { user } from "./redux/auth/auth.selectors";
import Auth from "./Pages/Auth/auth";
import HomePage from "./Pages/HomePage/homepage";
import Dashboard from "./Pages/Dashboard/dashboard";

const App = ({user}) => {
  const token = localStorage.getItem('token');
  return (
    <div>
      <Switch>
      <Route path="/info"  component={HomePage} />
      <Route path="/" exact render = {() => token ? <Redirect to="/dashboard" /> : <Auth />} />
      <Route path="/signin"  render = {() => token ? <Redirect to="/dashboard" /> : <Auth />} />
      <Route path="/dashboard" render = {() => !token ? <Dashboard /> : <Auth />} />

      />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: user
})
export default connect(mapStateToProps)(App);
