import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Image,
  Message,
  Segment,
  Item,
} from "semantic-ui-react";
import {
  authToggle,
  setLoading,
  setErrors,
  signUpStart,
  setModal
} from "../../redux/auth/auth.actions";
import { connect } from "react-redux";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import {
  loading,
  error_messages,
  set_modal
} from "../../redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import logo from "../../assets/itlogo.png";

const RegisterForm = ({
  authToggle,
  loading,
  setLoading,
  setErrors,
  error_messages,
  signUpStart,
  setModal,
  set_modal,
  history,
  setToggle
}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [phone, setPhone] = useState();

  const { email, password, confirmPassword, username } = credentials;

  //Error__Handling__Start
  const isFormValid = () => {
    let errors = [];
    let error;
    if (isFormEmpty(credentials, phone)) {
      error = { message: "Fill in all fields" };
      setErrors([...errors, error]);
      return false;
    } else if (!isNameValid(credentials)) {
      error = { message: "Username is too long" };
      setErrors([...errors, error]);
      return false;
    } else if (!isPasswordValid(credentials)) {
      error = { message: "Invalid password" };
      setErrors([...errors, error]);
      return false;
    } else if (!isPhoneValid(phone)) {
      error = { message: "Phone number is invalid" };
      setErrors([...errors, error]);
      return false;
    } else {
      return true;
    }
  };

  const isFormEmpty = (
    { username, email, password, confirmPassword },
    phone
  ) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !confirmPassword.length ||
      !phone
    );
  };

  const isPasswordValid = ({ confirmPassword, password }) => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const isPhoneValid = phone => {
    if (isValidPhoneNumber(phone)) {
      return true;
    } else {
      return false;
    }
  };

  const isNameValid = ({ username }) => {
    if (username.length > 50) {
      return false;
    } else {
      return true;
    }
  };

  //Error__Handling__End

  //Submit__Form__Handler
  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    setTimeout(() => {
      if (isFormValid()) {
        
        setLoading(true);
        signUpStart({ name: username, email, password, phone });
      } else {
        setLoading(false);
      }
    }, 1000);
  };

  //Input__Change__Handler
  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  //Display__And__Handle__Error__Sections

  const handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";
  };
  const displayError = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

    const transitions = useTransition(null , null, {
      from: {opacity: 0, transform: "translate(100%, 0)"},
     enter: {opacity: 1, transform: "translate(0, 0)", zIndex: "11", width: "100%", display: "flex", justifyContent: "center", minHeight: "100vh",  paddingTop: "3em"},
     leave: { opacity: 0, transform: "translate(-90%, 0)"}
     });
  

  return  transitions.map(({ item, key, props}) => 
  <animated.div style={props} key={key}>
  <Grid
      textAlign="center"
      verticalAlign="middle"
      style={{ zIndex: "11", minWidth: "50%"}}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
      
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked style={{ background: "rgba(255, 255, 255, 0.2)" }}>
          <div style={{position: "absolute", top: "-3em", display: "flex", }}><Image size='mini' src={logo}  />
          <p  style={{ color: "rgba(127,255,0, 0.8)", fontSize: "22px", fontWeight: "500", marginBottom: "0.6", position: 'absolute', bottom: "0", left: "2em" }} >
     Register

    </p>
          </div>
          
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Full name"
              name="username"
              value={username}
              onChange={handleChange}
              required
              className={handleInputError(error_messages, "username")}
            />

            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className={handleInputError(error_messages, "email")}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className={handleInputError(error_messages, "password")}
            />

            <Form.Input
              fluid
              icon="repeat"
              iconPosition="left"
              placeholder="Password Confirmation"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
              className={handleInputError(error_messages, "password")}
            />

            <PhoneInput
              flags={flags}
              style={{ marginBottom: "13px", color: "red" }}
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              defaultCountry="NG"
              required
              className={handleInputError(error_messages, "phone")}
            />

            <Button
             color="teal"
              size="large"
              fluid
              loading={loading}
              disabled={loading}
            >
              Register
            </Button>
          </Segment>
        </Form>
        {error_messages.length > 0 && (
          <Message error className="animated shake fast">
            <h3>Error</h3>
            {displayError(error_messages)}
          </Message>
        )}
        <Message
          as="h2"
          style={{ background: "rgba(255, 255, 255, 0.2)", color: "white" }}
        >
          Already have an account?
          <Item
            as="a"
            onClick={() => authToggle("false")}
            style={{ cursor: "pointer", color: "rgba(127,255,0, 0.8)" }}
          >
            {" "}
            Login
          </Item>
        </Message>
        
      </Grid.Column>
    </Grid>
  </animated.div>)
    
 
};

const mapDispatchToProps = dispatch => ({
  authToggle: obj => dispatch(authToggle(obj)),
  setLoading: obj => dispatch(setLoading(obj)),
  setErrors: str => dispatch(setErrors(str)),
  signUpStart: obj => dispatch(signUpStart(obj)),
  setModal: obj => dispatch(setModal(obj))
});

const mapStateToProps = createStructuredSelector({
  loading: loading,
  error_messages: error_messages,
  set_modal: set_modal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterForm));
