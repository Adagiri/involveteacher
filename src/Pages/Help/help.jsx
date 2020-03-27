import React from 'react';
import { HelpContainer } from "./help.styles"
import { Image, Header } from "semantic-ui-react";

const Help = () =>{
    return (

        <HelpContainer className="fadeIn faster animated" >
        <Image size='medium' centered  src="/Images/helpImage.png" />
       <Header as="h3" style={{color: "white", fontStyle: "italic"}}>Oops, come back. this page is cooking...</Header>
        </HelpContainer>
     
       
    )
}
export default Help