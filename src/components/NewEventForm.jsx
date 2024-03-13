import React, { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  }

  return (
    <form className='form__new--event'>
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
      <p> Title - {title} </p> <p> Date - {date}</p>
      <p onClick={resetForm}> Reset Form </p>
    </form>
  )
}
  