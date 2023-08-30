import React from 'react';
import styled from 'styled-components';
import green from '../../images/notecards/green.png';
import lightGreen from '../../images/notecards/light-green.png';
import purple from '../../images/notecards/purple.png';
import tanCircle from '../../images/notecards/orange.png';
import tanSquare from '../../images/notecards/orange1.png';
import yellowSq from '../../images/notecards/orange2.png';
import yellow from '../../images/notecards/yellow.png';

const imageMapping = {
  purple: purple,
  green: green,
  lightGreen: lightGreen,
  tanCircle: tanCircle,
  tanSquare: tanSquare,
  yellow: yellow,
  yellowSq: yellowSq,
};

const Card = styled.div`
  
  padding: 10px;  
  height: 30vh;
  width: 26vw;
  transition: 1s;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 1s;
  &:hover {
    transform: scale(1.4);
    margin: 5.5%
  }
  background: url(${props => imageMapping[props.className] || 'default?'})
`;

const TitleOfCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 0% 0% 10%;
  font-family: 'Indie Flower', cursive;
`;

const WinOfCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Homemade Apple', cursive;
`;

const Cards = ({name, entry, date, className}) => {

  return (
    <Card className={className}>
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