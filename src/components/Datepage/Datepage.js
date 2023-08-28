import './Datepage.css'
import Homelogo from '../../images/Homelogo.png'
import Nav from "../NavBar/NavBar.js";
import EntriesContainer from '../EntriesContainer/EntriesContainer';

const Datepage = ({date, setDate, wins, setWins}) => {
  return (
    <>
      <Nav />
      <div className='date-page-container'>
        <img className='home-logo' src={Homelogo} alt="logo with open book" />
        <h1>Entries for {date}:</h1>
      <EntriesContainer wins={wins} setWins={setWins} />
      </div>
    </>
  )
}

export default Datepage