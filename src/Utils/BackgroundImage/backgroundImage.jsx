import React from "react";
import Header from "../../components/Header/header";
import {
  ContextContainer,
  Context,
  Area,
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
  TenthCircle
} from "./background.styles";

const BackgroundImage = props => (
  
    <Area>
    <ContextContainer><Context>{props.children}</Context></ContextContainer>
      <Circles>
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
      </Circles>
    </Area>
  
);

export default BackgroundImage;
