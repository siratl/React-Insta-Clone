import React from 'react';
import './SearchBar.css';
import InstaLogo from '../../img/logo.png';
import CamLogo from '../../img/IGCamera.png'
import Heart from '../../img/heartIcon.png'
import Profile from '../../img/ProfileIcon.png'
import Explore from '../../img/ExploreIcon.png'

const SearchBarContainer = () => {
  return (
    <div className="searchBarWrapper">
      
      <div className="logoContainer">
        <div className='cameraImg'>
          <img alt='camera Logo' src={CamLogo} />
        </div>

        <div className='logoImg'>
          <img alt="instagram logo" src={InstaLogo}/>
        </div>
        
      </div>

      <div className='searchInput'>
        <input type="text" placeholder="Search" />
      </div>

      <div className='iconsWrapper'>
        <div className='icon exploreIcon'>
          <img  src={Explore} />
        </div>
        <div className='icon'>
          <img className='heartIcon' src={Heart} />
        </div>
        <div className='icon'>
          <img className=' profileIcon' src={Profile} />
        </div>
      </div>
    </div>
  );
};

export default SearchBarContainer;
