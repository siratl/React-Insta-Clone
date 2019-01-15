import React from 'react';
import './Post.css';
import Header from './Header';

const Post = props => {
  return (
    <div>
      <Header
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
    </div>
  );
};

export default Post;
