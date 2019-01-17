import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Likes from './Likes'
import Timestamp from './Timestamp';
import CommentInput from './CommentInput'
import './CommentSection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: props.likes,

      timestamp: props.timestamp,
      comments: props.comments,
      inputText: '',
    };
  }

  likeToggle = () => {
    this.setState(prevState => ({
      likes: this.state.liked ? --prevState.likes : ++prevState.likes,
      liked: !prevState.liked,
    }));
  };

  handleChange = ev => {
    this.setState({ inputText: ev.target.value });
  };

  addNewComment = ev => {
    ev.preventDefault();

    const newComments = {
      username: 'sirATL',
      text: this.state.inputText,
    };
    this.state.comments.push(newComments);
    this.setState({
      comments: this.state.comments,
      inputText: '',
    });
  };

  render() {
    return (
      <div className="commentWrapper">
        <Likes
          likes={this.state.likes}
          liked={this.state.liked}
          likeToggle={this.likeToggle}
        />

        <Comment comments={this.state.comments} />

        <Timestamp timestamp={this.props.timestamp} />

        <CommentInput
          sumbit={this.addNewComment}
          value={this.state.inputText}
          onValueChange={this.handleChange}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  likes: PropTypes.number,
  timestamp: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

export default CommentSection;
