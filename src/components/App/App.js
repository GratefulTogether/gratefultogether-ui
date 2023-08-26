import './App.css';
import Homepage from '../Homepage/Homepage'
import Datepage from '../Datepage/Datepage'
import NotFound from '../NotFound/NotFound'
import Nav from "../NavBar/NavBar.js";
import EntriesContainer from "../EntriesContainer/EntriesContainer"
import cardData from '../../cardMockData';
import React from 'react'
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';


const App = () => {
const [wins, setWins] = useState(cardData)

  return (
    <div>
      <Nav />
      <EntriesContainer wins = {wins} setWins = {setWins}/>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='date/:date' element={<Datepage/>} />
        <Route path='*' element={<NotFound />}/>
        <Route path='error' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
