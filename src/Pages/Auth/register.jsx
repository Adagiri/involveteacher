/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
  Item,
  Dropdown,
  Select,
  Flag
} from "semantic-ui-react";
import { authToggle } from "../../redux/auth/auth.actions";
import { connect } from "react-redux";

const RegisterForm = ({ authToggle }) => {
  const options = [
    { key: "234", icon: <Flag name="ng" />, text: "234", value:234 },
    { key: "233", icon: <Flag name="gh" />, text: "233", value: 233 },
    { key: "220", icon: <Flag name="gm" />, text: "220", value: 220 },
    { key: "231", icon: <Flag name="lr" />, text: "231", value: 231 },
    { key: "232", icon: <Flag name="sl" />, text: "232", value: 232 }
  ];

  // const options = [
  //   { key: 'm', text: 'Male', value: 'male' },
  //   { key: 'f', text: 'Female', value: 'female' },
  //   { key: 'o', text: 'Other', value: 'other' },
  // ]
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className="animated  bounceInDown  fast"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: "white" }} textAlign="center">
          <Icon name="signup" size="big" style={{ color: "orange" }} /> Create
          an Account
        </Header>
        <Form size="large">
          <Segment stacked style={{ background: "rgba(255, 255, 255, 0.2)" }}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />

            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              type="password"
            />

            <Form.Group>
            <Form.Field
            control={Select}
            options={options}
            placeholder='Country code'
            width={8}
          />

              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone "
                type="phone"
                width={12}
              />
            </Form.Group>

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Form.Input
              fluid
              icon="repeat"
              iconPosition="left"
              placeholder="Password Confirmation"
              type="password"
            />

            <Button
              color="orange"
              style={{ color: "white" }}
              size="large"
              fluid
            >
              Register
            </Button>
          </Segment>
        </Form>
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
      </Grid.Column>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  authToggle: obj => dispatch(authToggle(obj))
});

export default connect(null, mapDispatchToProps)(RegisterForm);
