import React from 'react'
import Cards from '../Cards/Cards'

const EntriesContainer = ({wins}) => {
  const singleWin = wins.data.map(win => {
    return (
      <div className= "entries-container" key={win.id}> 
        <Cards name={win.attributes.user_name} entry={win.attributes.entry} date={win.attributes.created_at}/>
      </div>
    );
  });

  return (
    <div>
      {singleWin} 
    </div>
  );
}

export default EntriesContainer