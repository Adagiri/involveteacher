/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import {
  Sidebar,
  Dropdown,
  Image,
  Grid,
  Header,
  Label
} from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Term from "../../components/Terms/terms";
import { signOutStart } from "../../redux/auth/auth.actions";
import SideMenu from "./sidemenu";
import { fetchTopicsStart } from "../../redux/topics/topics.actions";
import { GlobalStyle } from "./dashboard.styles";



const Dashboard = ({ history, fetchTopicsStart, signOutStart }) => {
  const [visible, setVisible] = useState(false);
 const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOjM0LCJpYXQiOjE1ODU4NDcwNzgsImV4cCI6MTU5MTAzMTA3OH0.tXr5sh6_HlJlyt9jNsLYPFNFU0TEkzLeCAz23__eF00";

 // eslint-disable-next-line react-hooks/exhaustive-deps


 const fetchTopics= () => {
  axios.get("https://api.involveteacher.space/v2/topic", {
    headers: {
      'token': token
    }
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))
 }
 
  useEffect(() => {
    fetchTopics();
  }, [fetchTopics]);

  return (
    <React.Fragment>
    <GlobalStyle />
    <div style={{background: " #09203f",  overflowX: "hidden"}}>
      <Sidebar.Pushable >
        <Sidebar
          //  as={Menu}
          animation="overlay"
          icon="labeled"
          inverted="true"
          onHide={() => setVisible(false)}
          // onShow={()=> setVisible(true)}
          vertical="true"
          visible={visible}
          width="thin"
          className="ui sidebar inverted vertical menu sidebar-menu"
          style={{width: "45%"}}
        >
          <div className="item">
            <div className="header">General</div>
            <div className="menu">
              <a className="item">
                <div>
                  <i className="icon tachometer alternate"></i>
                  Dashboard
                </div>
              </a>
            </div>
            <div className="menu" onClick={() => history.push("/info")}>
              <a className="item">
                <div>
                  <i className="icon home"></i>
                 Product Home 
                </div>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="header">Administration</div>
            <div className="menu">
              <a className="item">
                <div>
                  <i className="cogs icon"></i>Settings
                </div>
              </a>
              <a className="item">
                <div>
                  <i className="progress icon"></i>Reset Progress
                </div>
              </a>
            </div>
          </div>

          <a href="#" className="item">
            <div>
              <i className="icon chart line"></i>
             Analytics
            </div>
          </a>

          <a href="#" className="item">
                <div>
                  <i className="icon calendar alternate"></i>
                  Calendar
                </div>
              </a>

          <a className="item">
            <div>
              <i className="icon lightbulb"></i>
              Our Apps
            </div>
          </a>

          <div className="item">
            <form action="#">
              <div className="ui mini action input">
                <input type="text" placeholder="Search..." />
                <button className="ui mini icon button">
                  <i className=" search icon"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="ui segment inverted">
            <div className="ui tiny olive inverted progress">
              <div className="bar" style={{ width: "54%" }}></div>
              <div className="label">Mathematics</div>
            </div>

            <div className="ui tiny teal inverted progress">
              <div className="bar" style={{ width: "78%" }}></div>
              <div className="label">English</div>
            </div>
            
            <div className="ui tiny orange inverted progress">
              <div className="bar" style={{ width: "38%" }}></div>
              <div className="label">Basic science</div>
            </div>
          </div>
        </Sidebar>
       <Sidebar.Pusher dimmed={visible} >
       <div className="pusher" style={{ minHeight: "100vh", background: " #09203f", height: "100vh",   overflow: "hidden"}}>
       <div className="main-content" style={{ minHeight: "100%", padding: "3em", height: "100vh", overflow: "hidden"}}>
       <Grid >
       <Grid.Row>
       <Label size="huge" color="teal">Mathematics</Label>
       </Grid.Row>

        <Grid.Row centered>
        <Term />
        </Grid.Row>
       </Grid>
    
       </div>
       </div>
       </Sidebar.Pusher>
       
        
      </Sidebar.Pushable>

      <SideMenu />
      <nav className="ui top fixed inverted menu">
        <div className="left menu">
          <a
            href="#"
            className="sidebar-menu-toggler item"
            data-target="#sidebar"
            onClick={() => setVisible(true)}
          >
            <i className="sidebar icon"></i>
          </a>
          <Image
            size="mini"
            src="/Images/itlogo.png"
            style={{ marginLeft: "1em", padding: ".5em" }}
          />
        </div>

        <div className="right menu">
        <Header className="item" as="h4">Hi Idrees </Header>
          <a href="#" className="item">
            <i className="bell icon"></i>
          </a>
          <Dropdown className="item " icon="user circle">
            <Dropdown.Menu>
              <Dropdown.Item icon="folder" text="Profile" />
              <Dropdown.Item icon="wrench" text="Settings" />
              <Dropdown.Item icon="sign-out" text="Logout" onClick={() =>{ 
                signOutStart()
                history.push("/")}} />

              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    
    </div>
    </React.Fragment>
    
  );
};



export default connect(null, { fetchTopicsStart, signOutStart })(withRouter(Dashboard));
