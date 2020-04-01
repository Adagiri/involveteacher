import React from 'react';
import { CareersContainer } from "./careers.styles"
import { Image, Header } from "semantic-ui-react";
import HeaderContainer from "../../components/Header/header";
const Careers = () =>{
    return (
      
       
        <CareersContainer className="fadeIn faster animated" >
        <HeaderContainer />
        <Image size='medium' centered  src="/Images/careers.png" />
       <Header as="h3" style={{color: "white", fontStyle: "italic" }}>Oops, come back. this page is a ghost...</Header>
        </CareersContainer>
      
       
    )
}
export default Careers;
