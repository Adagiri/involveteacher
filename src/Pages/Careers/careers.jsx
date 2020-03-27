import React from 'react';
import { CareersContainer } from "./careers.styles"
import { Image, Header } from "semantic-ui-react";
const Careers = () =>{
    return (
      
       
        <CareersContainer className="fadeIn faster animated" >
        <Image size='medium' centered  src="/Images/careers.png" />
       <Header as="h3" style={{color: "white", fontStyle: "italic" }}>Oops, come back. this page is a ghost...</Header>
        </CareersContainer>
      
       
    )
}
export default Careers