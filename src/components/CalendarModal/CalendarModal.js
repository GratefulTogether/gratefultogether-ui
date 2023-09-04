import close from '../../images/close.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs'
import styled from 'styled-components';
import './CalendarModal.css'

const Submit = styled.button`
  background-color: #262626;
  color: white;
  transition: .5s;
  border: 1px outset black;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: 'Cormorant', serif;
  font-size: 1.2em;
  &:hover {
    color: black;
    background-color: white;
  } 
`

const CalendarModal = ({ closeModal }) => {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState('')

  return (
    <div className='modal-container'>
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}><img src={close} alt='close modal'/></button>
          <h3>Select your date: </h3>
          <input type='date' className='date' onChange={e => setDate(e.target.value)} max={today}/>
          <Link to={`date/${date}`}>
          <Submit type='submit' disabled={!date}>Submit</Submit>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;