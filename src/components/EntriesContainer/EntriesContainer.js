import React from 'react'
import Cards from '../Cards/Cards'
import styled from 'styled-components';



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
    <EContainer>
      {singleWin} 
    </EContainer>
  );
}

export default EntriesContainer