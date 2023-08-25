import './App.css';
import Homepage from '../Homepage/Homepage'
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route path='date/:date' element={<Datepage/>} />
      <Route path='*' element={<NotFound />}/>
      <Route path='error' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
