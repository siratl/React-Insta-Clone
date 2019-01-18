import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LikesStyle = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
`;

const CardText = styled.div`
  width: fit-content;
  padding: 2px 0 13px 0;
  font-size: 20px;
`;

const Div = styled.div`
  width: 10px;
  padding-right: 45px;
  cursor: pointer;
`;

const CardTexts = styled.div`
  padding: 2px 0 10px 0;
  font-size: 17px;
  font-weight: bold;
`;

const Likes = props => {
  return (
    <LikesStyle>
      <CardText>
        {props.liked ? (
          <Div className="fas fa-heart fa-lg" onClick={props.likeToggle} />
        ) : (
          <Div className="far fa-heart fa-lg" onClick={props.likeToggle} />
        )}
        <Div className="far fa-comment fa-lg" />
      </CardText>
      <CardTexts>{props.likes} likes</CardTexts>
    </LikesStyle>
  );
};

Likes.propTypes = {
  likes: PropTypes.number,
  liked: PropTypes.bool,
  likeToggle: PropTypes.func,
};

export default Likes;
