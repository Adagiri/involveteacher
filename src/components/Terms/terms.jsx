import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import {  useDrag } from 'react-use-gesture'
import "./terms.scss";
import "./terms.css";
import { withRouter } from "react-router-dom";
import { Header, Label, Button } from 'semantic-ui-react';


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -5 + Math.random() * 5, delay: i * 200 })
const from = i => ({ x: 1000, rot: 0, scale: 1.5, y: 0 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(20deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;


const Term = ({history, cards}) => {
  const reversedCards = cards ? cards.slice(0).reverse() : ["Hey"];
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.1 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.2 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return(
    <div className="cardsContainer">
    {
      props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          
          <animated.div className="cursored" {...bind(i)} style={{ transform: interpolate([rot, scale], trans),background: "#eee", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }} >
         <div>
         <Header as="h2">Week {reversedCards[i].id}</Header>
          <p style={{fontStyle: "italic", fontSize: "11px", fontWeight: "400"}}>Maths Jss-1 3rd term curriculum</p>
         </div>
          
          <div>
          <Label color="teal" size="big">Topic</Label>
          <p style={{fontSize: "14px", marginTop: ".5em",  fontWeight: "400", fontStyle: "italic"}}>{reversedCards[i].topic_name}</p>
          </div>
          
          <Button.Group>
          <Button style={{background: "rgba(255,69,0,1)", color: "rgba(255, 255, 255, 0.8"}}>Prepare</Button>
          <Button.Or />
          <Button color="teal">Teach</Button>
        </Button.Group>
   

         </animated.div>
          
        </animated.div>
      ))
    }
    </div>
  ) }

 



export default withRouter(Term);
