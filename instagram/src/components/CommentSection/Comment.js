import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
  return (
    <div className='commentTextContainer'>
        <div className='commentText'>
            <p className="username">{props.comment.username}</p>
            <p className="comment">{props.comment.text}</p>{' '}
        </div>
      
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
