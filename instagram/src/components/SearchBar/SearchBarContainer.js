import React from 'react';
import { Card, CardTitle, CardText, Input } from 'reactstrap';
import InstaLogo from '../../img/logo.png';
import IGCamera from '../../img/IGCamera.png';
import styled from 'styled-components';

const CardBodyStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 220px 5px 230px;

  .cardLogoTitle {
    margin-left: 0%;
    width: 210px;

    .iGCamera {
      margin-top: 5px;
      width: 70px;
      padding: 0 15px;
    }

    .iGlogo {
      padding-left: 15px;
      width: 128px;
    }
  }

  .searchInput {
    border: 1px solid lightgrey;
    width: 250px;
    margin: 10px 50px 0 50px;
    text-align: center;
  }

  .iconsWrapper {
    width: contain;
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      display: flex;
      justify-content: center;
      width: 50px;
    }

    .btn {
      display: flex;
      align-items: flex-end;
      border: 1px solid grey;
      padding: 0 10px 25px 10px;
      color: black;
      background-color: white;
      height: 25px;
      margin-top: 35px;
      text-align: center;
      margin-right: -5%;

      :hover {
        color: white;
        background: black;
      }
    }
  }
`;

const SearchBar = props => {
  return (
    <Card>
      <CardBodyStyle>
        <CardTitle className="cardLogoTitle">
          <img className="iGCamera" alt="instagram logo" src={IGCamera} />
          <img className="iGlogo" alt="instagram logo" src={InstaLogo} />
        </CardTitle>
        <Input className="searchInput" placeholder="&#xF002; Search" />
        <CardText className="iconsWrapper">
          <i className="far fa-compass fa-lg icons" />
          <i className="far fa-heart fa-lg icons" />
          <i className="far fa-user fa-lg icons" />
          <button className="btn" onClick={props.logout}>
            {' '}
            Logout{' '}
          </button>
        </CardText>
      </CardBodyStyle>
    </Card>
  );
};

export default SearchBar;
