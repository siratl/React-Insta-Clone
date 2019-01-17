import React, { Component } from 'react';
import PostsPage from './components/PostsContainer/PostsPage';
import authenticate from './components/Authentication/authenticate';
import Login from './components/Login/Login';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage logout={this.props.logout} />
      </div>
    );
  }
}
// console.log(logout)

export default authenticate(App)(Login);
