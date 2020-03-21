import React from "react";
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
  <div>
  <ContextContainer><Context>{props.children}</Context></ContextContainer>
    <Area>
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
  </div>
);

export default BackgroundImage;
