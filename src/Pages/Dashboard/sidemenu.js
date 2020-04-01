/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Sidebar, Dropdown, Image, Segment, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOutStart } from "../../redux/auth/auth.actions";
import "./dashboard.css";
import "./dashboard.css.map";

const SideMenu = ({history}) => {
    return (


      <div className="ui sidebar inverted vertical menu sidebar-menu" id="sidebar">
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
      </div>
    );
};

export default withRouter(SideMenu);

