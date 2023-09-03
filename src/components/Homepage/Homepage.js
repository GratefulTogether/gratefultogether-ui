import Form from '../Form/Form.js'
import logo from '../../images/GratefulTogetherLogo.png'
import styled from 'styled-components';
import EntriesContainer from "../EntriesContainer/EntriesContainer"
import Nav from "../NavBar/NavBar.js";
import { useState, useEffect } from 'react';
import CalendarModal from '../CalendarModal/CalendarModal.js';

const HomepageContainer = styled.div `
  display: flex;
  flex-direction: column;
`

const Logo = styled.img `
  height: auto;
  width: 450px;
  align-self: center;
`

const TodayInfo = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  align-self: center;
  margin-top: 20px;
  @media (max-width: 630px) {
    width: 80%;
  }
`

const ViewPastBtn = styled.button `
  background-color: #00717F;
  color: white;
  transition: .7s;
  height: fit-content;
  align-self: center;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  font-family: 'Cormorant', serif;
  font-size: 1em;
  &:hover {
    color: #00717F;
    background-color: #00A9BF;
  } 
`

const Homepage = ({wins, setWins, date, setDate, setError}) => {

  useEffect(() => {
    fetch('https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins')
      .then(res => res.json())
      .then(data => {
        setError(false)
        setWins(data.data)
      })
      .catch(err => {
        setError(true)
        console.log(err)
      })
    }, [setWins, setError])

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

  return (
    <>
    <Nav />
    <HomepageContainer>
      <Logo src={logo} alt='Grateful Together Logo' className='logo'></Logo>
      <Form />
      <TodayInfo>
        <h2>Today's Entries:</h2>
          <ViewPastBtn onClick={handleClick}>View Past Entries</ViewPastBtn>
          {isModalOpen && renderModal()}
      </TodayInfo>
      <EntriesContainer wins={wins}/>
    </HomepageContainer>
    </>
  )
} 

export default Homepage