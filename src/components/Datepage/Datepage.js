import './Datepage.css'
import Homelogo from '../../images/Homelogo.png'
import Nav from "../NavBar/NavBar.js";
import EntriesContainer from '../EntriesContainer/EntriesContainer';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs'
import {useLocation} from 'react-router-dom'

const Datepage = ({date, setDate, wins, setWins}) => {

  
  const path = useLocation()
  const {pathname} = path
  const urlDate = pathname.slice(pathname.length - 10, pathname.length)

 

  const bannerDate = dayjs(urlDate);
  const formattedDate = bannerDate.format('MMMM D YYYY');



  return (
    <>
      <Nav />
      <div className='date-page-container'>
        <NavLink to = "/">
        <img className='home-logo' src={Homelogo} alt="logo with open book" />
        </NavLink>
        <h1>Entries for {formattedDate}:</h1>
      <EntriesContainer wins={wins} date={date} setDate={setDate}/>
      </div>
    </>
  )
}

export default Datepage