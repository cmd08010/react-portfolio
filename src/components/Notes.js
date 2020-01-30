import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Notes({ userId, API }) {
  const [notes, setNotes] = useState([])

  function getNotes() {
    axios.get(`${API}/users/${userId}/notes`).then(notes => {
      // console.log(notes)
      setNotes(notes.data)
    })
  }
  getNotes()

  if ("yes") {
    return (
      <div className="notes">
        <div>
          <h1>Notes!</h1>
        </div>
        {notes.length}
      </div>
    )
  } else {
    return (
      <div>
        {notes.map((note, index) => {
          return (
            <div key={index}>
              <h1>Note</h1>
              <h3>{note.createdAt}</h3>
              Summary: {note.text}
            </div>
          )
        })}
      </div>
    )
  }
}
