import React, {  useRef } from 'react'
import './NewEventForm.css'

export default function NewEventForm({newEvent, closeModal}) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  
  const title = useRef()
  const date = useRef()

  const resetForm = () => {
    title.current.value = ""
    date.current.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, date)
    if(title && date) {
      const event = {
        id: Math.floor(Math.random() * 10000),
        title: title.current.value,
        date: date.current.value
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
        ref={title}
        />
      </label>

      <label >
        <span>Event Date:</span>
        <input type="date"
        ref={date} 
        />
      </label>
      <button> Submit</button>
    </form>
  )
}
  