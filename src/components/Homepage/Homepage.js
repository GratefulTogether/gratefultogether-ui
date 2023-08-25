import Form from '../Form/Form.js'
import './Homepage.css'
import logo from '../../images/GratefulTogetherLogo.png'

const Homepage = () => {

  return (
    <div className='Homepage'>
      <img src={logo} alt='Grateful Together Logo' className='logo'></img>
      <Form />
    </div>
  )
} 

export default Homepage