import { useState } from 'react';
import './App.css';

function App() {
  let [name, setName] = useState("Kaer");
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

  const handeClick = () => {
    setName("Another thing but Kaer");
    console.log(name)
  }

  return (
    <div className="App">
      <h1 >Hello {name}</h1>
      <button onClick={handeClick}> change name </button>

      { events.map( (e) => (
        <div key={e.id}>
          <small>{e.id}</small>
          <p>{e.title}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
