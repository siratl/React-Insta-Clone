import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput'
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText: '',
    };
  }

  handleChange = (ev) => { 
    this.setState({inputText: ev.target.value})
  }

  addNewComment = (ev) => {
    ev.preventDefault()

    const newComments = {
      username: 'sirATL',
      text: this.state.inputText,
    }
    this.state.comments.push(newComments)
    this.setState({
      comments: this.state.comments,
      inputText: ''
    })
  };
 

  render() {
    return (
      <div className='commentWrapper'>
        {this.state.comments.map((comment, input) => {
          return <Comment key={input} comment={comment} />;
        })}
        <CommentInput />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string }),
  ),
};

export default CommentSection;
