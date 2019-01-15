import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
