import React from 'react';
import PropTypes from 'prop-types';
import { CardBody } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const PostPage = styled.div`
  width: 700px;
  margin: 0 auto;
  border-radius: 4px;
`;

const Card = styled.div`
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;

  img {
    width: 100%;
    border: 3px solid white;
    border-radius: 7px;
  }
`;

const CardBodyStyle = styled.div`
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
