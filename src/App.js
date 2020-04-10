import React, {useContext, Suspense, lazy} from "react";
import { Route, Switch, Redirect, __RouterContext } from "react-router-dom"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { user } from "./redux/auth/auth.selectors";
import { animated, useTransition } from "react-spring";
import Spinner from "./components/Spinner/spinner";

const Auth = lazy(() => import("./Pages/Auth/auth"));
const Dashboard = lazy(() => import("./Pages/Dashboard/dashboard"));


const App = ({user}) => {

  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 1, transform: "translate(100%, 0)"},
    enter: {opacity: 1, transform: "translate(0, 0)"},
    leave: { opacity: 0, transform: "translate(-50%, 0)"}
  })

  // console.log(location, __RouterContext)
  const token = localStorage.getItem('token');
  return (
    <div>
    {
      transitions.map(({ item, props, key}) => (
<animated.div key={key} style={props}>
<Suspense fallback={<Spinner />}>
<Switch location={item}>
<Route path="/" exact render = {() => token ? <Redirect to="/dashboard" /> : <Auth />} />
<Route path="/signin"  render = {() => token ? <Redirect to="/dashboard" /> : <Auth />} />
<Route path="/dashboard" render = {() => token ? <Dashboard /> : <Auth />} />

</Switch>
</Suspense>
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
