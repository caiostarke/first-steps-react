import { useState } from 'react';
import React from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App() {
  let [showEvents, setShowEvents] = useState(true);
  let [showModal, setShowModal] = useState(false);
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
    setShowModal(false)
  }

  const subtitle = "All events inside your land"

  return (
    <div className="App">
      <Title title="Events" subtitle={subtitle} />

      <button onClick={() => setShowEvents(!showEvents)}> {showEvents ? "Hide Events" : "Show Events"} </button>

      { showEvents && <EventList events={events} handleDelete={handleDelete} />}

      { showModal && <Modal handleClose={handleClose} isSalesModal={false}> 
          <NewEventForm />
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>  Add new Event</button>        
      </div>

    </div> 
  );
}

export default App;
