import Homepage from '../Homepage/Homepage'
import Datepage from '../Datepage/Datepage'
import Error from '../Error/Error'
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom'
import { createConsumer } from '@rails/actioncable';
import cardData from '../../cardMockData'

const App = () => {
  const [wins, setWins] = useState(cardData)
  const [date, setDate] = useState(null)
  const [error, setError] = useState(false)
  const navigate = useNavigate([])

  // useEffect(() => {
  //   const cable = createConsumer('wss://gratefultogether-api-49ea7cf50543.herokuapp.com/cable');
  //   const subscription = 
  //   cable.subscriptions.create({
  //     channel: 'WinsChannel',
  //   }, {
      
  //     connected: () => console.log('connected'),
  //     disconnected: () => console.log('disconnected'),
  //     received: (data) => setWins(wins => [...wins, data.data]),

  //   });


  //   cable.connection.events.error = function(e) { 
  //     setError(true) 
  //   }

  //   return () => {
  //     cable.disconnect();
  //     subscription.unsubscribe();
  //   };
 
  // },[])

  // useEffect(() => {
  //   if (error) {
  //     navigate('/error');
  //   } 
  // }, [navigate, error]);

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage wins={wins} setWins={setWins} date={date} setDate={setDate} setError={setError}/>} />
        <Route path='date/:date' element={<Datepage wins={wins} setWins={setWins} setError={setError}/>} />
        <Route path='*' element={<Error />}/>
        <Route path='error' element={<Error error={error}/>}/>
      </Routes> 
    </div>
  );
}

export default App;
