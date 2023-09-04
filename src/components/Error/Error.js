import React from 'react'
import { Link } from 'react-router-dom';
import fivehundred from '../../images/fivehundred.svg'
import pagenotfound from '../../images/404.svg'
import './Error.css'
import { styled } from 'styled-components';

const Error = ({error}) => {

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
  `

  return (
    <ErrorContainer>
      <Link to={`/`}>
        {!error && <button>Home</button>}
      </Link>
      {error && <img src={fivehundred} className='not-found' alt='404 page not found' />}
      {!error && <img src={pagenotfound} className='not-found' alt='404 page not found' />}
    </ErrorContainer>
  )
}

export default Error