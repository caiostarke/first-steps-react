import React from 'react'
import styles from './eventList.module.css'

export default function EventList({events, handleDelete}) {
  return (
    <div>
    
    {events.map( (e) => (
        <div className={styles.card} key={e.id}>
          <small>{e.id}</small>
          <p>{e.title}</p>
          <p>{e.location}</p>
          <button onClick={() => handleDelete(e.id)}>Delete </button>
        </div>
      ))
    } 
    </div>
  )
}