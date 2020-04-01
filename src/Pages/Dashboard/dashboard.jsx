/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Sidebar,
  Dropdown,
  Image,
  Segment,
  Icon,
  Header
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { useBooleanKnob } from '@stardust-ui/docs-components';
import { signOutStart } from "../../redux/auth/auth.actions";
import "./dashboard.css";
import "./dashboard.css.map";
import SideMenu from "./sidemenu";
import Term from "../../components/Terms/terms";
import { GlobalStyle } from  "../../components/Terms/terms.style";

const Dashboard = ({ history, signOutStart }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
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
            <div className="menu" onClick={() => history.push("/")}>
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
        <Sidebar.Pusher dimmed={visible}>
        <div className="pusher">
            <div className="main-content">
            <React.Fragment>
           
            <Term />
            </React.Fragment>
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
              <Dropdown.Item icon="sign-out" text="Logout" />

              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default connect(null, { signOutStart })(withRouter(Dashboard));
