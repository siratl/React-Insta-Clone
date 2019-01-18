import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const PostPage = styled.div`
  border: 1px solid green;
  width: 700px;
  margin: 0 auto;
`;

const CardBodyStyle = styled.div`
  border: 1px solid red;
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 65px;

  .headerThumb {
    border-radius: 50%;
    width: 30px;
  }

  .headerUser {
    font-weight: 650;
    border: 1px solid red;
padding: 10px;
  
  }
`;

const PostsContainer = props => {
  return (
    <PostPage>
      {props.posts.map(post => {
        return (
          <Card key={post.imageUrl}>
            <CardBodyStyle>
              <img
                className="headerThumb"
                src={post.thumbnailUrl}
                alt="User Thumbnail"
              />
              <div className="headerUser">{post.username}</div>
            </CardBodyStyle>

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
    </PostPage>
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
