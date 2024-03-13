import React, { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({newEvent, closeModal}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title && date) {
      const event = {
        id: Math.floor(Math.random() * 10000),
        title: title,
        date: date
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
      <button> Submit</button>
    </form>
  )
}
  