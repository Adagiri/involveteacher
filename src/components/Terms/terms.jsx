import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import "./terms.scss";
import "./terms.css";
import { withRouter } from "react-router-dom";
import { Header, Label, Button } from 'semantic-ui-react';

const Term = ({history, cards, status}) => {
  const pages = cards;
  const reversedCards = pages ? pages : ["Hey"];
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'flex' }))
  const bind = useDrag(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 7)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'flex' }
    })
  })
  return (

    <div className="cardsContainer"> 
    {
      props.map(({ x, display, sc }, i) => (
        <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
          <animated.div  className="cursored animated tada slow delay-2s" style={{ transform: sc.interpolate(s => `scale(${s})`), 
          background: "#eee", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"
        }} >
       { status === "topics" ? <React.Fragment><div>
             <Header as="h2">Week {reversedCards[i].id}</Header>
              <p style={{fontStyle: "italic", fontSize: "11px", fontWeight: "400"}}>Maths Jss-1 3rd term curriculum</p>
             </div>
              
              <div>
              <Label style={{background: "rgba(255,69,0,1)"}} size="big" style={{marginBottom: ".5em"}}>Topic</Label>
              <p style={{fontSize: "14px",  fontWeight: "bold", fontStyle: "italic"}}>{reversedCards[i].topic_name}</p>
              </div>
              
             <Button color="orange" onClick={() => history.push(`maths/${reversedCards[i].topic_name}`)}>View Lessons</Button> </React.Fragment> : 
             
             <React.Fragment>
             <div>
             <Header as="h2">Lesson {reversedCards[i].id}</Header>
             </div>
              
              <div style={{textAlign: "center"}}>
              <Label color="teal" size="big" style={{marginBottom: ".5em"}}>Title</Label>
              <p style={{fontSize: "14px",  fontWeight: "bold", fontStyle: "italic"}}>{reversedCards[i].lesson_name}</p>
              </div>
             
              <Button.Group>
              <Button style={{background: "rgba(255,69,0,1)", color: "rgba(255, 255, 255, 0.8"}}>Prepare</Button>
              <Button.Or />
              <Button color="teal">Teach</Button>
              </Button.Group>
              </React.Fragment>
             }
          </animated.div>
        </animated.div>
      ))
    }
    </div>
  ) 
  
}





export default withRouter(Term);
