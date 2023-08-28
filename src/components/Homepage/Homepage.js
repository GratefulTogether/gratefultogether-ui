import Form from '../Form/Form.js'
import logo from '../../images/GratefulTogetherLogo.png'
import styled from 'styled-components';

const Homepage = () => {

  const HomepageContainer = styled.div `
    display: flex;
    flex-direction: column;
  `
  
  const Logo = styled.img `
    height: auto;
    width: 300px;
    align-self: center;
  `


  return (
    <HomepageContainer>
      <Logo src={logo} alt='Grateful Together Logo' className='logo'></Logo>
      <Form />
    </HomepageContainer>
  )
} 

export default Homepage