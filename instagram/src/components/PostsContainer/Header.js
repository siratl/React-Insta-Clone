import React from 'react';
import './Post.css';

const Header = props => {
  return (
    <div>
      <div>{props.username}</div>
    </div>
  );
};

export default Header;
