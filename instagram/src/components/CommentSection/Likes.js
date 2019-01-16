import React from 'react';
import PropTypes from 'prop-types';
import { CardText } from 'reactstrap';
import './CommentSection.css';

const Likes = props => {
  return (
    <div className="likesContainer">
      <CardText>
        {props.liked 
        ? <i className="fas fa-heart" onClick={props.likeToggle} />
        : <i className="far fa-heart" onClick={props.likeToggle} />
        }
        <i className="far fa-comment" />
      </CardText>
      <CardText className="likes">{props.likes} likes</CardText>
    </div>
  );
};

Likes.propTypes = {
  likes: PropTypes.number,
  liked: PropTypes.bool,
  likeToggle: PropTypes.func,
};

export default Likes;
