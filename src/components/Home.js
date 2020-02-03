import React from "react"
import Notes from "./Notes"
import Vacations from "./Vacations"
import FollowingCompanies from "./FollowingCompanies"

function Home({ user, API, params }) {
  return (
    <div className="components">
      <Notes userId={user.id} API={API} user={user} params={params} />
      <Vacations userId={user.id} API={API} />
      <FollowingCompanies userId={user.id} API={API} />
    </div>
  )
}

export default Home
