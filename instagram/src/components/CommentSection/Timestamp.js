import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import { CardText } from 'reactstrap';
import './CommentSection.css';

const Timestamp = props => {
    const thisDate = moment(props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()
    return (
        <CardText>
            <small className="timestampText">
                <span>{thisDate}</span>
            </small> 
        </CardText> 
    )
}

Timestamp.propTypes = {
    timestamp: PropTypes.string,  
};

export default Timestamp;