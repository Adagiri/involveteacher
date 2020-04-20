/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./dashboard.scss";
import { signOutStart, setSignOutModal } from "../../redux/auth/auth.actions";
import { connect } from "react-redux";

const SideMenu = ({ history, setSignOutModal }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  

  return (
    <div className="side">
      <div className="item">
        <div className="menu">
          <a className="item" onClick={() => history.push("/dashboard")}>
            <div>
              <i className="icon tachometer alternate"></i>
              Dashboard
            </div>
          </a>
        </div>
        <div className="menu">
          <a
            className="item"
            href="https://digics.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <a className="item" onClick={() => history.push("/profile")}>
            <div>
              <i className="folder icon"></i>Profile
            </div>
          </a>
          <a className="item" onClick={() => setSignOutModal(true)}>
            <div>
              <i className="sign-out icon"></i>Logout
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setSignOutModal })(withRouter(SideMenu));
