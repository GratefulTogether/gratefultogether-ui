import Homepage from '../Homepage/Homepage'
import Datepage from '../Datepage/Datepage'
import NotFound from '../NotFound/NotFound'
import cardData from '../../cardMockData';
import './App.css'
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';


const App = () => {
const [wins, setWins] = useState(cardData)

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage wins = {wins} setWins = {setWins} />} />
        <Route path='date/:date' element={<Datepage/>} />
        <Route path='*' element={<NotFound />}/>
        <Route path='error' element={<NotFound/>}/>
      </Routes> 
    </div>
  );
}

export default App;
