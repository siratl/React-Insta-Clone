import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  padding: 0;
`;

const CommentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 4px 0;
  font-weight: 450;
`;

const Span = styled.div`
  padding-right: 10px;
  font-weight: bold;
`;

const Comments = props => {
  return (
    <Div>
      {props.comments.map(comment => {
        return (
          <CommentWrap key={comment.text}>
            <Span>{comment.username}</Span>
            {comment.text}
          </CommentWrap>
        );
      })}
    </Div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

export default Comments;
