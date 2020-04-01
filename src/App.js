import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Pages/Auth/auth";
import HomePage from "./Pages/HomePage/homepage";
import Dashboard from "./Pages/Dashboard/dashboard";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { user } from "./redux/auth/auth.selectors";
import Header from "./components/Header/header";
import Help from "./Pages/Help/help";
import Careers from "./Pages/Careers/careers";
import Term from "./components/Terms/terms";

const App = ({user}) => {
  const token = localStorage.getItem('token');
  return (
    <div>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin"  render = {() => token ? <Redirect to="/dashboard" /> : <Auth />} />
      <Route path="/dashboard" component={Term} />

      />
      <Route path="/help" component={Help} />
   <Route path="/careers" component={Careers} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: user
})
export default connect(mapStateToProps)(App);
