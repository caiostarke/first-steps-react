import { useState } from 'react';
import React from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  let [showModal, setShowModal] = useState(true)

  let [showEvents, setShowEvents] = useState(true);
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

  const handleClose = () => {
      setShowModal(false);
  }

  const subtitle = "All events inside your land"

  return (
    <div className="App">
      <Title title="Events" subtitle={subtitle} />

      <button onClick={() => setShowEvents(!showEvents)}> {showEvents ? "Hide Events" : "Show Events"} </button>

      { showEvents && events.map( (e) => (
        <React.Fragment key={e.id}>
          <small>{e.id}</small>
          <p>{e.title}</p>
          <button onClick={() => handleDelete(e.id)}>Delete </button>
        </React.Fragment>
      ))}

    { showModal && <Modal handleClose={handleClose}> 
        <h2> 10% Off Cupon Code!</h2>
         <p>Use the Code KAER10 at the checkout.</p>
      </Modal> }
    </div> 
  );
}

export default App;
