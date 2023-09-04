import React from 'react'
import { Link } from 'react-router-dom';
import fivehundred from '../../images/fivehundred.svg'
import pagenotfound from '../../images/404.svg'
import { styled } from 'styled-components';

const ErrorContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  button {
    font-family: 'Cormorant', serif;
    background-color: #f6ebee;
    border: 2px solid #30a2af;
    border-radius: 5px;
    color: #0e0609;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #f6acc7;
    } 
  }
`;

const NotFound = styled.img `
  width: 75%;
  height: auto;
  align-self: center;
`;

const Error = ({error}) => {

  return (
    <ErrorContainer>
      <Link to={`/`}>
        {!error && <button>Home</button>}
      </Link>
      {error && <NotFound className='not-found' src={fivehundred} alt='404 page not found' />}
      {!error && <NotFound src={pagenotfound} className='not-found' alt='404 page not found' />}
    </ErrorContainer>
  )
}

export default Error