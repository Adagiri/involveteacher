/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import {
  Sidebar,
  Dropdown,
  Image,
  Grid,
  Header,
  Label,
  TransitionablePortal,
  Segment,
} from "semantic-ui-react";
import logo from "../../assets/itlogo.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Term from "../../components/Terms/terms";
import { signOutStart, portal } from "../../redux/auth/auth.actions";
import SideMenu from "./sidemenu";
import { fetchTopicsStart } from "../../redux/topics/topics.actions";
import "./dashboard.scss";
import { createStructuredSelector } from "reselect";
import { user, portalStatus } from "../../redux/auth/auth.selectors";
import { getTopicsList } from "../../redux/topics/topics.selectors";
import axios from "axios";

const Dashboard = ({
  history,
  fetchTopicsStart,
  signOutStart,
  jss1TopicList,
  user,
  portalStatus,
  portal
}) => {
  const [visible, setVisible] = useState(false);
  const token = localStorage.getItem("token");

  const handlePortalClose = () => {
  setTimeout(() => portal(false), 8000)
  };

  const random = (token) => {
    axios({
      method: 'post',
      url: 'https://api.involveteacher.space/public/v2/update_info',
      data: {
        name: "Anonymous"
      },

        headers: {
          "auth-token": token,
        },
    }).then(data => console.log(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTopicsStart(token);
    random(token);
  }, [fetchTopicsStart, token]);

  return (
    <React.Fragment>
      <div style={{ background: " #09203f", overflowX: "hidden" }}>
        <Sidebar.Pushable>
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
            style={{ width: "45%",  }}
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
              <div className="menu">
                <a className="item" href="https://digics.netlify.com" target="_blank" rel="noopener noreferrer">
                  <div>
                    <i className="icon home"></i>
                    Company
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
          <Sidebar.Pusher dimmed={visible}>
            <div
              className="pusher"
              style={{
                minHeight: "100vh",
                background: " #09203f",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <div
                className="main-content"
                style={{
                  minHeight: "100%",
                  padding: "3em",
                  height: "100vh",
                  overflow: "hidden",
                }}
              >
                <Grid>
                  <Grid.Row>
                    <Label size="huge" style={{background: "teal", color: "rgba(255,255,255, 0.8)"}}>
                      Mathematics
                    </Label>
                  </Grid.Row>

                  <Grid.Row centered >
                  <Segment loading={jss1TopicList.length === 0} style={{background: "transparent"}}>
                  { jss1TopicList.length > 0 ? <Term cards={jss1TopicList} />: ""}
                  </Segment>
                   
                  </Grid.Row>
                </Grid>
              </div>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

        <SideMenu />
        <nav className="ui top fixed inverted menu" >
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
              src={logo}
              style={{ marginLeft: "1em", padding: ".5em", width: "3.5em" }}
            />
          </div>

          <div className="right menu" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Header className="item" as="h4" style={{ borderRadius: "10%", height: "75%", color: "rgba(127,255,0, 0.8)"}}>
              Hi {" "}<span style={{marginLeft: "0.3em", fontStyle: "italic", color: "rgba(255,255,255, 0.8)"}}>{ user.name}</span>
            </Header>
            <a href="#" className="item">
              <i className="bell icon"></i>
            </a>
            <Dropdown className="item " icon="user circle">
              <Dropdown.Menu>
                <Dropdown.Item icon="folder" text="Profile" />
                <Dropdown.Item icon="wrench" text="Settings" />
                <Dropdown.Item
                  icon="sign-out"
                  text="Logout"
                  onClick={() => {
                    signOutStart();
                    history.push("/");
                  }}
                />

                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
        <TransitionablePortal onClose={handlePortalClose} open={portalStatus} >
          <Segment
            style={{ left: '40%', position: 'fixed', top: '5%', zIndex: 1000 }}
          >
            <Header>Hey {user.name}!</Header>
            <p>Your Registration was successful!.</p>
            
          </Segment>
        </TransitionablePortal>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: user,
  jss1TopicList: getTopicsList,
  portalStatus: portalStatus
});

export default connect(mapStateToProps, { fetchTopicsStart, signOutStart, portal })(
  withRouter(Dashboard)
);
