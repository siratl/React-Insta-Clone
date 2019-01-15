import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div>
      <p className="comment">{props.comment.text}</p>{' '}
      <p className="username">{props.comment.username}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default Comment;
