import React, { Component } from 'react';
import PostsPage from './components/PostsContainer/PostsPage';
import authenticate from './components/Authentication/authenticate';
import Login from './components/Login/Login';
import styled from 'styled-components';

const AppStyled = styled.div`
  width: 100%;
  margin: 0 auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppStyled>
        <PostsPage logout={this.props.logout} />
      </AppStyled>
    );
  }
}
// console.log(logout)

export default authenticate(App)(Login);
