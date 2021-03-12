import React, { useContext } from 'react';
import { Container, SearchContainer, Login } from './styles';
import logoVertical from '../../assets/images/logo-vertical.svg';
import { AppContext } from '../../contexts/AppContext';

export function Home() {

  const { handleInput, user, getUserInfo } = useContext(AppContext);
  
  return (
    <Container>
      <SearchContainer>
        <img src={logoVertical} alt="Github Search" />
        <input type="text" placeholder="Enter user name" onChange={handleInput} required ></input>
        <Login to="/user" onClick={getUserInfo}><button type="button" disabled={!(user !== undefined && user !== '')}>Search</button></Login>
      </SearchContainer>
    </Container>
  );
}