import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
 Card,
 Image,
  Message,
  Segment,
  Icon,
 
} from "semantic-ui-react";
import { connect } from "react-redux";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import {
  update_info_errors,
  update_info_loading
} from "../../redux/user/user.selectors";
import {
  user
} from "../../redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Dtemplate from "../../components/DTemplate/dtemplate";
import profile from "../../assets/profile_image.jpg";
import { updateUserProfileStart, setUpdateInfoLoading, setUpdateInfoError } from "../../redux/user/user.actions";

const ProfilePage = ( {
  update_info_loading,
  update_info_errors,
  setUpdateInfoError,
  user,
  setUpdateInfoLoading,
}) => {

  const reset = () => {
    setUpdateInfoLoading(false);
    setUpdateInfoError([]);
  }

  useEffect(() => {
    reset();
  }, [])

  const [credentials, setCredentials] = useState({
    username: user.name,
    email: user.email,
    password: ""
  });

  const [phone, setPhone] = useState(user.phone);

  const [changePassword, setChangePassword] = useState(false);

  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const [newPasswordData, setNewPasswordData] = useState({ newPassword: "",newPasswordConfirm: "" });

  const { newPassword , newPasswordConfirm} = newPasswordData;

  const { email, username, password } = credentials;


  const handleChange = (e) => {
     setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleNewPassword = (e) => {
    setNewPasswordData({...newPasswordData, [e.target.name]: e.target.value})
  }

  const isPasswordValid = (data) => {
  const {newPassword, newPasswordConfirm } = data;
  if (changePassword) {
    if (newPassword === newPasswordConfirm && newPassword.length > 6 && password.length !== 0) {
      return true
    }  else {
      setUpdateInfoError([{message: "Passwords don't match or are below 6 characters"}])
    
      return false
    }
  }

  }

  const isPhoneValid = () => {
   if (!phone || !isValidPhoneNumber(phone)) {
    setUpdateInfoError([{message: "Wrong Phone number format"}])
     return false;
   } 
   return true
  }

  const isProfileValid = (credentials) => {
    const {email, username, password } = credentials;

    if (!email || !username || !password) {
      setUpdateInfoError([{message: "Error, check that you have filled in your password and other fields correctly"}])
      return false
    } else {
      return true
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateInfoLoading(true)
    if (confirmPasswordShow) {

      if (changePassword) {
       if (isPasswordValid(newPasswordData)) {
         updateUserProfileStart({newPassword, password})
       } 
      } else {
        if (isProfileValid(newPasswordData) && isPhoneValid()) {
          updateUserProfileStart({name: username, email, phone,password})
        }
     
      }

    }
    else {
      setUpdateInfoLoading(false)
      setConfirmPasswordShow(true)
    }
  }

  const displayError = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);


    return (
        <Dtemplate>
        <div
        className="pusher"
        style={{
          minHeight: "100vh",
          background: " #09203f",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="main-content"
          style={{
            minHeight: "100vh",
            padding: "3em",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <Card fluid style={{maxWidth: "450px"}}
        className="animated tada delay-2s fast"
        
        >
        <Card.Content>
          <Image
            floated='left'
            size='mini'
            src={profile}
          />
          <Button icon="setting"
          floated="right" 
          content={changePassword ? "Edit Profile" : 'Reset Password' } onClick={()=> {setChangePassword(!changePassword); setConfirmPasswordShow(false)}} />
          <Card.Header>{user.name}'s Profile</Card.Header>
         
          <Card.Description>
          <Form onSubmit={handleSubmit}>
         
         { changePassword ? <Segment style={{ maxWidth: "400px"}} className="animated slideInUp faster" >
          <Form.Field>
          <label>New Password</label>
          <Form.Input placeholder={""}
            
          type="password"
          value={newPassword}
          style={{maxWidth: "400px"}}
          icon="edit outline"
          iconPosition="right"
          name="newPassword"
          onChange={handleNewPassword}
          />
        </Form.Field>

        <Form.Field>
        <label>Confirm new Password</label>
        <Form.Input placeholder={""}
        type="password"
        value={newPasswordConfirm}
        name="newPasswordConfirm"
          onChange={handleNewPassword}
        style={{maxWidth: "400px"}}
        icon="edit outline"
        />
      </Form.Field>
          </Segment> :
          <div className="animated slideInUp faster">
          <Form.Field>
          <label>Name</label>
          <Form.Input placeholder={username} 
          type="text"
          value={username}
          onChange={handleChange}
          style={{maxWidth: "400px"}}
          icon="edit outline"
          name="username"
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <Form.Input placeholder={email}
          type="email"
          value={email}
          onChange={handleChange}
          style={{maxWidth: "400px"}}
          icon="edit outline"
          
          name="email"
          />
        </Form.Field>

        <Form.Field >
        <div style={{display: "flex", justifyContent: "flex-start"}}>
        <label style={{color: "black", fontWeight: "bold", marginRight: ".5em"}}>Phone Number</label>
        <Icon name="edit outline" floated="right" />
        </div>
        <PhoneInput
            flags={flags}
            style={{ marginBottom: "13px", color: "red", maxWidth: "400px" }}
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            defaultCountry=""
          />
        
        </Form.Field>
        </div>
}
        

         { confirmPasswordShow && <Segment style={{background: "rgba(255, 0, 0, 0.26)", maxWidth: "250px"}}
         className="animated slideInDown faster"
         >
          <Form.Field>
          <label>{changePassword ? "Old password?" : "Confirm your password"} </label>
          <Form.Input placeholder={""}
          type="password"
          defaultValue={password}
          style={{maxWidth: "400px"}}
          icon="write"
          iconPosition="right"
          />
        </Form.Field>

          </Segment>}
        
          {update_info_errors.length > 0 && (
            <Message error className="animated shake fast">
              <h3>Error</h3>
              {displayError(update_info_errors)}
            </Message>
          )}
          
          <Button color='teal' size="large" type="submit" onSubmit={handleSubmit} style={{marginTop: "1em"}} loading={update_info_loading} disabled={update_info_loading || confirmPasswordShow} >
          <Icon name="send" />
          Update
        </Button>
        </Form>

        

          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         
          
            
        
        </Card.Content>
      </Card>
        </div>
      </div>
        </Dtemplate>
    )
};


const mapStateToProps = createStructuredSelector({
  update_info_loading: update_info_loading,
  update_info_errors: update_info_errors,
  user: user,
});

export default connect(
  mapStateToProps,
 {updateUserProfileStart, setUpdateInfoLoading, setUpdateInfoError}
)(withRouter(ProfilePage));