import React from "react"
import Notes from "./Notes"
import Vacations from "./Vacations"
import FollowingCompanies from "./FollowingCompanies"

function Home({ user, API, params }) {
  return (
    <div className="components">
      <Notes API={API} user={user} params={params} />
      <Vacations API={API} user={user} params={params} />
      <FollowingCompanies
        userId={user.id}
        API={API}
        user={user}
        params={params}
      />
    </div>
  )
}

export default Home
