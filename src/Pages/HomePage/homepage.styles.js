import styled, { css, keyframes } from "styled-components";

//utils

const keyFrames = keyframes`

from{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 100px;
   top: 1000vh;
}

to{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 1;
    border-radius: 100px;
    position: absolute;
   top: 0;
}
`;

const circleConstant = css`
  position: absolute;
  display: block;
  list-style: none;
  background: rgba(255, 255, 255, 0.2);
  animation: ${keyFrames} 5s linear infinite;
  bottom: -150px;
  border-radius: 100%
  z-index: 50;
`;

export const Circles = styled.ul`
position: absolute;
top: 0;
left: 0;
width: 100%;
min-height: 300vh;
overflow: hidden;
z-index: 50;
`;

export const FirstCircle = styled.li`
${circleConstant}
left: 25%;
width: 80px;
height: 80px;
animation-delay: 0s;
background: orange;
`;

export const SecondCircle = styled.li`
${circleConstant}
left: 10%;
width: 20px;
height: 20px;
animation-delay: 2s;
animation-duration: 12s;
background: teal;
`;

export const ThirdCircle = styled.li`
${circleConstant};
left: 70%;
width: 20px;
height: 20px;
animation-delay: 4s;
background: green;
`;

export const FourthCircle = styled.li`
${circleConstant};
left: 40%;
width: 60px;
height: 60px;
animation-delay: 0s;
animation-duration: 18s;
background: blue;
`;

export const FifthCircle = styled.li`
${circleConstant};
left: 65%;
width: 20px;
height: 20px;
animation-delay: 0s;
background: purple;
`;

export const SixthCircle = styled.li`
${circleConstant};
left: 75%;
width: 80px;
height: 80px;
animation-delay: 3s;
background: violet;
`;

export const SeventhCircle = styled.li`
${circleConstant};
left: 35%;
width: 100px;
height: 80px;
animation-delay: 7s;
background: yellow;
`;

export const EightCircle = styled.li`
${circleConstant};
left: 50%;
width: 25px;
height: 25px;
animation-delay: 15s;
animation-duration: 45s;
background: white;
`;

export const NinthCircle = styled.li`
${circleConstant};
left: 20%;
width: 15px;
height: 15px;
animation-delay: 2s;
animation-duration: 35s;
background: brown;
`;

export const TenthCircle = styled.li`
${circleConstant};
left: 85%;
width: 150px;
height: 150px;
animation-delay: 0s;
animation-duration: 11s;
background: red;
`;
