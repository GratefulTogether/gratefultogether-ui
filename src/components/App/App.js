import Homepage from '../Homepage/Homepage'
import Datepage from '../Datepage/Datepage'
import NotFound from '../NotFound/NotFound'
import cardData from '../../cardMockData';
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import { createConsumer } from '@rails/actioncable';



const App = () => {
const [wins, setWins] = useState(cardData)
const [date, setDate] = useState('8/31/2023')

useEffect(() => {
  const cable = createConsumer('ws://localhost:5000/cable');

  const subscription = cable.subscriptions.create({
    channel: 'WinsChannel',
    // username: 'cool_kid_20',
  }, {
    connected: () => console.log('connected'),
    disconnected: () => console.log('disconnected'),
    received: (data) => console.log(data),
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
