import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {token } from "./redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";

export const AlternateRoute = (props) => (
  props.token 
  ? <Redirect to='/dashboard' /> 
  : <Route {...props} />

);


const mapStateToProps = createStructuredSelector({
    token: token
  })
  export default connect(mapStateToProps)(AlternateRoute);