import React from "react"

function VacationsDetail({ vacations }) {
  // return null
  return (
    <div>
      {vacations.map((vacation, index) => {
        // console.log(params)
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
}

export default VacationsDetail
