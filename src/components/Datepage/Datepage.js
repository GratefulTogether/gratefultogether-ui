import './Datepage.css'
import Homelogo from '../../images/Homelogo.png'
import EntriesContainer from '../EntriesContainer/EntriesContainer';
import dayjs from 'dayjs'
import { useEffect } from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import { styled } from 'styled-components';

const DatePageContainer = styled.div `
  display:flex; 
  flex-direction: column;
  align-items: center;`

const Datepage = ({wins, setWins, setError}) => {
  let { date } = useParams()
  const formattedDate = dayjs(date).format('MMMM D, YYYY')
  const navigate = useNavigate();

  const getEntryByDate = (date) => {
    fetch(`https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins?date=${date}`)
      .then(res => res.json())
      .then(data => {
        setWins(data.data)
        setError(false)
      })
      .catch(err => {
        setError(true)
        console.log(err)
      })
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
      <DatePageContainer>
        <NavLink to = "/">
          <img className='home-logo' src={Homelogo} alt="home logo" />
        </NavLink>
        <h1>Entries for {formattedDate}:</h1>
        <EntriesContainer wins={wins}/>
      </DatePageContainer>
    </>
  )
}

export default Datepage