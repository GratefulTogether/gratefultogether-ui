import close from '../../images/close.png'
import { Link } from 'react-router-dom';
import './CalendarModal.css'

const CalendarModal = ({ closeModal }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}><img src={close} alt='close modal'/></button>
        <h3>Select your date: </h3>
        <input type='date' className='date'/>
        <Link to='/date'>
        <button type='submit'>Submit</button>
      </Link>
      </div>
    </div>
  );
};

export default CalendarModal;