import React from 'react';
import './Post.css';
import Header from './Header';
import CommentSection from '../CommentSection/CommentSection'

const Post = props => {
  return (
    <div>
      <Header
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div>
        <img className='postImg' alt='thumbnail' src={props.post.imageUrl} />
      </div>
        <CommentSection comments={props.post.comments}/>
    </div>
  );
};

export default Post;
