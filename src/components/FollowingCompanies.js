import React, { useState, useEffect } from "react"
import axios from "axios"

export default function FollowingCompanies(props) {
  const [companies, setCompanies] = useState([])
  const [companyId, setCompanyId] = useState([])
  const [totalCompanies, setTotalCompanies] = useState([])

  useEffect(() => {
    axios
      .get(`${props.API}/users/${props.userId}/followingCompanies`)
      .then(companies => {
        const companyCopy = companies.data
        setCompanies(companyCopy)
      })
  }, [props.userId, props.API])

  useEffect(() => {
    axios
      .get(`https://acme-users-api-rev.herokuapp.com/api/companies/`)
      .then(response => response.data)
      .then(response => {
        //for each company of the total companies, if the id matches the id from the companyID state then console log the name
        // console.log(companyId, "company ID")

        setTotalCompanies([...response])
      })
  }, [])

  totalCompanies.filter(company => {
    companies.forEach(companyForEach => {
      //   console.log(companyForEach.companyId, " EQUSL??", company.id)
      // console.log(company.id)
      if (company.id === companyForEach.companyId) {
        setCompanies([company])
      }
    })
  })

  if (props.params.view === "companies") {
    return (
      <div className="companies bubble">
        <h3>
          <a href="#view=companies">Companies</a>
        </h3>
        <p>You are following {companies.length} companies.</p>
        {companies.map((company, index) => {
          return (
            <div key={index}>
              <h1>Company: {company.name}</h1>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="companies bubble">
        <h3>
          <a href="#view=companies">Companies</a>
        </h3>
        <p>You are following {companies.length} companies.</p>
      </div>
    )
  }
}
