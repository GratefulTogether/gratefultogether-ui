import React from 'react'

import pagenotfound from '../../images/404.svg'
import './NotFound.css'

const NotFound = ({error}) => {

  console.log(error)

  return (
    <>
      {!error && <img src={pagenotfound} className='not-found' alt='404 page not found' />}
    </>
  )
}

export default NotFound