import React from 'react';
import { Card, CardBody, CardTitle, CardText, Input, Button } from 'reactstrap';
import InstaLogo from '../../img/logo.png';
import './SearchBar.css';

const SearchBar = (props) => {

  
    return (
        <Card>
            <CardBody className="searchBarWrapper">
                <CardTitle className="logoContainer">
                    <i className="fas fa-camera-retro"></i>
                    <img alt="instagram logo" src={InstaLogo}/>
                </CardTitle>
                <Input className="searchInput" placeholder="&#xF002; Search" />
                <CardText className='iconsWrapper'>
                    <i className="far fa-compass icons"></i>
                    <i className="far fa-heart icons"></i>
                    <i className="far fa-user icons"></i>
                </CardText>
                <Button onClick={props.logout}> Logout </Button>
            </CardBody>
        </Card>
    ); 
}

export default SearchBar;