import React, { useState, useEffect } from "react"
import axios from "axios"
import Notes from "./Notes"

export default function NotesDetails({ notes, params }) {
  // Notes()
  return (
    <div>
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
}
