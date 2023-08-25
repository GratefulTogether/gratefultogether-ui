import './App.css';
import Homepage from '../Homepage/Homepage'
import Datepage from '../Datepage/Datepage'
import NotFound from '../NotFound/NotFound'
import Nav from "../NavBar/NavBar.js";
import Cards from "../Cards/Cards.js"
import React from 'react'
import { Routes, Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';


const App = () => {
  return (
    <div>
      <Nav />
      <Cards />
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
