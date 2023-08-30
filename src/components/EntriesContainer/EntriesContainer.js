import React from 'react'
import Cards from '../Cards/Cards'
import styled from 'styled-components';
import './EntriesContainer.css'
import CalendarModal from '../CalendarModal/CalendarModal';
import { useState } from 'react';

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

const EntriesContainer = ({wins, date, setDate}) => {
  
  const notecards = ['green', 'lightGreen', 'purple', 'tanCircle', 'tanSquare', 'yellow', 'yellowSq'];

  let randomClass = () => {
    return notecards[Math.floor(Math.random() * notecards.length)];
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderModal = () => {
		return (
			<CalendarModal closeModal={closeModal} date={date} setDate={setDate}/>
		)
	}

  const singleWin = wins.map(win => {
    return (
      <CardContainer key={win.id}> 
        <Cards className={`${randomClass()}`} name={win.attributes.user_name} entry={win.attributes.entry} date={win.attributes.created_at}/>
      </CardContainer>
    );
  });

  return (
    <div className='today-info-container'>
      <div className='today-info'>
        {date && <h2>Today's Entries:</h2>}
        <button onClick={handleClick}>View Past Entry</button>
        {isModalOpen && renderModal()}
      </div>
      <EContainer>
        {wins.length ? singleWin : <p>Nothing recorded yet today!</p>} 
      </EContainer>
    </div>
  );
}

export default EntriesContainer