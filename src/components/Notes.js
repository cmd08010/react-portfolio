import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Notes({ userId, API }) {
  const [notes, setNotes] = useState([])

  function getNotes() {
    axios.get(`${API}/users/${userId}/notes`).then(notes => console.log(notes))
  }
  getNotes()
  return <div>{userId}</div>
}
