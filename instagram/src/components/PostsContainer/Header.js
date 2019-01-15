import React from 'react';
import './Post.css';

const Header = props => {
  return (
    <div className='postHeader'>
      <div>
        <img
        alt='Header Thumbnail'
        className='headerThumb'
        src={props.thumbnailUrl} 
        />
      </div>
      <div className='headerUser'>{props.username}</div>
    </div>
  );
};

export default Header;
