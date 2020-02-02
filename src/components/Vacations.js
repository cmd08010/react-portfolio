import React, { useState, useEffect } from "react"
import axios from "axios"
import qs from "qs"

export default function Vacations(props) {
  const [vacations, setVacations] = useState([])

  useEffect(() => {
    axios.get(`${props.API}/users/${props.userId}/vacations`).then(response => {
      const vacationsCopy = response.data
      setVacations(vacationsCopy)
    })
  }, [props.userId, props.API])

  return (
    <div className="vacations bubble">
      <a href={`#${qs.stringify({ view: "vacationsdetail" })}`}>
        <h3>Vacations</h3>
      </a>
      <p>You have {vacations.length} vacations.</p>
    </div>
  )
}
