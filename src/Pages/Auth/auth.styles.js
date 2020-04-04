import {Button} from "semantic-ui-react";
import styled, { css, keyframes } from "styled-components";

//utils

const keyFrames = keyframes`

from{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 100px;
   top: 100%;
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
  animation: ${keyFrames} 10s  infinite;
  border-radius: 100%
  z-index: 5;
`;

export const Circles = styled.ul`
position: absolute;
top: 0;
left: 0;
width: 100%;
min-height: 100vh;
overflow: hidden;
z-index: 5;

`;

export const FirstCircle = styled.li`
${circleConstant}
left: 5vw;
width: 10px;
height: 10px;
animation-delay: 1s;
`;

export const SecondCircle = styled.li`
${circleConstant}
left: 10vw;
width: 12px;
height: 12px;
animation-delay: 2s;
`;

export const ThirdCircle = styled.li`
${circleConstant};
left: 15vw;
width: 14px;
height: 14px;
animation-delay: 1.5s;
`;

export const FourthCircle = styled.li`
${circleConstant};
left: 20vw;
width: 16px;
height: 16px;
animation-delay: 3s;
`;

export const FifthCircle = styled.li`
${circleConstant};
left: 25vw;
width: 18px;
height: 18px;
animation-delay: 3.5s;
`;

export const SixthCircle = styled.li`
${circleConstant};
left: 30vw;
width: 20px;
height: 20px;
animation-delay: 2.5s;
`;

export const SeventhCircle = styled.li`
${circleConstant};
left: 35vw;
width: 22px;
height: 22px;
animation-delay: 1.8s;
`;

export const EightCircle = styled.li`
${circleConstant};
left: 40vw;
width: 24px;
height: 24px;
animation-delay: 1.2s;
`;

export const NinthCircle = styled.li`
${circleConstant};
left: 45vw;
width: 26px;
height: 26px;
`;

export const TenthCircle = styled.li`
${circleConstant};
left: 50vw;
width: 40px;
height: 40px;
animation-delay: 0.5s;
`;

export const EleventhCircle = styled.li`
${circleConstant};
left: 55vw;
width: 26px;
height: 26px;
animation-delay: 2.8s;
`;
export const TwelvthCircle = styled.li`
${circleConstant};
left: 60vw;
width: 24px;
height: 24px;
animation-delay: 2s;
`;

export const ThirteenthCircle = styled.li`
${circleConstant};
left: 65vw;
width: 22px;
height: 22px;
animation-delay: 3s;
`;

export const FourteenthCircle = styled.li`
${circleConstant};
left: 70vw;
width: 20px;
height: 20px;
animation-delay: 1.5s;
`;

export const FifteenthCircle = styled.li`
${circleConstant};
left: 75vw;
width: 18px;
height: 18px;
animation-delay: 3.2s;
`;

export const SixteenthCircle = styled.li`
${circleConstant};
left: 80vw;
width: 16px;
height: 16px;
animation-delay: 1.4s;
`;

export const SeventeethCircle = styled.li`
${circleConstant};
left: 85vw;
width: 14px;
height: 14px;
animation-delay: 1s;
`;

export const EighteenthCircle = styled.li`
${circleConstant};
left: 90vw;
width: 12px;
height: 12px;
animation-delay: 2.5s;
`;

export const NineteenthCircle = styled.li`
${circleConstant};
left: 95vw;
width: 10px;
height: 10px;
animation-delay: 1s;
`;



export const CustomButton = styled(Button)`
   background-color: #4e54c8,
   color: white;

   &:hover {
    background: #8f94fb;
   }
`;