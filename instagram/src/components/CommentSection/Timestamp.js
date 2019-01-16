import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment'
import { CardText } from 'reactstrap';
import './CommentSection.css';

const Timestamp = props => {
    return (
        <CardText>
            <small className="timestampText">
                <Moment fromNow>{props.timestamp}</Moment>
            </small> 
        </CardText> 
    )
}

Timestamp.propTypes = {
    timestamp: PropTypes.string,  
};

export default Timestamp;