
import React from "react";
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
import { authToggle } from "../../redux/auth/auth.actions";

const LoginForm = ({ authToggle }) => {
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className="animated bounceInDown fast"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: "white" }} textAlign="center">
          <Icon name="sign in" size="big" style={{ color: "orange" }} /> Log-in to Dashboard
        </Header>
        <Form size="large">
          <Segment stacked style={{ background: "rgba(255, 255, 255, 0.2)" }}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button
              color="orange"
              style={{ color: "white" }}
              size="large"
              fluid
            >
              Login
            </Button>
          </Segment>
        </Form>
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
  authToggle: (obj) => dispatch(authToggle(obj))
})


export default connect(null, mapDispatchToProps)(LoginForm);
