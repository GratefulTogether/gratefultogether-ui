import Homepage from '../Homepage/Homepage'
import Datepage from '../Datepage/Datepage'
import NotFound from '../NotFound/NotFound'
import cardData from '../../cardMockData';
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import { createConsumer } from '@rails/actioncable';



const App = () => {
const [wins, setWins] = useState([])
const [date, setDate] = useState('8/31/2023')
// need to update to setDate

useEffect(() => {
  const cable = createConsumer('ws://localhost:3000/cable');

  const subscription = cable.subscriptions.create({
    channel: 'WinsChannel',
  }, {
    connected: () => console.log('connected'),
    disconnected: () => console.log('disconnected'),
    received: (data) => setWins(data.data),
    // need to write a function to account for the first win being an object and not an array in EntriesContainer
  });

  return () => {
    cable.disconnect();
    subscription.unsubscribe();
  };

},[])

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage wins = {wins} setWins = {setWins} date = {date} setDate= {setDate}/>} />
        <Route path='/date' element={<Datepage date = {date} setDate = {setDate} wins = {wins} setWins = {setWins}/>} />
        <Route path='*' element={<NotFound />}/>
        <Route path='error' element={<NotFound/>}/>
      </Routes> 
    </div>
  );
}

export default App;
