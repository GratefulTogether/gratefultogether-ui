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
      background-color: #00717F;
      color: white;
      transition: .7s;
      border: none;
      padding: 10px 15px;
      border-radius: 20px;
      font-family: 'Cormorant', serif;
      font-size: 1em;
      &:hover {
        color: #000000;
        background-color: #00A9BF;
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