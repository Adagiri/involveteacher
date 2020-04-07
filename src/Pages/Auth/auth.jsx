import React from "react";
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
import AbsoluteWrapper from "../../components/Absolute_wrapper/AbsoluteWrapper";

const Auth = ({ auth_toggled }) => {
  return (
    <AbsoluteWrapper>
    <HeaderContainer />
    <div class="main-content" style={{background: "#09203f", minHeight: "100vh", zIndex: "10", display: "flex", justifyContent: "center", width: "100vw", overflow: "hidden", height: "100vh"}}>
   
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
    </AbsoluteWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  auth_toggled: auth_toggled
});

export default connect(mapStateToProps)(Auth);
