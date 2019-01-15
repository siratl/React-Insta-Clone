import React from 'react';

const Likes = props => {
  return (
    <div className="likesContainer">   
      <p className="likes">{props.likes} likes</p>
    </div>
  );
};
  
export default Likes;
  