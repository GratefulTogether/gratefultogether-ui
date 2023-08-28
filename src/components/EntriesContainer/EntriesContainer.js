import React from 'react'
import Cards from '../Cards/Cards'
import styled from 'styled-components';
import './EntriesContainer.css'


const EntriesContainer = ({wins}) => {

  const CardContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 2%;
    transition: background-color 1s;
    
  `;

  const EContainer = styled.div`

 

  `;

  const singleWin = wins.data.map(win => {
    return (
      <CardContainer key={win.id}> 
        <Cards name={win.attributes.user_name} entry={win.attributes.entry} date={win.attributes.created_at}/>
      </CardContainer>
    );
  });

  return (
    <div className='today-info-container'>
      <div className='today-info'>
        <h2>Today's Entries:</h2>
        <button>View Past Entries</button>
      </div>
      <EContainer>
        {wins.data.length ? singleWin : <p>Nothing recorded yet today!</p>} 
      </EContainer>
    </div>
  );
}

export default EntriesContainer