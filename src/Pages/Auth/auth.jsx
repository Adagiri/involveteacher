import React from "react";
import BackgroundImage from "../../Utils/BackgroundImage/backgroundImage";
import HeaderContainer from "../../components/Header/header";
import LoginForm from "./login";
import RegisterForm from "./register";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth_toggled } from "../../redux/auth/auth.selectors";
import {
  Circles,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
  FourthCircle,
  FifthCircle,
  SixthCircle,
  SeventhCircle,
  EightCircle,
  NinthCircle,
  TenthCircle,
  EleventhCircle,
  TwelvthCircle,
  ThirteenthCircle,
  FourteenthCircle,
  FifteenthCircle,
  SixteenthCircle,
  SeventeethCircle,
  EighteenthCircle,
  NineteenthCircle
} from "./auth.styles";

const Auth = ({ auth_toggled }) => {
  return (
    <div className="fadeIn faster animated" style={{background: "#09203f", minHeight: "100vh", zIndex: "10", display: "flex", justifyContent: "center", width: "100vw", paddingTop: "7em"}}>
    <HeaderContainer />
      {auth_toggled === "false" ? <LoginForm /> : <RegisterForm />}
      <Circles >
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
      <FourthCircle />
      <FifthCircle />
      <SixthCircle />
      <SeventhCircle />
      <EightCircle />
      <NinthCircle />
      <TenthCircle />
      <EleventhCircle />
      <TwelvthCircle />
      <ThirteenthCircle />
      <FourteenthCircle />
      <FifteenthCircle />
      <SixteenthCircle />
      <SeventeethCircle />
      <EighteenthCircle />
      <NineteenthCircle />
    </Circles>
    </div>
    
  );
};

const mapStateToProps = createStructuredSelector({
  auth_toggled: auth_toggled
});

export default connect(mapStateToProps)(Auth);
