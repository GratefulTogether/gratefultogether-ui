import close from '../../images/close.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs'
import './CalendarModal.css'

const CalendarModal = ({ closeModal }) => {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState('')
  

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}><img src={close} alt='close modal'/></button>
        <h3>Select your date: </h3>
        <input type='date' className='date' onChange={e => setDate(e.target.value)} max={today}/>
        <Link to={`date/${date}`}>
        <button type='submit' disabled={!date}>Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default CalendarModal;