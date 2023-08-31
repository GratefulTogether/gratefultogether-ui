import './Datepage.css'
import Homelogo from '../../images/Homelogo.png'
import Nav from "../NavBar/NavBar.js";
import EntriesContainer from '../EntriesContainer/EntriesContainer';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs'
import { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
// import { useEffect } from 'react';

const Datepage = ({wins, setWins}) => {
  let { date } = useParams()
  const formattedDate = dayjs(date).format('MMMM D, YYYY')
  const navigate = useNavigate();

  useEffect(() => {
    if (formattedDate === 'Invalid Date' || !date) {
      navigate("*");
    }
    else {
      getEntryByDate(date)
    }
  }, [])

  const getEntryByDate = (date) => {
    fetch(`http://localhost:3000/api/v1/wins?date=${date}`)
      .then(res => res.json())
      .then(data => setWins(data.data))
      .catch(err => console.log(err))
  }

  if (!wins) {
    return (
      <p>Loading...</p>
    )
  }

  const handleClick = () => {
    console.log('Workin!')
  }

  return (
    <>
      <Nav />
      <div className='date-page-container'>
        <NavLink to = "/" onClick={handleClick}>
          <img className='home-logo' src={Homelogo} alt="home logo" />
        </NavLink>
        <h1>Entries for {formattedDate}:</h1>
        <EntriesContainer wins={wins}/>
      </div>
    </>
  )
}

export default Datepage