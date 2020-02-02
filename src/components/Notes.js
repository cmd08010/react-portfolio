import React, { useState } from "react"
import axios from "axios"
import qs from "qs"
import NotesDetails from "./NotesDetails"

export default function Notes({ userId, API, user, params }) {
  const [notes, setNotes] = useState([])

  function getNotes() {
    axios.get(`${API}/users/${userId}/notes`).then(notes => {
      // console.log(notes)
      setNotes(notes.data)
    })
  }
  getNotes()
  return (
    <div className="notes bubble">
      <a href={`#${qs.stringify({ view: "notesdetail" })}`}>Notes</a>
      <p>
        {user.fullName} has {notes.length} notes!
      </p>

      {/* <NotesDetails notes={notes} /> */}
    </div>
  )
}
