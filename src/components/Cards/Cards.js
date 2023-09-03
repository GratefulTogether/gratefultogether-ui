import React from 'react';
import styled from 'styled-components';
import green from '../../images/notecards/green.png';
import lightGreen from '../../images/notecards/light-green.png';
import purple from '../../images/notecards/purple.png';
import tanCircle from '../../images/notecards/orange.png';
import tanSquare from '../../images/notecards/orange1.png';
import yellowSq from '../../images/notecards/orange2.png';
import yellow from '../../images/notecards/yellow.png';
import dayjs from 'dayjs'

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
  height: 450px;
  width: 450px;
  transition: 1s;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  
  background: url(${props => imageMapping[props.className] || 'default?'})
`;

const TitleOfCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15% 0% 0% 10%;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.4em;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
    cursor: default;
  }
`;

const WinOfCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Gloria Hallelujah', cursive;
  margin-top: 8%;
  font-size: 1.3em;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
    cursor: default;
  }
`;

const Cards = ({name, entry, date, className}) => {

  const shortDate = date.slice(0,10)
  const formattedDate = dayjs(shortDate).format('MMMM D, YYYY');
  

  return (
    <Card className={className}>
      <TitleOfCard>
        <h3>Date: {formattedDate} </h3>
        <h3>Name: {name} </h3>
      </TitleOfCard>  
      <WinOfCard>
        <p>{entry}</p>
      </WinOfCard>
    </Card>
  )
}

export default Cards