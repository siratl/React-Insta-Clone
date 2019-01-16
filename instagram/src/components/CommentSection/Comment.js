import React from 'react';
import PropTypes from 'prop-types';
import { CardText } from 'reactstrap';
import './CommentSection.css';

const Comments = props => {
  return (
    <div className='commentWrapper'>
      {props.comments.map(comment => {
        return (
            <CardText key={comment.text} className='commentText'>
                <p className="username">{comment.username}</p>
                {comment.text}
            </CardText>
        );
      })}
    </div>
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
