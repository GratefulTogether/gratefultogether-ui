import Form from '../Form/Form.js'
import logo from '../../images/GratefulTogetherLogo.png'
import styled from 'styled-components';
import EntriesContainer from "../EntriesContainer/EntriesContainer"
import Nav from "../NavBar/NavBar.js";

const HomepageContainer = styled.div `
  display: flex;
  flex-direction: column;
`

const Logo = styled.img `
  height: auto;
  width: 450px;
  align-self: center;
`

const Homepage = ({wins, setWins, date, setDate}) => {

  return (
    <>
    <Nav />
    <HomepageContainer>
      <Logo src={logo} alt='Grateful Together Logo' className='logo'></Logo>
      <Form />
      <EntriesContainer wins = {wins} setWins = {setWins} date={date} setDate={setDate}/>
    </HomepageContainer>
    </>
  )
} 

export default Homepage