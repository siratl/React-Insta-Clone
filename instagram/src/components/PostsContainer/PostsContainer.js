import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostsContainer.css';

const PostsContainer = props => {
  return (
    <div>
      {props.posts.map(post => {
        return (
          <Card key={post.imageUrl} className="PostContainer">
            <CardBody>
              <img
                className="headerThumb"
                src={post.thumbnailUrl}
                alt="User Thumbnail"
              />
              <span className="headerUser">{post.username}</span>
            </CardBody>

            <img className="postImage" src={post.imageUrl} alt="Post here" />

            <CardBody>
              <CommentSection
                comments={post.comments}
                timestamp={post.timestamp}
                likes={post.likes}
              />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.array,
    }),
  ),
};
export default PostsContainer;
