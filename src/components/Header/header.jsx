import React from 'react'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import logo from "../../assets/itlogo.png";


const Header = ({history}) => {
    return (
        <div >
        <Menu fixed='top' inverted style={{ background: "rgba(255, 255, 255, 0.1)"}}>
        <Container>
        
          <Menu.Item  header >
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          Involve Teacher
           
          </Menu.Item>
          <Menu.Item as='a' onClick={() => history.push("/signin")}>Sign In</Menu.Item>
        
          <Menu.Item as='a' onClick={() => history.push("/dashboard")}>Dashboard</Menu.Item>
        </Container>
        </Menu>
        </div>
        
    )
}

export default withRouter(Header);
