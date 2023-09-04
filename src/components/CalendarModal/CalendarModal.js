import close from '../../images/close.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs'
import styled from 'styled-components';

const ModalContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  z-index: 1;`

const Modal = styled.div `
  position: fixed;
  z-index: 2;
  border-radius: 15px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e4a29be2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 3px solid white;
  transition: .2s ease;`

const ModalContent = styled.div `
  padding: 50px;
  border-radius: 8px;
  display: grid;
  place-items: center;`

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

const ModalClose = styled.button `
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`

const DateInput = styled.input `
  margin: 20px;
`

const CalendarModal = ({ closeModal }) => {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState('')

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalClose onClick={closeModal}><img src={close} alt='close'/></ModalClose>
          <h3>Select your date: </h3>
          <DateInput type='date' className='date' onChange={e => setDate(e.target.value)} max={today}/>
          <Link to={`date/${date}`}>
          <Submit type='submit' disabled={!date}>Submit</Submit>
          </Link>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
};

export default CalendarModal;