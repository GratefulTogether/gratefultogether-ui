import React from 'react'
import PropTypes from 'prop-types';
import Cards from '../Cards/Cards'
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2%;
  transition: background-color 1s;
`;

const EContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const TodayInfoContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntriesContainer = ({wins}) => {
  const notecards = ['green', 'lightGreen', 'purple', 'tanCircle', 'tanSquare', 'yellow', 'yellowSq'];

  let randomClass = () => {
    return notecards[Math.floor(Math.random() * notecards.length)];
  };

  const singleWin = wins.map(win => {
    return (
      <CardContainer key={win.id}> 
        <Cards className={`${randomClass()}`} name={win.attributes.user_name} entry={win.attributes.entry} date={win.attributes.created_at}/>
      </CardContainer>
    );
  });

  return (
    <TodayInfoContainer className='today-info-container'>
      <EContainer>
        {!!wins.length ? singleWin : <p>Nothing recorded for this date!</p>} 
      </EContainer>
    </TodayInfoContainer>
  );
}

EntriesContainer.propTypes = {
  wins: PropTypes.array,
};

export default EntriesContainer