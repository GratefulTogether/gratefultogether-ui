import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  border: 3px #00717F;
  border-style: groove;
  padding: 10px;  
  height: 20vh;
  width: 40vw;
  transition: 1s;
  &:hover {
    transform: scale(1.4);
    margin: 4.5%
  }

`;

const TitleOfCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WinOfCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Cards = ({name, entry, date}) => {
  return (
    <Card>
      <TitleOfCard>
        <h3>Date: {date} </h3>
        <h3>Name: {name} </h3>
      </TitleOfCard>  
      <WinOfCard>
        <p>{entry}</p>
      </WinOfCard>
    </Card>
  )
}

export default Cards