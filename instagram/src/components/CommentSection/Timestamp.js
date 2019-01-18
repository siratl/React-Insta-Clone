import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

const TimeStamp = styled.div`
  padding: 7px 0 20px 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 12px;
  color: grey;
`;

const Timestamp = props => {
  const thisDate = moment(props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow();
  return (
    <div>
      <TimeStamp>
        <span>{thisDate.toUpperCase()}</span>
      </TimeStamp>
    </div>
  );
};

Timestamp.propTypes = {
  timestamp: PropTypes.string,
};

export default Timestamp;
