import React, {useContext} from "react";
import { Route, Switch, Redirect, __RouterContext } from "react-router-dom"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { user } from "./redux/auth/auth.selectors";
import Auth from "./Pages/Auth/auth";
import HomePage from "./Pages/HomePage/homepage";
import Dashboard from "./Pages/Dashboard/dashboard";
import { animated, useTransition } from "react-spring";

const App = ({user}) => {

  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform: "translate(100%, 0)"},
    enter: {opacity: 1, transform: "translate(0%, 0)"},
    leave: { opacity: 0, transform: "translate(-50%, 0)"}
  })

  // console.log(location, __RouterContext)
  const token = localStorage.getItem('token');
  return (
    <div>
    {
      transitions.map(({ item, props, key}) => (
<animated.div key={key} style={props}>

<Switch location={item}>
<Route path="/info"  component={HomePage} />
<Route path="/" exact render = {() => token ? <Redirect to="/dashboard" /> : <Auth />} />
<Route path="/signin"  render = {() => token ? <Redirect to="/dashboard" /> : <Auth />} />
<Route path="/dashboard" render = {() => !token ? <Dashboard /> : <Auth />} />

/>
</Switch>
</animated.div>
      ))
    }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: user
})
export default connect(mapStateToProps)(App);
