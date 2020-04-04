import React from 'react'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


const Header = ({history}) => {
    return (
        <div >
        <Menu fixed='top' inverted>
        <Container>
        
          <Menu.Item as='a' header onClick={() => history.push("/")}>
          <Image size='mini' src='/Images/itlogo.png' style={{ marginRight: '1.5em' }} />
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
