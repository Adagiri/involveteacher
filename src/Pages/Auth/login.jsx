import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
  Item
} from "semantic-ui-react";
import { connect } from "react-redux";
import {
  authToggle,
  setErrors,
  signInStart,
  setLoading
} from "../../redux/auth/auth.actions";
import {
  error_messages,
  loading,
  redirect
} from "../../redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";


const LoginForm = ({
  authToggle,
  loading,
  signInStart,
  setErrors,
  setLoading,
  error_messages,
  history
}) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = credentials;

  const handleInputError = (errors, inputName) =>
    errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";

  //Input__Change__Handler
  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
     setErrors([]);
 setLoading(true);
      signInStart({ email, password });
      
    }, 500 )
  };

  

  const displayError = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className="animated bounceInDown fast"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: "white" }} textAlign="center">
          <Icon name="sign in" size="big" style={{ color: "orange" }} /> Log-in
          to Dashboard
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked style={{ background: "rgba(255, 255, 255, 0.2)" }}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              className={handleInputError(error_messages, "email")}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              className={handleInputError(error_messages, "password")}
              name="password"
              value={password}
              onChange={handleChange}
              required
            />

            <Button
              color="orange"
              style={{ color: "white" }}
              size="large"
              fluid
              loading={loading}
              disabled={loading}
              // onClick={() => handleRedirect(redirect)}
            >
              Login
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
          Don't have an account?
          <Item
            as="a"
            onClick={() => authToggle("true")}
            style={{ cursor: "pointer", color: "orange" }}
          >
            {" "}
            Register
          </Item>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  authToggle: obj => dispatch(authToggle(obj)),
  setLoading: obj => dispatch(setLoading(obj)),
  setErrors: str => dispatch(setErrors(str)),
  signInStart: obj => dispatch(signInStart(obj))
});

const mapStateToProps = createStructuredSelector({
  loading: loading,
  error_messages: error_messages
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
