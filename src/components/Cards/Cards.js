import React from 'react'
import './Cards.css'

const Cards = ({name, entry, date}) => {
  return (
    <div className='cards'>
    <div className='title'>
      <h3>Date: {date} </h3>
      <h3>Name: {name} </h3>
    </div>  
    <div className='win'>
      <p>{entry}</p>
      </div>
    </div>
  )
}

export default Cards