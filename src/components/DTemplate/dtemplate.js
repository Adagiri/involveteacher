/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect} from "react";
import {
  Sidebar,
  Dropdown,
  Image,
  Header,
  TransitionablePortal,
  Segment,
  Modal,
  Button,
  Message,
} from "semantic-ui-react";

import logo from "../../assets/itlogo.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOutStart, portal, setLoading, setSignOutModal, setErrors } from "../../redux/auth/auth.actions";
import SideMenu from "../../components/Sidemenu/sidemenu";
import { GlobalStyle } from "./dashboard.styles";
import { createStructuredSelector } from "reselect";
import {
  user,
  portalStatus,
  error_messages,
  token,
  loading,
  signoutModal
} from "../../redux/auth/auth.selectors";
import axios from "axios";

const Dtemplate = ({ children, ...props }) => {
  const [visible, setVisible] = useState(false);

  const handlePortalClose = () => {
    setTimeout(() => portal(false), 8000);
  };

  const clearAll = () => {
    props.portal(false); setLoading(false); setSignOutModal(false);
    props.setErrors([]);
  }

 


  useEffect(() => {
    clearAll()
  }, []);


  return (
    <React.Fragment>
      <GlobalStyle />
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
            style={{
              width: "45%",
              marginTop: "40px !important",
              maxHeight: "calc(100% - 40px) !important",
              height: "calc(100% - 40px) !important",
            }}
          >
            <SideMenu />
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>{  children}</Sidebar.Pusher>
        </Sidebar.Pushable>
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
              src={logo}
              style={{ marginLeft: "1em", padding: ".5em", width: "3.5em" }}
            />
          </div>

          <div
            className="right menu"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Header
              className="item"
              as="h4"
              style={{
                borderRadius: "10%",
                height: "75%",
                color: "rgba(127,255,0, 0.8)",
              }}
            >
              Hi{" "}
              <span
                style={{
                  marginLeft: "0.3em",
                  fontStyle: "italic",
                  color: "rgba(255,255,255, 0.8)",
                }}
              >
                {props.user && props.user.name}
              </span>
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
                  onClick={() => props.setSignOutModal(true)}
                />

                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
        <TransitionablePortal
          onClose={handlePortalClose}
          open={props.portalStatus}
        >
          <Segment
            style={{ left: "40%", position: "fixed", top: "5%", zIndex: 1000 }}
          >
            <Header>Hey {props.user && props.user.name}!</Header>
            <p>Your Registration was successful!.</p>
          </Segment>
        </TransitionablePortal>
        

      
        <Modal
        className="zoomIn animated faster"
        open={props.signoutModal}
        closeOnEscape={true}
        closeOnDimmerClick={true}
        onClose={() => {props.setSignOutModal(false);
          props.setLoading(false);
          } }
      >
        <Modal.Header>Log Out</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to Logout</p>
          {
            props.error_messages.length > 0 &&
            
          <Message error className="shake animated fast" >
            <p>Network Error</p>
          </Message>
         
          }
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => {props.setSignOutModal(false);
          props.setLoading(false);
          } } negative>
            No
          </Button>
          <Button
            onClick={() => props.signOutStart()}
            positive
            labelPosition='right'
            icon='checkmark'
            content='Yes'
            loading={props.loading}
            disabled={props.loading}
          />
        </Modal.Actions>
      </Modal>     
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: user,
  portalStatus: portalStatus,
  token: token,
  loading: loading,
  signoutModal: signoutModal,
  error_messages: error_messages
});

export default connect(mapStateToProps, {
  signOutStart,
  portal,
  setLoading,
  setSignOutModal,
  setErrors
})(withRouter(Dtemplate));
