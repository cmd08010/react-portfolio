import React, { useState, useEffect } from "react"
import axios from "axios"
import qs from "qs"
import VacationsDetail from "./VacationsDetail"

export default function Vacations({ userId, params, API }) {
  const [vacations, setVacations] = useState([])

  useEffect(() => {
    axios.get(`${API}/users/${userId}/vacations`).then(response => {
      const vacationsCopy = response.data
      setVacations(vacationsCopy)
    })
  }, [userId, API])

  if (params.view === "vacations") {
    return (
      <div className="vacations bubble">
        <a href="#view=vacations">Vacations</a>
        <div>You have {vacations.length} vacations!</div>
        {vacations.map((vacation, index) => {
          return (
            <div key={index}>
              <h1>Vacation {index + 1}</h1>
              <h3>Starts: {vacation.startDate}</h3>
              Ends: {vacation.endDate}
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="vacations bubble">
        <a href="#view=vacations">Vacations</a>
        <div>You have {vacations.length} vacations!</div>
      </div>
    )
  }
}
