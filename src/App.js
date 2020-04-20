import React, {useContext, Suspense, lazy} from "react";
import { Route, Switch, Redirect, __RouterContext } from "react-router-dom"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { user, token } from "./redux/auth/auth.selectors";
import { animated, useTransition } from "react-spring";
import Spinner from "./components/Spinner/spinner";
import PrivateRoute from "./privateRoute";
import AlternateRoute from "./alternateRoute";

const Auth = lazy(() => import("./Pages/Auth/auth"));
const Dashboard = lazy(() => import("./Pages/Dashboard/dashboard"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage/profilepage"));
const LessonsPage = lazy(() => import("./Pages/Lessons/lessons"));


const App = ({token}) => {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 1, transform: "translate(100%, 0)"},
    enter: {opacity: 1, transform: "translate(0, 0)"},
    leave: { opacity: 1, transform: "translate(-100%, 0)"}
  })

  // console.log(location, __RouterContext)
  return (
    <div>
    {
      transitions.map(({ item, props, key}) => (
<animated.div key={key} style={props}>
<Suspense fallback={<Spinner />}>
<Switch location={item}>
<AlternateRoute path="/" exact component={Auth} />
<AlternateRoute path="/signin"  component={Auth} />
<PrivateRoute path="/dashboard" component={Dashboard} />
<PrivateRoute path="/profile" component={ProfilePage} />
<PrivateRoute path="/maths/:topic" component={LessonsPage} />
</Switch>
</Suspense>
</animated.div>
      ))
    }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: user,
  token: token
})
export default connect(mapStateToProps)(App);
