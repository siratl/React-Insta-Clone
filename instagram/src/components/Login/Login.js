import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { Form, Input, Button, FormGroup } from 'reactstrap';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = ev => {
    this.setState({ inputText: ev.target.value });
  };

  handleLogin = e => {
    const user = this.setState.username;
    ls.set('user', user);
    window.location.reload();
  };

  render() {
    return (
      <Form className="loginForm">
        <h3>Welcome to Insta-clone</h3>
        <h5>Please Login</h5>
        <FormGroup>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.state.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.state.handleChange}
          />
          <br />
          <Button onClick={this.state.handleLogin}>Log In</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
