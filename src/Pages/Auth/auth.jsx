/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import HeaderContainer from "../../components/Header/header";
import LoginForm from "./login";
import RegisterForm from "./register";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth_toggled } from "../../redux/auth/auth.selectors";
import { setErrors, setLoading, authToggle, portal } from "../../redux/auth/auth.actions";
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


const Auth = ({ auth_toggled, setErrors, setLoading, authToggle, portal }) => {

  const componentLoading = () => {
    setLoading(false);
    setErrors([])
    portal(false)
  }

  useEffect(() => {
    componentLoading()
    
  }, [componentLoading])
  return (
    
    <div style={{background: "#09203f", minHeight: "100vh", zIndex: "10", display: "flex", justifyContent: "center", width: "100vw", overflow: "hidden", height: "100vh", position: "absolute", top: 0, left: 0}}>
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

export default connect(mapStateToProps, { authToggle, setLoading, setErrors, portal })(Auth);
