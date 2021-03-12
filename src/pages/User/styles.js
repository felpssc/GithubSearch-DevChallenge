import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(FaSpinner)`
  margin: 0 auto;
  color: var(--gray);
  animation: ${rotate} 2000ms infinite linear;
`;


export const Header = styled.div`
  height: 5rem;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;

  @media(max-width: 728px) {
    justify-content: center;
    max-width:100vw;

    svg {
      display: none;
    }
  }

`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 130px;
  }
`;

export const Container = styled.div`
  min-height: 78.1vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 728px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
  }

  h3 {
    text-align: center;
    color: var(--gray);
  }
`;

export const UserContainer = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  color: var(--gray);

  @media(max-width: 728px) {
    max-width: 100vw;
    flex-direction: column;
    height: 400px;
    margin-bottom: 0px;

    img {
      width: 100px !important;
      margin: 0 !important  ;
    }

    > div {
      width: 100%;

      div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 1rem !important;
        min-width: 0px !important;
        
        p:nth-child(1) {
          margin-top: 1rem;
        }

        p {
          font-size: 10px;
          word-wrap: break-word;
        }
      }

      div:nth-child(3) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: .8rem;
      }
    }

  }

  div:nth-child(2) {
    div:nth-child(1) {
      h2 {
        color: var(--purple);
        margin-bottom: 5px;
      }
    }

    div:nth-child(2) {
      min-width: 470px;
      display: flex;
      height: 2rem;
      margin-top: 1rem;

      a {
        font-size: 0px;
      }

      p {
        margin-right: 10px;
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }
    }
  }

  div:nth-child(3) {
    display: flex;
    height: 2rem;
    align-items: center;

    p {
      margin-right: 15px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }

  }


  img {
    width: 180px;
    border-radius: 50%;
    margin-right: 40px;
  }

  #total-repositories {
    width: 180px;
    height: 70px;
    padding: 5px;
    margin-left: 90px;
    border-radius: 3px;
    background-color: var(--black);
    display: block;

    @media(max-width: 728px) {
      margin-left: 0px; 
      margin-top: .6rem;
    }


    h3 {
      text-align: center;
      margin-top: 0.3rem;
    }

    p {
      display: flex;
      justify-content: center;
    }

  }

`;

export const RepositoriesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding-right: 40px;

  @media(max-width: 728px) {
    grid-template-columns: repeat(1, 1fr);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    li {
      width: 15rem;
    }
  }


  li {
    display: flex;
    flex-direction: column;
    background: var(--black);
    border-radius: 4px;
    padding: 20px;
    
    > div {
      display: flex;
      p {
        margin-right: 12px;
        display: flex;
        align-items: center;
        color: var(--gray);

        svg {
          margin-right: 12px;
          color: var(--purple);
        }
      }
    }

    > strong {
      font-size: 22px;
      line-height: 20px;
      color: var(--gray);
      margin-top: 0px;
    }
    > p {
      font-size: 14px;
      margin: 10px 0 20px;
      color: var(--gray);
      min-height: 30px;
    }
    a {
      text-decoration: none;
    }
    a > button {
      width: 100%;
      background: #7159c1;
      color: #fff;
      border: 0;
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.7;
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  color: white;

  @media(max-width: 728px){
    width: 100vw;
    max-width: 100vw;
  } 

  svg {
    transition: opacity 0.2s;
  }

  svg:hover {
    opacity: 0.7;
  }

`;