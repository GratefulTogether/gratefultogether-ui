import React from 'react'

import fivehundred from '../../images/fivehundred.svg'
import pagenotfound from '../../images/404.svg'
import './Error.css'

const Error = ({error}) => {

  console.log(error)

  return (
    <>
      {error && <img src={fivehundred} className='not-found' alt='404 page not found' />}
      {!error && <img src={pagenotfound} className='not-found' alt='404 page not found' />}
    </>
  )
}

export default Error