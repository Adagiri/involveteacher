import React from 'react';
import { HelpContainer } from "./help.styles"
import { Image, Header } from "semantic-ui-react";
import HeaderContainer from "../../components/Header/header";

const Help = () =>{
    return (

        <HelpContainer className="fadeIn faster animated" >
        <Header />
        <Image size='medium' centered  src="/Images/helpImage.png" />
       <Header as="h3" style={{color: "white", fontStyle: "italic"}}>Oops, come back. this page is cooking...</Header>
        </HelpContainer>
     
       
    )
}
export default Help