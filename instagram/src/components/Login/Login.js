import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { Form, Input, Button } from 'reactstrap';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      user: {},
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    ls.set('user', user);
    this.setState({
      user: ls.get('user'),
    });
    window.location.reload();
  };

  render() {
    return (
      <Form className="loginForm">
        <h3>Welcome to Insta-clone</h3>
        <h5>Please Login</h5>

        <Input
          name="username"
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <Button onClick={this.handleLogin}>Login</Button>
      </Form>
    );
  }
}

Login.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Login;
