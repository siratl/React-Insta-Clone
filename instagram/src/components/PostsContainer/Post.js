import React from 'react';
import './Post.css';
import Header from './Header';
import CommentSection from '../CommentSection/CommentSection'
import Likes from '../CommentSection/Likes'
import CommentIcon from '../../img/Comment.png'
import Heart from '../../img/heartIcon.png'
import dummyData from '../../dummy-data';

class Post extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    liked: false,
    likes: props.post.likes,
    comments: props.comments,
    posts: props.post,
    
  };
}

likeToggle = () => {
  this.setState(prevState => ({
    likes: (this.state.liked) ? --prevState.likes : ++prevState.likes,
    liked: !prevState.liked,
  }))
}

  render() {
    return (
      <div>
        <Header
          username={this.state.posts.username}
          thumbnailUrl={this.state.posts.thumbnailUrl}
        />
        <div>
          <img className='postImg' alt='Post Image' src={this.state.posts.imageUrl} />
        </div>
        <div className='likeCommentWrapper'>
          <img onClick={this.likeToggle} className='heartIcon likeIcon' src={Heart} />
          <img className='commentIcon' alt='Comment Icon' src={CommentIcon}/>
        </div>
        
        <Likes likes={this.state.likes} likePost={this.likeToggle}/>
        <CommentSection comments={this.state.posts.comments}/>
      </div>
    );
  }
};

export default Post;
