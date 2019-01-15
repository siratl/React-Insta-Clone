import React from 'react';
import './Post.css';
import Header from './Header';
import CommentSection from '../CommentSection/CommentSection'
import Likes from '../CommentSection/Likes'
import CommentIcon from '../../img/Comment.png'
import Heart from '../../img/heartIcon.png'

const Post = props => {
  return (
    <div>
      <Header
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div>
        <img className='postImg' alt='Post Image' src={props.post.imageUrl} />
      </div>
      <div className='likeCommentWrapper'>
        <img className='heartIcon likeIcon' src={Heart} />
        <img className='commentIcon' alt='Comment Icon' src={CommentIcon}/>
      </div>
      
      <Likes likes={props.post.likes}/>
        <CommentSection comments={props.post.comments}/>
    </div>
  );
};

export default Post;
