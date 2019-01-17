import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import './PostsContainer.css';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="PostsPage">
        <SearchBarContainer />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;
