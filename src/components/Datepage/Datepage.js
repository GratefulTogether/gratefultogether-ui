import './Datepage.css'
import Homelogo from '../../images/Homelogo.png'
import Nav from "../NavBar/NavBar.js";
import EntriesContainer from '../EntriesContainer/EntriesContainer';
import dayjs from 'dayjs'
import { useEffect } from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom'

const Datepage = ({wins, setWins}) => {
  let { date } = useParams()
  const formattedDate = dayjs(date).format('MMMM D, YYYY')
  const navigate = useNavigate();

  const getEntryByDate = (date) => {
    fetch(`http://localhost:3000/api/v1/wins?date=${date}`)
      .then(res => res.json())
      .then(data => setWins(data.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (formattedDate === 'Invalid Date' || !date) {
      navigate("*");
    }
    else {
      getEntryByDate(date)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!wins) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      <Nav />
      <div className='date-page-container'>
        <NavLink to = "/">
          <img className='home-logo' src={Homelogo} alt="home logo" />
        </NavLink>
        <h1>Entries for {formattedDate}:</h1>
        <EntriesContainer wins={wins}/>
      </div>
    </>
  )
}

export default Datepage