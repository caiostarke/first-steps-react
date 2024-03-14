import React, { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({newEvent}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState('Santa Catarina')

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("Santa Catarina");
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title && date) {
      const event = {
        id: Math.floor(Math.random() * 10000),
        title: title,
        date: date,
        location: location
      }
      newEvent(event)
      resetForm()
    }
  }

  return (
    <form className='form__new--event' onSubmit={handleSubmit}>
      <label >
        <span>Event Title:</span>
        <input type="text" 
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        />
      </label>

      <label >
        <span>Event Date:</span>
        <input type="date" 
        onChange={(event) => setDate(event.target.value)}
        value={date}
        />
      </label>
      <label >
        <span>Event Location:</span>
        <select onChange={(event) => setLocation(event.target.value)}>
          <option value="Santa Catarina">Santa Catarina</option>
          <option value="Parana">Parana</option>
          <option value="Sao Paulo">São Paulo</option>
        </select>
      </label>
      <button> Submit</button>
    </form>
  )
}
  