import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 20rem;
  height: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;

  img {
    width: 170px;
    margin-top: 50px;
  }

  input {
    width: 80%;
    height: 2rem;
    border: 0;
    background-color: var(--background);
    font-size: 17px;
    color: var(--gray);
    outline: none;
    text-align: center;
    border-bottom: 3px solid var(--purple);
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const Login = styled(Link)`
  width: 80%;

  button {
    width: 100%;
    height: 2.5rem;
    background-color: var(--purple);
    color: white;
    border: 0;
    font-weight: 700;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.8;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;