import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
  Item,
  Modal
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

const RegisterForm = ({
  authToggle,
  loading,
  setLoading,
  setErrors,
  error_messages,
  signUpStart,
  setModal,
  set_modal,
  history
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
    if (username.length > 15) {
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

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className="animated  bounceInDown  fast"
      style={{ zIndex: "50", minWidth: "50%"}}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: "white" }} textAlign="center">
          <Icon name="signup" size="big" style={{ color: "orange" }} /> Create
          an Account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked style={{ background: "rgba(255, 255, 255, 0.2)" }}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
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
              color="orange"
              style={{ color: "white" }}
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
            style={{ cursor: "pointer", color: "orange" }}
          >
            {" "}
            Login
          </Item>
        </Message>
        <Modal
          dimmer="blurring"
          size="mini"
          open={set_modal}
          onClose={() => setModal(false)}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          style={{ backgroundColor: "blue" }}
        >
          <Modal.Header style={{ backgroundColor: "#09203f", color: "white" }}>
            Registration Successful
          </Modal.Header>
          <Modal.Content style={{ backgroundColor: "#09203f", color: "white" }}>
            <p>Please click below to dashboard</p>
          </Modal.Content>
          <Modal.Actions style={{ backgroundColor: "#09203f", color: "white" }}>
            <Button
              style={{ backgroundColor: "teal", color: "white" }}
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
              onClick={() => {
                history.push("/dashboard");
                setModal(false);
              }}
            />
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  );
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
