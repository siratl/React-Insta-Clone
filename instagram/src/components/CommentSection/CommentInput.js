import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'reactstrap';
import './CommentSection.css';

const CommentInput = (props) => {
    return (
        <Form className="comment-form" onSubmit={props.sumbit}>
            <Input 
                className="comment-input" 
                placeholder="Add a comment..." 
                value={props.value} 
                onChange={props.onValueChange}
            />
            <i className="fas fa-ellipsis-h"></i>
        </Form>
    )
}

CommentInput.propTypes = {
    value: PropTypes.string,  
    onChange: PropTypes.func,
    onSumbit: PropTypes.func    
};

export default CommentInput;