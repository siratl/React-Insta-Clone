import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.div`
  .form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .comment-input {
      padding: 7px 10px;
      border-radius: 3px;
    }
  }
`;

const Ellipsis = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: gray;
`;

const CommentInput = props => {
  return (
    <Form>
      <form className="form" onSubmit={props.sumbit}>
        <input
          className="comment-input"
          placeholder="Add a comment..."
          value={props.value}
          onChange={props.onValueChange}
        />
        <Ellipsis className="fas fa-ellipsis-h" />
      </form>
    </Form>
  );
};

CommentInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSumbit: PropTypes.func,
};

export default CommentInput;
