import React, { Component } from 'react'
import "./homepage.css";
import BackgroundImage from "../../Utils/BackgroundImage/backgroundImage";
import { Link, withRouter } from 'react-router-dom';
import { Image, Header, Button, Icon, Container, List, Divider, Grid, Segment, Menu, Card } from "semantic-ui-react";

    const HomePage = ({history}) => {
      return (
        <div  style={{background: "#09203f", zIndex: "3"}}>
<div style={{height: "100vh", width: "100vw" }}>
<div style={{position: "absolute", left: "0", top: "50px", width: "100vw", height: "100vh", zIndex: "2", background: "teal", opacity: "0.9", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
<Header
as='h1'
content='Involve Teacher'
inverted
style={{
  fontSize:  '3rem',
  fontWeight: 'normal',
  marginBottom: 0,
  marginTop:  '3rem',
}}
/>
<Header
as='h2'
content='When you Involve Teacher, Teaching is fun.'
inverted
style={{
  fontSize:  '1.7rem',
  fontWeight: 'normal',
  marginTop:'1.5rem',
}}
/>
<Button color="orange" size='huge'
onClick={() => history.push("/signin")}
>
Get Started
<Icon name='right arrow' />
</Button>
</div>
<Image src="/Images/interface.svg" fluid  centered style={{position: "absolute", top: "50px", height: "100vh" , width: "100vw", zIndex: "1", }} />
</div>







<div className="container mt-4" style={{ background: "#09203f" }}>
<div className="row">

<div className="card-columns">

<Card
image='/Images/feature1.jpg'
header='Smart Teacher'
meta='InvolveTeacher'
description='Teachers are equipped with the maximum tools for them to deliver the best content with minimal preparation.'
centered
fluid
style={{maxWidth: "95%", fontSize: "1.2rem", fontWeight: "500"}}
/>


<Card
// image='/Images/feature1.jpg'
// header='Smart Teacher'
meta='InvolveTeacher'
description='All content are created based on the curriculum taught across West Africa.'
centered
fluid
style={{maxWidth: "95%", fontSize: "1.2rem", fontWeight: "500"}}
/>


<Card
image='/Images/feature2.jpg'
header='Premium Content'
meta='InvolveTeach'
description='Teachers get access to high-level quality educational content which comprises of videos, pictures and short lesson notes.'
centered
fluid
style={{maxWidth: "95%", fontSize: "1.2rem", fontWeight: "500"}}
/>

<Card
meta='InvolveTeach'
description='With InvolveTeacher, teachers do not need to outsource any resource to teach students. InvolveTeacher contains all content needed.'
centered
fluid
color="teal"
style={{maxWidth: "95%", fontSize: "1.2rem", fontWeight: "500" }}
/>

<Card
image='/Images/feature3.jpg'
header='Flexibility'
meta='InvolveTeach'
description='The App is easy to use, affordable and requires no prior teaching experience for any teacher to use.'
centered
fluid
style={{maxWidth: "95%", fontSize: "1.2rem", fontWeight: "500"}}
/>
<Card
// image='/Images/feature1.jpg'
// header='Smart Teacher'
meta='InvolveTeacher'
description='Teachers get access to high-level quality educational content which comprises of videos, pictures and short lesson notes.'
centered
fluid
style={{maxWidth: "95%", fontSize: "1.2rem", fontWeight: "500"}}
/>
</div>
</div>
</div>

<Segment inverted size="tiny" textAlign='center' fluid style={{ margin: '5em 0em 0em', padding: '5em 0em', background: "rgba(255, 255, 255, 0.2)",  }} vertical>
<div className="container">
  <blockquote className="blockquote text-center mb-0">
    <svg className="lnr text-light quote-icon pull-left">
      <use xlinkHref="#lnr-heart" style={{ color: "teal"}} />                                       
    </svg>
    <p className="mb-0 text-light" >A good teacher can inspire hope, ignite the imagination, and instill a love of learning</p>
    <footer className="blockquote-footer text-light"> 
      <cite title="Source Title">Brad Henry</cite>
    </footer>
  </blockquote>
</div>
</Segment>





<Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <Grid columns={3} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Pages' />
                  <List link inverted>
                    <List.Item as='a' onClick={() => history.push("/help")}>Help</List.Item>
                    <List.Item as='a' onClick={() => history.push("/careers")}>Careers</List.Item>
                    <List.Item as='a' onClick={() => history.push("/about")}>About Us</List.Item>
                    <List.Item as='a' onClick={() => history.push("/blog")}>Blog</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Contact' />
                  <List link inverted>
                    <List.Item as='a' href="mailto:sales@landy.com">admin@involveteacher.space</List.Item>
                    <List.Item as='a' href="tel:+234 803 729 6906" >+234 803 729 6906</List.Item>
                    <List.Item as='a'>Our Ghost Town</List.Item>
                  </List>
                </Grid.Column>
             
                <Grid.Column>
                  <Header inverted as='h4' content='Keep in touch' />
                  <Menu
                  icon='labeled'
                 horizontal
                 compact
                 size="mini"
                
                >
                  <Menu.Item link>
                    <Icon name='twitter' />
                    Twitter
                  </Menu.Item>
    
                  <Menu.Item link>
                    <Icon name='facebook' />
                    Share
                  </Menu.Item>
    
                  <Menu.Item link>
                    <Icon name='mail' />
                    Mail
                  </Menu.Item>
                  <Menu.Item link>
                  <Icon name="instagram" />
                  Insta
                </Menu.Item>
                </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src='/Images/itlogo.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
            <List>
            <List.Item>© 2020 InvolveTeacher. All rights reserved.</List.Item>
            </List>
          </Container>
        </Segment>
</div> 

      )
    }
    
export default withRouter( HomePage);