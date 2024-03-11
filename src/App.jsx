import { useState } from 'react';
import './App.css';

function App() {
  let [events, setEvents] = useState([
    {
      id: 1,
      title: "Someone's birhtday"
    },
    {
      id: 2,
      title: "Bowser's live stream"
    },
    {
      id: 3,
      title: "Race on moo moo farm"
    }
  ])

  const handleDelete = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter(e => e.id !== id)
    })
  }

  return (
    <div className="App">
      { events.map( (e) => (
        <div key={e.id}>
          <small>{e.id}</small>
          <p>{e.title}</p>
          <button onClick={() => handleDelete(e.id)}>Delete </button>
        </div>
      ))}

    </div>
  );
}

export default App;
