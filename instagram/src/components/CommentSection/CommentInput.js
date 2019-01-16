import React from 'react';


const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment} >
      <input 
      value={props.inputText}
      className="commentInput" 
      placeholder="Add comment..." 
      type="text"
      onChange={props.handleChange}
      />
    </form>
  );
};

export default CommentInput;
