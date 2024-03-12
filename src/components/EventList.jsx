import React from 'react'

export default function EventList({events, handleDelete}) {
  return (
    <div>
    
    {events.map( (e) => (
        <React.Fragment key={e.id}>
          <small>{e.id}</small>
          <p>{e.title}</p>
          <button onClick={() => handleDelete(e.id)}>Delete </button>
        </React.Fragment>
      ))
    } 
    
    </div>
  )
}
