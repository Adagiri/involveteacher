import React from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'


const Header = ({history}) => {
    return (
        <div>
        <Menu fixed='top' inverted>
        <Container>
        
          <Menu.Item as='a' header onClick={() => history.push("/")}>
          <Image size='mini' src='/itlogo.png' style={{ marginRight: '1.5em' }} />
          Involve Teacher
           
          </Menu.Item>
          <Menu.Item as='a' onClick={() => history.push("/signin")}>Sign In</Menu.Item>
        
          <Dropdown item simple text='Dashboard'>
            <Dropdown.Menu>
            <Dropdown.Item onClick={()=> history.push("/dashboard")}>Your profile</Dropdown.Item>
              <Dropdown.Item onClick={()=> history.push("/help")}>Help</Dropdown.Item>
              <Dropdown.Item onClick={() => history.push("/careers")}>Careers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
        </Menu>
        </div>
        
    )
}

export default withRouter(Header);
