import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Image,
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
} from "../../redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { animated ,useTransition } from "react-spring";
import logo from "../../assets/itlogo.png";

const LoginForm = ({
  authToggle,
  loading,
  signInStart,
  setErrors,
  setLoading,
  error_messages
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

  const transitions = useTransition(null , null, {
    from: {opacity: 0, transform: "translate(100vw, 0)"},
   enter: {opacity: 1, transform: "translate(0, 0)", zIndex: "11", width: "100%", display: "flex", justifyContent: "center", height: "100vh", position: "absolute", top: "0", left: "0", paddingTop: "3em"},
   leave: { opacity: 0, transform: "translate(-50%, 0)"}
   });

  

  const displayError = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);
  return    transitions.map(({ item, key, props}) => 
  <animated.div style={props}>
  <Grid
      textAlign="center"
      verticalAlign="middle"

      style={{ zIndex: "11", minWidth: "50%", overflow: "hidden", height: "100vh"}}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
       
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked style={{ background: "rgba(255, 255, 255, 0.2)" }}>
          <div style={{position: "absolute", top: "-3em", display: "flex", }}><Image size='mini' src={logo}  />
          <p  style={{ color: "rgba(127,255,0, 0.8)", fontSize: "22px", fontWeight: "500", marginBottom: "0.6", position: 'absolute', bottom: "0", left: "2em" }} >
     Login

    </p>
          </div>
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
              color="teal"
              style={{ color: "white" }}
              size="large"
              fluid
              loading={loading}
              disabled={loading}
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
            onClick={() => authToggle(true)}
            style={{ cursor: "pointer", color: "rgba(127,255,0, 0.8)" }}
          >
            {" "}
            Register
          </Item>
        </Message>
      </Grid.Column>
    </Grid>
    </animated.div>
  ) 
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
