import React from "react";
import BackgroundImage from "../../Utils/BackgroundImage/backgroundImage";
import LoginForm from "./login";
import RegisterForm from "./register";
import { connect } from "react-redux";

const Auth = ({ auth_toggled }) => {
  return (
    <BackgroundImage>
      {auth_toggled==="false" ? <LoginForm /> : <RegisterForm />}
    </BackgroundImage>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth_toggled: auth.auth_toggled
});

export default connect(mapStateToProps)(Auth);
