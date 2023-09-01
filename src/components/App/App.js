import Homepage from '../Homepage/Homepage'
import Datepage from '../Datepage/Datepage'
import NotFound from '../NotFound/NotFound'
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import { createConsumer } from '@rails/actioncable';

const App = () => {
  const [wins, setWins] = useState([])
  const [date, setDate] = useState(null)

  useEffect(() => {
    const cable = createConsumer('wss://gratefultogether-api-49ea7cf50543.herokuapp.com/cable');

    const subscription = cable.subscriptions.create({
      channel: 'WinsChannel',
    }, {
      connected: () => console.log('connected'),
      disconnected: () => console.log('disconnected'),
      received: (data) => setWins(wins => [...wins, data.data])
    });

    return () => {
      cable.disconnect();
      subscription.unsubscribe();
    };
  },[])

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage wins={wins} setWins={setWins} date={date} setDate={setDate}/>} />
        <Route path='date/:date' element={<Datepage wins={wins} setWins={setWins}/>} />
        <Route path='*' element={<NotFound />}/>
        <Route path='error' element={<NotFound/>}/>
      </Routes> 
    </div>
  );
}

export default App;
