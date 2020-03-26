import React from "react";
import { Label, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOutStart } from "../../redux/auth/auth.actions";

const Dashboard = ({ history, signOutStart }) => {

  const handleSignOut = () => {
  signOutStart();
  setTimeout(() =>  history.push("/signin"), 500)
  

  }
  return (
    <div style={{marginTop: "4rem"}}>
      <Label>Dashboard</Label>
      <Button
        color="orange"
        onClick={
           
          handleSignOut
        
        }
      >
        log out
      </Button>
    </div>
  );
};

export default connect(null, { signOutStart })(withRouter(Dashboard));
