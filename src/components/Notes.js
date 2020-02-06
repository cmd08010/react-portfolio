import React, { useState } from "react"
import axios from "axios"
import qs from "qs"
import NotesDetails from "./NotesDetails"

export default function Notes({ API, user, params }) {
  const [notes, setNotes] = useState([])

  axios.get(`${API}/users/${user.id}/notes`).then(notes => {
    setNotes(notes.data)
  })

  if (params.view === "notes") {
    return (
      <div className="notes bubble">
        <a href="#view=notes">Notes</a>
        <div>You have {notes.length} notes!</div>
        {notes.map((note, index) => {
          return (
            <div className="notes details" key={index}>
              <h1>Note {index + 1}</h1>
              <h3>{note.createdAt}</h3>
              Summary: {note.text}
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="notes bubble">
        <a href="#view=notes">Notes</a>
        <div>You have {notes.length} notes!</div>
      </div>
    )
  }
}
