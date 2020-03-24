import React from "react";
import BackgroundImage from "../../Utils/BackgroundImage/backgroundImage";
import LoginForm from "./login";
import RegisterForm from "./register";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth_toggled } from "../../redux/auth/auth.selectors";

const Auth = ({ auth_toggled }) => {
  return (
    <BackgroundImage>
      {auth_toggled === "false" ? <LoginForm /> : <RegisterForm />}
    </BackgroundImage>
  );
};

const mapStateToProps = createStructuredSelector({
  auth_toggled: auth_toggled
});

export default connect(mapStateToProps)(Auth);
