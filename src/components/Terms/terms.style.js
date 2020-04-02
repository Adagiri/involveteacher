import styled from 'styled-components'

export const GlobalStyle = styled.div`

    overscroll-behavior-y: contain;
    margin: 0;
    padding: 0;
    min-height: 70vh;
    height: 80%;
    width: 40%;
    max-width: 450px;
    min-width: 350px;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    position: relative;
    background: #09203f;
   display: flex;
   justify-content: center;
   align-items: center;

  
  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
   > div > div {
     margin-left: 1em;
    padding: 3em;
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 40vh;
    max-width: 300px;
    height: 95%;
    max-height: 570px;
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    cursor: url('/cursor.png') 39 39, auto;
  }
  
`;