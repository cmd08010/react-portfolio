import React, { useState } from "react"
import axios from "axios"
import qs from "qs"
import NotesDetails from "./NotesDetails"

export default function Notes({ userId, API, user, params }) {
  const [notes, setNotes] = useState([])
  //console.log(params)

  axios.get(`${API}/users/${userId}/notes`).then(notes => {
    setNotes(notes.data)
  })

  return (
    <div className="notes bubble">
      <a href="#view=notes">Notes</a>
      {/* // {console.log(params)} */}
      <div>You have {notes.length} notes!</div>
      {params.view === "notes" && <NotesDetails notes={notes} />}
    </div>
  )
}
